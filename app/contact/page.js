'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <Header currentPage="contact" />
      
      <div className="bg-[#F1F4E8] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help you with any questions or inquiries you may have.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              
              {/* YYC Landscapers Section */}
              <div className="bg-[#F1F4E8] rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">YYC Landscapers</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#5F9136] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">Calgary, Alberta</p>
                      <p className="text-gray-600">Canada</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                    <p className="text-gray-900">+1 (587) 438-6672</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#5F9136] flex-shrink-0" />
                    <p className="text-gray-900">info@email.com</p>
                  </div>
                </div>
              </div>

              {/* Follow Us Section */}
              <div className="bg-[#F1F4E8] rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h2>
                
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-[#5F9136] rounded-full flex items-center justify-center text-white hover:bg-[#3F652B] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  
                  <a href="#" className="w-12 h-12 bg-[#5F9136] rounded-full flex items-center justify-center text-white hover:bg-[#3F652B] transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  
                  <a href="#" className="w-12 h-12 bg-[#5F9136] rounded-full flex items-center justify-center text-white hover:bg-[#3F652B] transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  
                  <a href="#" className="w-12 h-12 bg-[#5F9136] rounded-full flex items-center justify-center text-white hover:bg-[#3F652B] transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-[#F1F4E8] rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-white px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F9136] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-white px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F9136] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Message subject"
                    required
                    className="w-full bg-white px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F9136] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    required
                    rows={6}
                    className="w-full bg-white px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F9136] focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#5F9136] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3F652B] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
