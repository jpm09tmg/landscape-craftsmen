import { NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' }
    })

    return NextResponse.json({
      success: true,
      services
    })
  } catch (error) {
    console.error('Fetch services error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error fetching services',
        error: error.message 
      },
      { status: 500 }
    )
  }
}