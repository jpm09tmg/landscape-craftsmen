import React from 'react'
import Sidebar from '../../components/Sidebar'
import Image from 'next/image'
import { Bell, User } from 'lucide-react'

export default function AdminDashboardLayout({ children }) {
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
          <div className="text-white">
            <Bell className="w-6 h-6" />
          </div>
          
          {/* User Name */}
          <span className="text-white font-medium">John Doe</span>
          
          {/* Profile Icon */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-[#1e252b]" />
          </div>
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
