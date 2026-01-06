import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { events, clients, staff } from '@/lib/db/schema'
import { eq, gte, lte, and } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const next48Hours = searchParams.get('next48Hours')

    let query = db
      .select({
        id: events.id,
        title: events.title,
        description: events.description,
        startTime: events.startTime,
        endTime: events.endTime,
        location: events.location,
        eventType: events.eventType,
        status: events.status,
        priority: events.priority,
        client: {
          id: clients.id,
          companyName: clients.companyName,
          contactName: clients.contactName,
        },
        staff: {
          id: staff.id,
          firstName: staff.firstName,
          lastName: staff.lastName,
        },
      })
      .from(events)
      .leftJoin(clients, eq(events.clientId, clients.id))
      .leftJoin(staff, eq(events.staffId, staff.id))

    if (next48Hours === 'true') {
      const now = new Date()
      const in48Hours = new Date(now.getTime() + 48 * 60 * 60 * 1000)
      query = query.where(
        and(
          gte(events.startTime, now),
          lte(events.startTime, in48Hours)
        )
      )
    } else if (startDate && endDate) {
      query = query.where(
        and(
          gte(events.startTime, new Date(startDate)),
          lte(events.startTime, new Date(endDate))
        )
      )
    }

    const result = await query

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const newEvent = await db.insert(events).values({
      title: body.title,
      description: body.description,
      startTime: new Date(body.startTime),
      endTime: new Date(body.endTime),
      location: body.location,
      clientId: body.clientId || null,
      staffId: body.staffId || null,
      eventType: body.eventType,
      status: body.status || 'Scheduled',
      priority: body.priority || 'Medium',
    }).returning()

    return NextResponse.json(newEvent[0], { status: 201 })
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    )
  }
}