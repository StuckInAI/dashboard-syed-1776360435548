'use client';

import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingBag, Activity } from 'lucide-react';

interface StatCard {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

const stats: StatCard[] = [
  {
    title: 'Total Revenue',
    value: '$84,254',
    change: 12.5,
    icon: <DollarSign size={22} />,
    iconBg: 'bg-[#DA291C]',
    iconColor: 'text-white'
  },
  {
    title: 'Total Customers',
    value: '24,563',
    change: 8.2,
    icon: <Users size={22} />,
    iconBg: 'bg-[#FFC72C]',
    iconColor: 'text-[#1a0000]'
  },
  {
    title: 'Total Orders',
    value: '12,847',
    change: -3.1,
    icon: <ShoppingBag size={22} />,
    iconBg: 'bg-[#DA291C]',
    iconColor: 'text-white'
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: 1.8,
    icon: <Activity size={22} />,
    iconBg: 'bg-[#FFC72C]',
    iconColor: 'text-[#1a0000]'
  }
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm border border-[#FFC72C]/40 hover:shadow-md hover:border-[#DA291C] transition-all"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[#DA291C] text-sm font-medium">{stat.title}</p>
              <p className="text-2xl font-bold text-[#1a0000] mt-1">{stat.value}</p>
            </div>
            <div className={`${stat.iconBg} ${stat.iconColor} p-3 rounded-xl`}>
              {stat.icon}
            </div>
          </div>
          <div className="flex items-center gap-1 mt-4">
            {stat.change >= 0 ? (
              <TrendingUp size={16} className="text-emerald-500" />
            ) : (
              <TrendingDown size={16} className="text-red-500" />
            )}
            <span
              className={`text-sm font-semibold ${
                stat.change >= 0 ? 'text-emerald-500' : 'text-red-500'
              }`}
            >
              {stat.change >= 0 ? '+' : ''}{stat.change}%
            </span>
            <span className="text-[#DA291C]/70 text-sm">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}
