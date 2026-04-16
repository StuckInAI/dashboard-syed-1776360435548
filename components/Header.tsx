'use client';

import { Menu, Search, Bell, Settings, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <Menu size={20} className="text-slate-600" />
        </button>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 bg-slate-100 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all w-64"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Bell size={20} className="text-slate-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          {notifOpen && (
            <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-lg border border-slate-200 z-50">
              <div className="p-4 border-b border-slate-100">
                <h3 className="font-semibold text-slate-800">Notifications</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {[
                  { title: 'New order received', time: '2 min ago', color: 'bg-blue-100 text-blue-600' },
                  { title: 'Server alert resolved', time: '1 hour ago', color: 'bg-green-100 text-green-600' },
                  { title: 'Monthly report ready', time: '3 hours ago', color: 'bg-purple-100 text-purple-600' }
                ].map((n, i) => (
                  <div key={i} className="p-4 hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.color.split(' ')[0]}`}></span>
                      <div>
                        <p className="text-sm font-medium text-slate-700">{n.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <Settings size={20} className="text-slate-600" />
        </button>

        <div className="flex items-center gap-2 pl-3 border-l border-slate-200 cursor-pointer hover:opacity-80">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
            JD
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-slate-700">John Doe</p>
            <p className="text-xs text-slate-400">Admin</p>
          </div>
          <ChevronDown size={16} className="text-slate-400" />
        </div>
      </div>
    </header>
  );
}
