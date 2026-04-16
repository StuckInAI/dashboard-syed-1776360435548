'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Organic', value: 42, color: '#3b82f6' },
  { name: 'Direct', value: 28, color: '#8b5cf6' },
  { name: 'Social', value: 18, color: '#10b981' },
  { name: 'Referral', value: 12, color: '#f97316' }
];

export default function TrafficChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 h-full">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-800">Traffic Sources</h2>
        <p className="text-slate-500 text-sm mt-0.5">Visitor acquisition channels</p>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => [`${value}%`, '']}
            contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="space-y-3 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
              <span className="text-sm text-slate-600">{item.name}</span>
            </div>
            <span className="text-sm font-semibold text-slate-800">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
