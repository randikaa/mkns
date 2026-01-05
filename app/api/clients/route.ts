import { NextRequest, NextResponse } from 'next/server'
import { db, clients, type NewClient } from '@/lib/db'
import { eq } from 'drizzle-orm'

// GET - Fetch all clients
export async function GET() {
  try {
    const allClients = await db.select().from(clients).orderBy(clients.createdAt)
    
    // Remove password from response for security
    const clientsWithoutPassword = allClients.map(({ password, ...client }) => client)
    
    return NextResponse.json({ clients: clientsWithoutPassword })
  } catch (error) {
    console.error('Error fetching clients:', error)
    return NextResponse.json(
      { error: 'Failed to fetch clients' },
      { status: 500 }
    )
  }
}

// POST - Create new client
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { companyName, contactName, email, phone, address, password, notes } = body

    // Basic validation
    if (!companyName || !contactName || !email || !phone || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingClient = await db.select().from(clients).where(eq(clients.email, email)).limit(1)
    if (existingClient.length > 0) {
      return NextResponse.json(
        { error: 'Client with this email already exists' },
        { status: 409 }
      )
    }

    // In production, you should hash the password before storing
    // For now, we'll store it as plain text (NOT RECOMMENDED for production)
    const newClient: NewClient = {
      companyName,
      contactName,
      email,
      phone,
      address: address || null,
      password, // In production: await bcrypt.hash(password, 10)
      notes: notes || null,
      status: 'Active'
    }

    const [createdClient] = await db.insert(clients).values(newClient).returning()
    
    // Remove password from response
    const { password: _, ...clientResponse } = createdClient
    
    return NextResponse.json({ 
      message: 'Client created successfully',
      client: clientResponse 
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating client:', error)
    return NextResponse.json(
      { error: 'Failed to create client' },
      { status: 500 }
    )
  }
}