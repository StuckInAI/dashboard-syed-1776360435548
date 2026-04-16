'use client';

import { Menu, Search, Bell, Settings, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="bg-black border-b border-yellow-500/30 px-6 py-4 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-yellow-400/10 transition-colors"
        >
          <Menu size={20} className="text-yellow-400" />
        </button>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-600" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 bg-yellow-400/10 rounded-lg text-sm text-yellow-100 placeholder-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-yellow-400/20 transition-all w-64"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="relative p-2 rounded-lg hover:bg-yellow-400/10 transition-colors"
          >
            <Bell size={20} className="text-yellow-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          {notifOpen && (
            <div className="absolute right-0 top-12 w-80 bg-black rounded-xl shadow-lg border border-yellow-500/30 z-50">
              <div className="p-4 border-b border-yellow-500/20">
                <h3 className="font-semibold text-yellow-400">Notifications</h3>
              </div>
              <div className="divide-y divide-yellow-500/10">
                {[
                  { title: 'New order received', time: '2 min ago', dot: 'bg-yellow-400' },
                  { title: 'Server alert resolved', time: '1 hour ago', dot: 'bg-emerald-400' },
                  { title: 'Monthly report ready', time: '3 hours ago', dot: 'bg-yellow-600' }
                ].map((n, i) => (
                  <div key={i} className="p-4 hover:bg-yellow-400/10 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.dot}`}></span>
                      <div>
                        <p className="text-sm font-medium text-yellow-100">{n.title}</p>
                        <p className="text-xs text-yellow-600 mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button className="p-2 rounded-lg hover:bg-yellow-400/10 transition-colors">
          <Settings size={20} className="text-yellow-400" />
        </button>

        <div className="flex items-center gap-2 pl-3 border-l border-yellow-500/30 cursor-pointer hover:opacity-80">
          <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xs font-bold">
            JD
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-yellow-100">John Doe</p>
            <p className="text-xs text-yellow-600">Admin</p>
          </div>
          <ChevronDown size={16} className="text-yellow-600" />
        </div>
      </div>
    </header>
  );
}
