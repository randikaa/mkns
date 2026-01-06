import { NextRequest, NextResponse } from 'next/server'
import { db, staff } from '@/lib/db'
import { eq } from 'drizzle-orm'

// GET - Fetch single staff member
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const staffId = parseInt(params.id)

    if (isNaN(staffId)) {
      return NextResponse.json(
        { error: 'Invalid staff ID' },
        { status: 400 }
      )
    }

    const [staffMember] = await db.select().from(staff).where(eq(staff.id, staffId)).limit(1)

    if (!staffMember) {
      return NextResponse.json(
        { error: 'Staff member not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ staff: staffMember })
  } catch (error) {
    console.error('Error fetching staff member:', error)
    return NextResponse.json(
      { error: 'Failed to fetch staff member' },
      { status: 500 }
    )
  }
}

// PUT - Update staff member
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const staffId = parseInt(params.id)

    if (isNaN(staffId)) {
      return NextResponse.json(
        { error: 'Invalid staff ID' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const { firstName, lastName, email, phone, position, department, salary, hireDate, notes, status } = body

    const [updatedStaff] = await db
      .update(staff)
      .set({
        firstName,
        lastName,
        email,
        phone,
        position,
        department,
        salary,
        hireDate: hireDate ? new Date(hireDate) : undefined,
        notes,
        status,
        updatedAt: new Date()
      })
      .where(eq(staff.id, staffId))
      .returning()

    if (!updatedStaff) {
      return NextResponse.json(
        { error: 'Staff member not found' },
        { status: 404 }
      )
    }

    // Remove password from response
    const { password, ...staffResponse } = updatedStaff

    return NextResponse.json({
      message: 'Staff member updated successfully',
      staff: staffResponse
    })
  } catch (error) {
    console.error('Error updating staff member:', error)
    return NextResponse.json(
      { error: 'Failed to update staff member' },
      { status: 500 }
    )
  }
}

// DELETE - Delete staff member
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const staffId = parseInt(params.id)

    if (isNaN(staffId)) {
      return NextResponse.json(
        { error: 'Invalid staff ID' },
        { status: 400 }
      )
    }

    const [deletedStaff] = await db
      .delete(staff)
      .where(eq(staff.id, staffId))
      .returning()

    if (!deletedStaff) {
      return NextResponse.json(
        { error: 'Staff member not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      message: 'Staff member deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting staff member:', error)
    return NextResponse.json(
      { error: 'Failed to delete staff member' },
      { status: 500 }
    )
  }
}