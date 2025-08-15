'use client'

import { useState } from 'react'
import { User, Send, MoreVertical } from 'lucide-react'

export default function MessagesPage() {
  const [message, setMessage] = useState('')
  const [activeChat, setActiveChat] = useState('Guest')

  const handleSendMessage = () => {
    if (message.trim()) {
      // Sending message logic here
      setMessage('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="h-[calc(100vh-9rem)] flex bg-gray-50">
      {/* Left Panel - Chat History */}
      <div className="w-80 bg-white shadow-sm border-r border-gray-200 border-b border-gray-200 flex flex-col">
        {/* Active Chat Section */}
        <div className="p-4 bg-[#EAF3E0] border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Active Chat</h3>
          <div className="bg-[#5F9136] text-white p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-[#5F9136]" />
              </div>
              <div className="flex-1">
                <div className="font-medium">Guest</div>
                <div className="text-xs opacity-90">2 minutes ago</div>
                <div className="text-sm mt-1">Hi, I was...</div>
              </div>
            </div>
          </div>
        </div>

        {/* Message History Section */}
        <div className="flex-1 p-4 overflow-y-auto">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Message History</h3>
          <div className="space-y-3">
            <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Guest</div>
                  <div className="text-xs text-gray-500 mb-1">Yesterday</div>
                  <div className="text-sm text-gray-600">Thank you!</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">You</div>
                  <div className="text-xs text-gray-500 mb-1">5 Days Ago</div>
                  <div className="text-sm text-gray-600">You can boo...</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">You</div>
                  <div className="text-xs text-gray-500 mb-1">6 Days Ago</div>
                  <div className="text-sm text-gray-600">No problem!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Current Chat */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 bg-[#5F9136] text-white shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-[#5F9136]" />
              </div>
              <div>
                <div className="font-medium">{activeChat}</div>
                <div className="text-xs opacity-90">online</div>
              </div>
            </div>
            <button className="text-white hover:bg-white/10 p-1 rounded">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col justify-end">
          <div className="space-y-6 w-full">
            {/* Guest Message */}
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm max-w-md">
                <div className="text-sm text-gray-900">
                  Hi, I was interested in getting a custom deck made.
                </div>
                <div className="text-xs text-gray-500 mt-2">2:30 PM</div>
              </div>
            </div>

            {/* Your Message */}
            <div className="flex items-start space-x-3 justify-end">
              <div className="bg-[#5F9136] text-white p-4 rounded-lg shadow-sm max-w-md">
                <div className="text-sm">
                  Hello! Have you tried our quote feature yet? What did you have in mind?
                </div>
                <div className="text-xs text-white/80 mt-2">2:32 PM</div>
              </div>
              <div className="w-10 h-10 bg-[#5F9136] rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 pb-6 bg-white border border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex space-x-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Your message..."
                className="flex-1 px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F9136] focus:border-transparent text-base"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="bg-[#5F9136] text-white px-6 py-2 rounded-lg hover:bg-[#3F652B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
