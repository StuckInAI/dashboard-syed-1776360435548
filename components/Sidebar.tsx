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
      } bg-black text-white flex flex-col transition-all duration-300 ease-in-out flex-shrink-0`}
    >
      <div className="p-6 border-b border-yellow-500/30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
            <TrendingUp size={18} className="text-black" />
          </div>
          <div>
            <p className="font-bold text-yellow-400 text-sm">Analytics Pro</p>
            <p className="text-yellow-600 text-xs">Business Suite</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <p className="text-yellow-600 text-xs font-semibold uppercase tracking-wider px-3 mb-3">Main Menu</p>
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
              activeItem === item.label
                ? 'bg-yellow-400 text-black'
                : 'text-yellow-200 hover:bg-yellow-400/10 hover:text-yellow-400'
            }`}
          >
            {item.icon}
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <span className="bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-yellow-500/30 space-y-1">
        <p className="text-yellow-600 text-xs font-semibold uppercase tracking-wider px-3 mb-3">Support</p>
        {bottomItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
              activeItem === item.label
                ? 'bg-yellow-400 text-black'
                : 'text-yellow-200 hover:bg-yellow-400/10 hover:text-yellow-400'
            }`}
          >
            {item.icon}
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <span className="bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-yellow-500/30">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xs font-bold">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-yellow-100 text-sm font-medium truncate">John Doe</p>
            <p className="text-yellow-600 text-xs truncate">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
