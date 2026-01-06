import { useState, useEffect, useCallback } from 'react'

export interface Staff {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  position: string
  department: string
  salary?: string | null
  hireDate: string
  notes?: string | null
  status: string
  createdAt: string
  updatedAt: string
}

export interface NewStaffData {
  firstName: string
  lastName: string
  email: string
  phone: string
  position: string
  department: string
  salary?: string
  hireDate: string
  password: string
  notes?: string
}

export function useStaff() {
  const [staff, setStaff] = useState<Staff[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchStaff = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('/api/staff')

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to fetch staff')
      }

      const data = await response.json()
      setStaff(data.staff || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Error fetching staff:', err)
      setStaff([])
    } finally {
      setLoading(false)
    }
  }, [])

  const addStaff = useCallback(async (staffData: NewStaffData): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch('/api/staff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(staffData),
      })

      const data = await response.json()

      if (!response.ok) {
        return { success: false, error: data.error || 'Failed to create staff member' }
      }

      // Refresh the staff list
      await fetchStaff()

      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      console.error('Error adding staff member:', err)
      return { success: false, error: errorMessage }
    }
  }, [fetchStaff])

  const updateStaff = useCallback(async (id: number, staffData: Partial<Staff>): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch(`/api/staff/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(staffData),
      })

      const data = await response.json()

      if (!response.ok) {
        return { success: false, error: data.error || 'Failed to update staff member' }
      }

      // Refresh the staff list
      await fetchStaff()

      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      console.error('Error updating staff member:', err)
      return { success: false, error: errorMessage }
    }
  }, [fetchStaff])

  const deleteStaff = useCallback(async (id: number): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch(`/api/staff/${id}`, {
        method: 'DELETE',
      })

      const data = await response.json()

      if (!response.ok) {
        return { success: false, error: data.error || 'Failed to delete staff member' }
      }

      // Refresh the staff list
      await fetchStaff()

      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      console.error('Error deleting staff member:', err)
      return { success: false, error: errorMessage }
    }
  }, [fetchStaff])

  useEffect(() => {
    fetchStaff()
  }, [fetchStaff])

  return {
    staff,
    loading,
    error,
    fetchStaff,
    addStaff,
    updateStaff,
    deleteStaff,
  }
}
