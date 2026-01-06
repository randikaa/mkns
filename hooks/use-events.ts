import { useState, useEffect, useCallback } from 'react'

export interface Event {
  id: number
  title: string
  description?: string
  startTime: string
  endTime: string
  location?: string
  eventType: string
  status: string
  priority: string
  client?: {
    id: number
    companyName: string
    contactName: string
  }
  staff?: {
    id: number
    firstName: string
    lastName: string
  }
}

export interface NewEvent {
  title: string
  description?: string
  startTime: string
  endTime: string
  location?: string
  clientId?: number
  staffId?: number
  clientName?: string
  staffName?: string
  eventType: string
  status?: string
  priority?: string
}

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([])
  const [next48HourEvents, setNext48HourEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchEvents = useCallback(async (startDate?: string, endDate?: string) => {
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams()
      if (startDate) params.append('startDate', startDate)
      if (endDate) params.append('endDate', endDate)

      const response = await fetch(`/api/events?${params}`)
      if (!response.ok) throw new Error('Failed to fetch events')

      const data = await response.json()
      setEvents(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchNext48HourEvents = useCallback(async () => {
    try {
      const response = await fetch('/api/events?next48Hours=true')
      if (!response.ok) throw new Error('Failed to fetch next 48 hour events')

      const data = await response.json()
      setNext48HourEvents(data)
    } catch (err) {
      console.error('Error fetching next 48 hour events:', err)
    }
  }, [])

  const createEvent = useCallback(async (eventData: NewEvent) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      })

      if (!response.ok) throw new Error('Failed to create event')

      const newEvent = await response.json()
      setEvents(prev => [...prev, newEvent])
      await fetchNext48HourEvents() // Refresh next 48 hours
      return newEvent
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    } finally {
      setLoading(false)
    }
  }, [fetchNext48HourEvents])

  const updateEvent = useCallback(async (id: number, eventData: Partial<NewEvent>) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/events/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      })

      if (!response.ok) throw new Error('Failed to update event')

      const updatedEvent = await response.json()
      setEvents(prev => prev.map(event => event.id === id ? updatedEvent : event))
      await fetchNext48HourEvents() // Refresh next 48 hours
      return updatedEvent
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    } finally {
      setLoading(false)
    }
  }, [fetchNext48HourEvents])

  const deleteEvent = useCallback(async (id: number) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Failed to delete event')

      setEvents(prev => prev.filter(event => event.id !== id))
      await fetchNext48HourEvents() // Refresh next 48 hours
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      throw err
    } finally {
      setLoading(false)
    }
  }, [fetchNext48HourEvents])

  useEffect(() => {
    fetchNext48HourEvents()
  }, [fetchNext48HourEvents])

  return {
    events,
    next48HourEvents,
    loading,
    error,
    fetchEvents,
    fetchNext48HourEvents,
    createEvent,
    updateEvent,
    deleteEvent,
  }
}
