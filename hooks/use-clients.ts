import { useState, useEffect, useCallback } from 'react'

export interface Client {
  id: number
  companyName: string
  contactName: string
  email: string
  phone: string
  address?: string | null
  notes?: string | null
  status: string
  createdAt: string
  updatedAt: string
}

export interface NewClientData {
  companyName: string
  contactName: string
  email: string
  phone: string
  address?: string
  password: string
  notes?: string
}

export function useClients() {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchClients = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('/api/clients')

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to fetch clients')
      }

      const data = await response.json()
      setClients(data.clients || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Error fetching clients:', err)
      setClients([])
    } finally {
      setLoading(false)
    }
  }, [])

  const addClient = useCallback(async (clientData: NewClientData): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch('/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
      })

      const data = await response.json()

      if (!response.ok) {
        return { success: false, error: data.error || 'Failed to create client' }
      }

      // Refresh the clients list
      await fetchClients()

      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      console.error('Error adding client:', err)
      return { success: false, error: errorMessage }
    }
  }, [fetchClients])

  const updateClient = useCallback(async (id: number, clientData: Partial<Client>): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch(`/api/clients/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
      })

      const data = await response.json()

      if (!response.ok) {
        return { success: false, error: data.error || 'Failed to update client' }
      }

      // Refresh the clients list
      await fetchClients()

      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      console.error('Error updating client:', err)
      return { success: false, error: errorMessage }
    }
  }, [fetchClients])

  const deleteClient = useCallback(async (id: number): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch(`/api/clients/${id}`, {
        method: 'DELETE',
      })

      const data = await response.json()

      if (!response.ok) {
        return { success: false, error: data.error || 'Failed to delete client' }
      }

      // Refresh the clients list
      await fetchClients()

      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      console.error('Error deleting client:', err)
      return { success: false, error: errorMessage }
    }
  }, [fetchClients])

  useEffect(() => {
    fetchClients()
  }, [fetchClients])

  return {
    clients,
    loading,
    error,
    fetchClients,
    addClient,
    updateClient,
    deleteClient,
  }
}
