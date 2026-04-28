'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Organic', value: 42, color: '#DA291C' },
  { name: 'Direct', value: 28, color: '#FFC72C' },
  { name: 'Social', value: 18, color: '#1a0000' },
  { name: 'Referral', value: 12, color: '#FF6B35' }
];

export default function TrafficChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#FFC72C]/40 h-full">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-[#1a0000]">Traffic Sources</h2>
        <p className="text-[#DA291C] text-sm mt-0.5">Visitor acquisition channels</p>
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
            contentStyle={{ borderRadius: '8px', border: '1px solid #FFC72C' }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="space-y-3 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
              <span className="text-sm text-[#1a0000]">{item.name}</span>
            </div>
            <span className="text-sm font-semibold text-[#DA291C]">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
