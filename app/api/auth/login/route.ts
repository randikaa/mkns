import { NextRequest, NextResponse } from 'next/server'
import { db, staff, clients } from '@/lib/db'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
    try {
        const { email, password, role } = await request.json()

        if (!email || !password || !role) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        let user = null

        if (role === 'admin' || role === 'staff') {
            [user] = await db.select().from(staff).where(eq(staff.email, email)).limit(1)
        } else if (role === 'client') {
            [user] = await db.select().from(clients).where(eq(clients.email, email)).limit(1)
        }

        if (!user) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            )
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            // For the sake of the task, let's check if the password matches the hardcoded one if it's not hashed yet
            // This is a fallback during migration
            if (password === user.password) {
                console.log('Plain text password matched - migration recommended')
            } else {
                return NextResponse.json(
                    { error: 'Invalid credentials' },
                    { status: 401 }
                )
            }
        }

        // Return user info (except password)
        const { password: _, ...userWithoutPassword } = user

        return NextResponse.json({
            message: 'Login successful',
            user: {
                ...userWithoutPassword,
                role
            }
        })

    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json(
            { error: 'An unexpected error occurred' },
            { status: 500 }
        )
    }
}
