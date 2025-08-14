'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Grid3X3, 
  Edit3, 
  FileText, 
  MessageCircle, 
  Calendar, 
  Users, 
  Settings,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()

  const isDashboardActive = pathname === '/admin'
  const isSalesActive = pathname.startsWith('/admin/services') || pathname.startsWith('/admin/billing')
  const isTasksActive = pathname.startsWith('/admin/tasks')
  const isMessagesActive = pathname.startsWith('/admin/messages')
  const isCalendarActive = pathname.startsWith('/admin/calendar')
  const isEmployeesActive = pathname.startsWith('/admin/employees')
  const isSettingsActive = pathname.startsWith('/admin/settings')

  const [salesExpanded, setSalesExpanded] = useState(isSalesActive)
  const [tasksExpanded, setTasksExpanded] = useState(isTasksActive)

  return (
    <aside className="w-[301px] bg-[#5F9136] h-[calc(100vh-4rem)]">
      <nav className="p-3 space-y-2">
        {/* Dashboard */}
        <Link 
          href="/admin" 
          className={`flex items-center space-x-3 px-4 py-3 text-white rounded-lg transition-colors hover:bg-white/10 ${isDashboardActive ? 'bg-[#3F652B]' : ''}`}
        >
          <Home className="w-5 h-5 text-white" />
          <span>Dashboard</span>
        </Link>

        {/* Sales Section */}
        <div className={`space-y-1 rounded-lg ${salesExpanded ? 'bg-[#3F652B]' : ''}`}>
          <button
            onClick={() => setSalesExpanded(!salesExpanded)}
            className={`w-full flex items-center justify-between px-4 py-3 text-white rounded-lg transition-colors ${salesExpanded ? 'bg-[#3F652B]' : 'hover:bg-white/10'}`}
          >
            <div className="flex items-center space-x-3">
              <Grid3X3 className="w-5 h-5 text-white" />
              <span className="font-medium">Sales</span>
            </div>
            {salesExpanded ? (
              <ChevronUp className="w-4 h-4 text-white" />
            ) : (
              <ChevronDown className="w-4 h-4 text-white" />
            )}
          </button>
          
          {salesExpanded && (
            <div className="ml-8 space-y-1 pb-2">
              <Link 
                href="/admin/services" 
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${pathname.startsWith('/admin/services') ? 'bg-[#A4C572] text-[#1e252b]' : 'text-white hover:bg-white/10'}`}
              >
                <Edit3 className="w-5 h-5 text-white" />
                <span>Service List</span>
              </Link>
              <Link 
                href="/admin/billing" 
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${pathname.startsWith('/admin/billing') ? 'bg-[#A4C572] text-[#1e252b]' : 'text-white hover:bg-white/10'}`}
              >
                <FileText className="w-5 h-5 text-white" />
                <span>Billing</span>
              </Link>
            </div>
          )}
        </div>

        {/* Tasks Section */}
        <div className={`space-y-1 rounded-lg ${tasksExpanded ? 'bg-[#3F652B]' : ''}`}>
          <button
            onClick={() => setTasksExpanded(!tasksExpanded)}
            className={`w-full flex items-center justify-between px-4 py-3 text-white rounded-lg transition-colors ${tasksExpanded ? 'bg-[#3F652B]' : 'hover:bg-white/10'}`}
          >
            <div className="flex items-center space-x-3">
              <Grid3X3 className="w-5 h-5 text-white" />
              <span className="font-medium">Tasks</span>
            </div>
            {tasksExpanded ? (
              <ChevronUp className="w-4 h-4 text-white" />
            ) : (
              <ChevronDown className="w-4 h-4 text-white" />
            )}
          </button>
          
          {tasksExpanded && (
            <div className="ml-8 space-y-1 pb-2">
              <Link 
                href="/admin/tasks/quotes" 
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${pathname.startsWith('/admin/tasks/quotes') ? 'bg-[#A4C572] text-[#1e252b]' : 'text-white hover:bg-white/10'}`}
              >
                <FileText className="w-5 h-5 text-white" />
                <span>Quotes</span>
              </Link>
              <Link 
                href="/admin/tasks/appointments" 
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${pathname.startsWith('/admin/tasks/appointments') ? 'bg-[#A4C572] text-[#1e252b]' : 'text-white hover:bg-white/10'}`}
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Appointments</span>
              </Link>
            </div>
          )}
        </div>

        {/* Messages */}
        <Link 
          href="/admin/messages" 
          className={`flex items-center justify-between px-4 py-3 text-white rounded-lg transition-colors ${isMessagesActive ? 'bg-[#3F652B]' : 'hover:bg-white/10'}`}
        >
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Messages</span>
          </div>
          <span className="bg-[#A4C572] text-[#1e252b] px-2 py-0.5 rounded text-xs font-semibold">1</span>
        </Link>

        {/* Calendar */}
        <Link 
          href="/admin/calendar" 
          className={`flex items-center space-x-3 px-4 py-3 text-white rounded-lg transition-colors ${isCalendarActive ? 'bg-[#3F652B]' : 'hover:bg-white/10'}`}
        >
          <Calendar className="w-5 h-5 text-white" />
          <span>Calendar</span>
        </Link>

        {/* Employees */}
        <Link 
          href="/admin/employees" 
          className={`flex items-center space-x-3 px-4 py-3 text-white rounded-lg transition-colors ${isEmployeesActive ? 'bg-[#3F652B]' : 'hover:bg-white/10'}`}
        >
          <Users className="w-5 h-5 text-white" />
          <span>Employees</span>
        </Link>

        {/* Settings */}
        <Link 
          href="/admin/settings" 
          className={`flex items-center space-x-3 px-4 py-3 text-white rounded-lg transition-colors ${isSettingsActive ? 'bg-[#3F652B]' : 'hover:bg-white/10'}`}
        >
          <Settings className="w-5 h-5 text-white" />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  )
}
