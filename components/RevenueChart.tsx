'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 42000, expenses: 28000 },
  { month: 'Feb', revenue: 38000, expenses: 25000 },
  { month: 'Mar', revenue: 55000, expenses: 32000 },
  { month: 'Apr', revenue: 48000, expenses: 29000 },
  { month: 'May', revenue: 61000, expenses: 35000 },
  { month: 'Jun', revenue: 57000, expenses: 31000 },
  { month: 'Jul', revenue: 70000, expenses: 40000 },
  { month: 'Aug', revenue: 65000, expenses: 38000 },
  { month: 'Sep', revenue: 72000, expenses: 42000 },
  { month: 'Oct', revenue: 68000, expenses: 39000 },
  { month: 'Nov', revenue: 80000, expenses: 45000 },
  { month: 'Dec', revenue: 84254, expenses: 48000 }
];

function formatCurrency(value: number): string {
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}k`;
  }
  return `$${value}`;
}

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-yellow-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-black">Revenue Overview</h2>
          <p className="text-yellow-700 text-sm mt-0.5">Monthly revenue vs expenses</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="text-sm border border-yellow-300 rounded-lg px-3 py-1.5 text-yellow-800 bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option>This Year</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#eab308" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#eab308" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1c1c1c" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#1c1c1c" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#fef9c3" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#a16207' }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={formatCurrency} tick={{ fontSize: 12, fill: '#a16207' }} axisLine={false} tickLine={false} />
          <Tooltip
            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
            contentStyle={{ borderRadius: '8px', border: '1px solid #fde047', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#eab308"
            strokeWidth={2}
            fill="url(#colorRevenue)"
            name="Revenue"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="#1c1c1c"
            strokeWidth={2}
            fill="url(#colorExpenses)"
            name="Expenses"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
