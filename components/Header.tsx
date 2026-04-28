'use client';

import { Menu, Search, Bell, Settings, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <header className="bg-[#DA291C] border-b border-[#c0241a] px-6 py-4 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-black/20 transition-colors"
        >
          <Menu size={20} className="text-[#FFC72C]" />
        </button>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FFC72C]" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 bg-black/20 rounded-lg text-sm text-white placeholder-[#FFC72C]/70 focus:outline-none focus:ring-2 focus:ring-[#FFC72C] focus:bg-black/30 transition-all w-64"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="relative p-2 rounded-lg hover:bg-black/20 transition-colors"
          >
            <Bell size={20} className="text-[#FFC72C]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></span>
          </button>
          {notifOpen && (
            <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-lg border border-[#DA291C]/30 z-50">
              <div className="p-4 border-b border-[#DA291C]/20">
                <h3 className="font-semibold text-[#DA291C]">Notifications</h3>
              </div>
              <div className="divide-y divide-[#DA291C]/10">
                {[
                  { title: 'New order received', time: '2 min ago', dot: 'bg-[#FFC72C]' },
                  { title: 'Server alert resolved', time: '1 hour ago', dot: 'bg-emerald-400' },
                  { title: 'Monthly report ready', time: '3 hours ago', dot: 'bg-[#DA291C]' }
                ].map((n, i) => (
                  <div key={i} className="p-4 hover:bg-[#FFC72C]/10 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.dot}`}></span>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{n.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button className="p-2 rounded-lg hover:bg-black/20 transition-colors">
          <Settings size={20} className="text-[#FFC72C]" />
        </button>

        <div className="flex items-center gap-2 pl-3 border-l border-white/30 cursor-pointer hover:opacity-80">
          <div className="w-8 h-8 rounded-full bg-[#FFC72C] flex items-center justify-center text-[#DA291C] text-xs font-bold">
            JD
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-[#FFC72C]">/Admin</p>
          </div>
          <ChevronDown size={16} className="text-[#FFC72C]" />
        </div>
      </div>
    </header>
  );
}
