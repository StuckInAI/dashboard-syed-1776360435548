'use client';

import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  Bell,
  HelpCircle,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
}

const navItems: NavItem[] = [
  { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
  { icon: <ShoppingCart size={20} />, label: 'Orders', badge: 12 },
  { icon: <Users size={20} />, label: 'Customers' },
  { icon: <BarChart3 size={20} />, label: 'Analytics' },
  { icon: <TrendingUp size={20} />, label: 'Reports' }
];

const bottomItems: NavItem[] = [
  { icon: <Bell size={20} />, label: 'Notifications', badge: 5 },
  { icon: <Settings size={20} />, label: 'Settings' },
  { icon: <HelpCircle size={20} />, label: 'Help & Support' }
];

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-0 overflow-hidden'
      } bg-[#1a0000] text-white flex flex-col transition-all duration-300 ease-in-out flex-shrink-0`}
    >
      <div className="p-6 border-b border-[#DA291C]/40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#FFC72C] rounded-lg flex items-center justify-center">
            <TrendingUp size={18} className="text-[#DA291C]" />
          </div>
          <div>
            <p className="font-bold text-[#FFC72C] text-sm">Analytics Pro</p>
            <p className="text-[#DA291C]/70 text-xs">Business Suite</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <p className="text-[#DA291C]/70 text-xs font-semibold uppercase tracking-wider px-3 mb-3">Main Menu</p>
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
              activeItem === item.label
                ? 'bg-[#FFC72C] text-[#1a0000]'
                : 'text-[#FFC72C]/80 hover:bg-[#DA291C]/20 hover:text-[#FFC72C]'
            }`}
          >
            {item.icon}
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <span className="bg-[#DA291C] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-[#DA291C]/40 space-y-1">
        <p className="text-[#DA291C]/70 text-xs font-semibold uppercase tracking-wider px-3 mb-3">Support</p>
        {bottomItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
              activeItem === item.label
                ? 'bg-[#FFC72C] text-[#1a0000]'
                : 'text-[#FFC72C]/80 hover:bg-[#DA291C]/20 hover:text-[#FFC72C]'
            }`}
          >
            {item.icon}
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <span className="bg-[#DA291C] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-[#DA291C]/40">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-[#FFC72C] flex items-center justify-center text-[#DA291C] text-xs font-bold">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">John Doe</p>
            <p className="text-[#DA291C]/70 text-xs truncate">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
