'use client'

import { useState } from 'react'
import { User, Eye, EyeOff, Camera } from 'lucide-react'

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    position: 'Owner',
    email: 'johndoe@gmail.com',
    phone: '(123) 456-7890',
    address: '123 Sample Street',
    username: 'John Doe',
    password: '••••••••••'
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="p-6 space-y-8">
      {/* General Information Section */}
      <div className="bg-[#F1F4E8] rounded-lg shadow-lg border border-gray-200 px-6 pt-4 pb-7">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">General</h2>
        
        <div className="flex justify-center space-x-32">
          {/* Profile Image Section - Centered */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-3 border-gray-500 border-2">
              <User className="w-12 h-12 text-gray-600" />
            </div>
            <button className="text-[#5F9136] text-sm font-medium hover:underline flex items-center space-x-1">
              <Camera className="w-4 h-4" />
              <span>Update Image</span>
            </button>
          </div>

          {/* Form Fields - Labels beside fields */}
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <label className="w-24 text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-64 px-3 py-0.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F9136] focus:border-transparent bg-white"
              />
            </div>
            
            <div className="flex items-center space-x-6">
              <label className="w-24 text-sm font-medium text-gray-700">Position</label>
              <input
                type="text"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
                className="w-64 px-3 py-0.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F9136] focus:border-transparent bg-white"
              />
            </div>
            
            <div className="flex items-center space-x-6">
              <label className="w-24 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-64 px-3 py-0.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F9136] focus:border-transparent bg-white"
              />
            </div>
            
            <div className="flex items-center space-x-6">
              <label className="w-24 text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-64 px-3 py-0.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F9136] focus:border-transparent bg-white"
              />
            </div>
            
            <div className="flex items-center space-x-6 pb-8">
              <label className="w-24 text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-64 px-3 py-0.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F9136] focus:border-transparent bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Login Information Section */}
      <div className="bg-[#F1F4E8] rounded-lg shadow-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Login Information</h2>
        
        <div className="flex justify-center">
          <div className="w-full max-w-md space-y-6">
            <div className="flex items-center space-x-6">
              <label className="w-24 text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                className="w-64 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F9136] focus:border-transparent bg-white"
              />
            </div>
            
            <div className="flex items-center space-x-6">
              <label className="w-24 text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-64 px-3 py-1 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F9136] focus:border-transparent bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5F9136] hover:text-[#3F652B]"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            
            <div className="flex justify-center pt-6">
              <button className="bg-[#5F9136] text-white py-2 px-6 rounded-md hover:bg-[#3F652B] transition-colors">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
