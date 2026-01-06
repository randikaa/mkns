import { NextRequest, NextResponse } from 'next/server'
import { db, clients } from '@/lib/db'
import { eq } from 'drizzle-orm'

// GET - Fetch single client
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const clientId = parseInt(params.id)

    if (isNaN(clientId)) {
      return NextResponse.json(
        { error: 'Invalid client ID' },
        { status: 400 }
      )
    }

    const [client] = await db.select().from(clients).where(eq(clients.id, clientId)).limit(1)

    if (!client) {
      return NextResponse.json(
        { error: 'Client not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ client })
  } catch (error) {
    console.error('Error fetching client:', error)
    return NextResponse.json(
      { error: 'Failed to fetch client' },
      { status: 500 }
    )
  }
}

// PUT - Update client
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const clientId = parseInt(params.id)

    if (isNaN(clientId)) {
      return NextResponse.json(
        { error: 'Invalid client ID' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const { companyName, contactName, email, phone, address, notes, status } = body

    const [updatedClient] = await db
      .update(clients)
      .set({
        companyName,
        contactName,
        email,
        phone,
        address,
        notes,
        status,
        updatedAt: new Date()
      })
      .where(eq(clients.id, clientId))
      .returning()

    if (!updatedClient) {
      return NextResponse.json(
        { error: 'Client not found' },
        { status: 404 }
      )
    }

    // Remove password from response
    const { password, ...clientResponse } = updatedClient

    return NextResponse.json({
      message: 'Client updated successfully',
      client: clientResponse
    })
  } catch (error) {
    console.error('Error updating client:', error)
    return NextResponse.json(
      { error: 'Failed to update client' },
      { status: 500 }
    )
  }
}

// DELETE - Delete client
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const clientId = parseInt(params.id)

    if (isNaN(clientId)) {
      return NextResponse.json(
        { error: 'Invalid client ID' },
        { status: 400 }
      )
    }

    const [deletedClient] = await db
      .delete(clients)
      .where(eq(clients.id, clientId))
      .returning()

    if (!deletedClient) {
      return NextResponse.json(
        { error: 'Client not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      message: 'Client deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting client:', error)
    return NextResponse.json(
      { error: 'Failed to delete client' },
      { status: 500 }
    )
  }
}