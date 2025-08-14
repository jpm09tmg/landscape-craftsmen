'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function BookAppointment() {
  const router = useRouter()
  const [services, setServices] = useState([])
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    appointmentDate: '',
    appointmentTime: '',
    details: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services')
      const data = await response.json()
      if (data.success) {
        setServices(data.services)
      }
    } catch (error) {
      console.error('Error fetching services:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setMessage('Appointment booked successfully!')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          serviceType: '',
          appointmentDate: '',
          appointmentTime: '',
          details: ''
        })
      } else {
        setMessage('Error booking appointment. Please try again.')
      }
    } catch (error) {
      setMessage('Error booking appointment. Please try again.')
    }

    setLoading(false)
  }

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ]

  const serviceOptions = [
    {
      name: 'Fence Installation',
      description: 'Privacy, decorative, and security fences'
    },
    {
      name: 'Deck Construction', 
      description: 'Custom decks and outdoor platforms'
    },
    {
      name: 'Pergola Installation',
      description: 'Outdoor shade structures and gazebos'
    },
    {
      name: 'Other',
      description: 'Discuss a different idea with us'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full h-16 bg-[#74A744]">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="w-28 h-12 bg-[#E4EDCB] rounded-lg overflow-hidden shadow-md">
              <Image 
                src="/headlogo.png" 
                alt="YYC Landscape Craftsmen"
                width={144}
                height={69}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          <nav className="flex space-x-0">
            <Link href="/" className="px-6 py-4 text-sm text-white hover:bg-white/10">
              Home
            </Link>
            <Link href="/services" className="px-6 py-4 text-sm text-white hover:bg-white/10">
              Services
            </Link>
            <Link href="/gallery" className="px-6 py-4 text-sm text-white hover:bg-white/10">
              Gallery
            </Link>
            <Link href="/quote" className="px-6 py-4 text-sm text-white hover:bg-white/10">
              Quote
            </Link>
            <Link href="/contact" className="px-6 py-4 text-sm text-white hover:bg-white/10">
              Contact
            </Link>
            <Link href="/admin" className="px-6 py-4 text-sm text-white hover:bg-white/10">
              Admin
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* Left Panel - Service Selection */}
            <div className="bg-[#F1F4E8] p-6">
              <h2 className="text-lg font-normal text-[#171717] mb-6">Book a Consultation</h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-normal text-[#404040] mb-4">Type of Inquiry</h3>
                <div className="space-y-4">
                  {serviceOptions.map((service, index) => (
                    <label 
                      key={service.name} 
                      className={`flex items-start space-x-3 p-4 bg-white rounded-lg cursor-pointer transition-colors border ${
                        formData.serviceType === service.name 
                          ? 'border-[#DCE9D4] shadow-sm' 
                          : 'border-gray-200 hover:border-[#DCE9D4]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="serviceType"
                        value={service.name}
                        checked={formData.serviceType === service.name}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-[#74A744] border-gray-300 focus:ring-[#74A744] rounded-full"
                        required
                      />
                      <div className="flex-1">
                        <div className="font-normal text-[#171717] text-sm mb-1">{service.name}</div>
                        <div className="text-xs text-[#737373]">{service.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-normal text-[#404040] mb-2">
                  Details
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-3 py-2 bg-white border border-[#D4D4D4] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#74A744] focus:border-transparent"
                  placeholder="Tell us more about your project..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-normal text-[#404040] mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter full address"
                  required
                  className="w-full px-3 py-2 bg-white border border-[#D4D4D4] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#74A744] focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Panel - Contact Information */}
            <div className="bg-[#F1F4E8] p-6">
              <h2 className="text-lg font-normal text-[#171717] mb-6">Contact Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-normal text-[#404040] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="w-full px-3 py-2 bg-white border border-[#D4D4D4] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#74A744] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-normal text-[#404040] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="w-full px-3 py-2 bg-white border border-[#D4D4D4] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#74A744] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-normal text-[#404040] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-3 py-2 bg-white border border-[#D4D4D4] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#74A744] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-[#404040] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    required
                    className="w-full px-3 py-2 bg-white border border-[#D4D4D4] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#74A744] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-[#404040] mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full px-3 py-2 bg-white border border-[#DFDFDF] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#74A744] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-[#404040] mb-2">
                    Time
                  </label>
                  <select
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white border border-[#DFDFDF] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#74A744] focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                {message && (
                  <div className={`p-4 rounded-md text-sm ${
                    message.includes('success') 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 bg-[#74A744] text-white font-semibold rounded-md hover:bg-[#5F9136] focus:outline-none focus:ring-2 focus:ring-[#74A744] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
                >
                  {loading ? 'Booking...' : 'Book Now'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}