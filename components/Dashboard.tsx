'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsCards from './StatsCards';
import RevenueChart from './RevenueChart';
import TrafficChart from './TrafficChart';
import RecentOrders from './RecentOrders';
import TopProducts from './TopProducts';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#FFF8E1] overflow-hidden">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-[#DA291C]">Dashboard Overview</h1>
              <p className="text-[#c0241a] text-sm mt-1">Welcome back! Here&apos;s what&apos;s happening today.</p>
            </div>
            <StatsCards />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>
              <div>
                <TrafficChart />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <RecentOrders />
              </div>
              <div>
                <TopProducts />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
