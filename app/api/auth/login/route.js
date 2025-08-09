import { NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'
import { comparePassword, generateToken } from '@/app/lib/auth'

export async function POST(request) {
  try {
    const { username, password } = await request.json()

    // Finds admin
    const admin = await prisma.admin.findUnique({
      where: { username }
    })

    if (!admin) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Checks password
    const isPasswordValid = await comparePassword(password, admin.password)
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Generates token
    const token = generateToken({ adminId: admin.id })

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        email: admin.email
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, message: 'Login error', error: error.message },
      { status: 500 }
    )
  }
}