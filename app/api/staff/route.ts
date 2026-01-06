import { NextRequest, NextResponse } from 'next/server'
import { db, staff, type NewStaff } from '@/lib/db'
import { eq } from 'drizzle-orm'

// GET - Fetch all staff
export async function GET() {
  try {
    const allStaff = await db.select().from(staff).orderBy(staff.createdAt)

    return NextResponse.json({ staff: allStaff })
  } catch (error) {
    console.error('Error fetching staff:', error)
    return NextResponse.json(
      { error: 'Failed to fetch staff' },
      { status: 500 }
    )
  }
}

// POST - Create new staff member
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, position, department, salary, hireDate, password, notes } = body

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !position || !department || !hireDate || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingStaff = await db.select().from(staff).where(eq(staff.email, email)).limit(1)
    if (existingStaff.length > 0) {
      return NextResponse.json(
        { error: 'Staff member with this email already exists' },
        { status: 409 }
      )
    }

    // In production, you should hash the password before storing
    // For now, we'll store it as plain text (NOT RECOMMENDED for production)
    const newStaff: NewStaff = {
      firstName,
      lastName,
      email,
      phone,
      position,
      department,
      salary: salary || null,
      hireDate: new Date(hireDate),
      password, // In production: await bcrypt.hash(password, 10)
      notes: notes || null,
      status: 'Active'
    }

    const [createdStaff] = await db.insert(staff).values(newStaff).returning()

    // Remove password from response
    const { password: _, ...staffResponse } = createdStaff

    return NextResponse.json({
      message: 'Staff member created successfully',
      staff: staffResponse
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating staff member:', error)
    return NextResponse.json(
      { error: 'Failed to create staff member' },
      { status: 500 }
    )
  }
}