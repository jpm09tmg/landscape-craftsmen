import { NextResponse } from 'next/server'
import { prisma } from '@/app/lib/prisma'

export async function POST(request) {
  try {
    const data = await request.json()
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      address,
      serviceType,
      appointmentDate, 
      appointmentTime, 
      details
    } = data

    if (!firstName || !lastName || !email || !phone || !serviceType || !appointmentDate || !appointmentTime) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please fill in all required fields' 
        },
        { status: 400 }
      )
    }

    // Check if user exists by email
    let user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() }
    })

    if (user) {
      // Update existing user 
      user = await prisma.user.update({
        where: { email: email.toLowerCase().trim() },
        data: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phone: phone.trim(),
          address: address ? address.trim() : user.address
        }
      })
    } else {
      // Create new user
      user = await prisma.user.create({
        data: {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.toLowerCase().trim(),
          phone: phone.trim(),
          address: address ? address.trim() : ''
        }
      })
    }

    // Find service
    const service = await prisma.service.findUnique({
      where: { name: serviceType.trim() }
    })

    if (!service) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid service type selected. Please choose from available services.' 
        },
        { status: 400 }
      )
    }

    // Create appointment
    const appointment = await prisma.appointment.create({
      data: {
        userId: user.id,
        serviceId: service.id,
        appointmentDate: new Date(appointmentDate),
        appointmentTime: appointmentTime.trim(),
        notes: details ? details.trim() : null,
        status: 'Pending'
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            address: true
          }
        },
        service: {
          select: {
            id: true,
            name: true,
            description: true
          }
        }
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Appointment booked successfully! We will contact you within 24 hours to confirm.',
      appointment: {
        id: appointment.id,
        service: appointment.service,
        appointmentDate: appointment.appointmentDate,
        appointmentTime: appointment.appointmentTime,
        status: appointment.status,
        notes: appointment.notes,
        customer: appointment.user
      }
    })

  } catch (error) {
    console.error('Appointment creation error:', error)
  
    if (error.code === 'P2002') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'An account with this email already exists with different information. Please contact us directly.' 
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Error creating appointment. Please try again or contact us directly.',
        error: error.message 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Get all appointments 
    const appointments = await prisma.appointment.findMany({
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            address: true
          }
        },
        service: {
          select: {
            id: true,
            name: true,
            description: true
          }
        }
      },
      orderBy: [
        { appointmentDate: 'asc' },
        { appointmentTime: 'asc' }
      ]
    })

    return NextResponse.json({
      success: true,
      appointments: appointments.map(apt => ({
        id: apt.id,
        service: apt.service,
        appointmentDate: apt.appointmentDate,
        appointmentTime: apt.appointmentTime,
        status: apt.status,
        notes: apt.notes,
        createdAt: apt.createdAt,
        customer: apt.user
      }))
    })

  } catch (error) {
    console.error('Fetch appointments error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error fetching appointments',
        error: error.message 
      },
      { status: 500 }
    )
  }
}