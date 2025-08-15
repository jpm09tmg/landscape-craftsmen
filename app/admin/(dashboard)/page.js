'use client'

import { Users, Calendar, UserPlus, FileText, TrendingUp } from 'lucide-react'

export default function AdminHome() {
  return (
    <div className="p-6 space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-[#EAF3E0] rounded-lg">
              <Users className="w-6 h-6 text-[#5F9136]" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">8</div>
              <div className="text-sm text-gray-600">Total Employees</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-[#EAF3E0] rounded-lg">
              <Calendar className="w-6 h-6 text-[#5F9136]" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">23</div>
              <div className="text-sm text-gray-600">Total Appointments</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-[#EAF3E0] rounded-lg">
              <UserPlus className="w-6 h-6 text-[#5F9136]" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">4</div>
              <div className="text-sm text-gray-600">Total Consultations</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-[#EAF3E0] rounded-lg">
              <FileText className="w-6 h-6 text-[#5F9136]" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">25</div>
              <div className="text-sm text-gray-600">Generated Estimates</div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Quotes Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visitor Statistics Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Visitor Statistics</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <TrendingUp className="w-12 h-12 mx-auto mb-2 text-gray-400" />
              <p>Chart Component</p>
              <p className="text-sm">This Year vs Last Year</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#5F9136] rounded"></div>
              <span className="text-sm text-gray-600">This Year</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#A4C572] rounded"></div>
              <span className="text-sm text-gray-600">Last Year</span>
            </div>
          </div>
        </div>

        {/* Quotes Panel */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-[#EAF3E0] rounded-lg">
              <FileText className="w-5 h-5 text-[#5F9136]" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">20</div>
              <div className="text-sm text-gray-600">Total Quotes</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-[#5F9136]" />
                <span className="text-sm text-gray-600">Deck Quotes</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">10</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-[#5F9136]" />
                <span className="text-sm text-gray-600">Pergola Quotes</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">7</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-[#5F9136]" />
                <span className="text-sm text-gray-600">Fence Quotes</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Services Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Services Requested</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">#</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Popularity</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Sales</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 text-sm text-gray-900">01</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900">Deck Installation</td>
                <td className="py-3 px-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#5F9136] h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EAF3E0] text-[#1e252b]">
                    45%
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-900">02</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900">Custom Deck</td>
                <td className="py-3 px-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#5F9136] h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EAF3E0] text-[#1e252b]">
                    29%
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-900">03</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900">Custom Pergola</td>
                <td className="py-3 px-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#5F9136] h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EAF3E0] text-[#1e252b]">
                    18%
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-900">04</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900">Fence Installation</td>
                <td className="py-3 px-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#5F9136] h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EAF3E0] text-[#1e252b]">
                    25%
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
