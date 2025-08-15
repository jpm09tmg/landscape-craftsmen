'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from '../../components/Sidebar'
import Image from 'next/image'
import { Bell, User, LogOut } from 'lucide-react'

export default function AdminDashboardLayout({ children }) {
  const router = useRouter()

  const handleLogout = async () => {
  try {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
      // Clear browser history and redirect
      window.location.replace('/admin/login')
    } else {
      // If logout API fails, still redirect
      window.location.replace('/admin/login')
    }
  } catch (error) {
    console.error('Logout error:', error)
    // Still redirect even if there's an error
    window.location.replace('/admin/login')
  }
}

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="w-full h-16 bg-[#74A744] flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-32 h-12 bg-[#E4EDCB] rounded-lg overflow-hidden shadow-sm">
            <Image 
              src="/headlogo.png" 
              alt="Landscape Craftsmen"
              width={128}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="text-white hover:bg-white/10 p-2 rounded-lg cursor-pointer transition-colors">
            <Bell className="w-6 h-6" />
          </div>
          
          {/* User Name */}
          <span className="text-white font-medium">John Doe</span>
          
          {/* Profile Icon */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-[#1e252b]" />
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors group"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}