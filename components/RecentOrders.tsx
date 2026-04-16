'use client';

interface Order {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Cancelled' | 'Processing';
  date: string;
  avatar: string;
}

const orders: Order[] = [
  { id: '#ORD-001', customer: 'Alice Johnson', product: 'Pro Plan', amount: '$299', status: 'Completed', date: 'Jul 12, 2024', avatar: 'AJ' },
  { id: '#ORD-002', customer: 'Bob Smith', product: 'Enterprise', amount: '$999', status: 'Processing', date: 'Jul 11, 2024', avatar: 'BS' },
  { id: '#ORD-003', customer: 'Carol White', product: 'Starter', amount: '$49', status: 'Pending', date: 'Jul 11, 2024', avatar: 'CW' },
  { id: '#ORD-004', customer: 'David Brown', product: 'Pro Plan', amount: '$299', status: 'Cancelled', date: 'Jul 10, 2024', avatar: 'DB' },
  { id: '#ORD-005', customer: 'Emma Davis', product: 'Enterprise', amount: '$999', status: 'Completed', date: 'Jul 10, 2024', avatar: 'ED' },
  { id: '#ORD-006', customer: 'Frank Wilson', product: 'Starter', amount: '$49', status: 'Completed', date: 'Jul 09, 2024', avatar: 'FW' }
];

const statusConfig: Record<Order['status'], { label: string; className: string }> = {
  Completed: { label: 'Completed', className: 'bg-emerald-100 text-emerald-700' },
  Processing: { label: 'Processing', className: 'bg-blue-100 text-blue-700' },
  Pending: { label: 'Pending', className: 'bg-amber-100 text-amber-700' },
  Cancelled: { label: 'Cancelled', className: 'bg-red-100 text-red-700' }
};

const avatarColors = [
  'bg-blue-500',
  'bg-purple-500',
  'bg-emerald-500',
  'bg-orange-500',
  'bg-pink-500',
  'bg-teal-500'
];

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Recent Orders</h2>
          <p className="text-slate-500 text-sm mt-0.5">Latest customer transactions</p>
        </div>
        <button className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
          View all
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-3">Order</th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-3">Customer</th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-3">Product</th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-3">Amount</th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-3">Status</th>
              <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {orders.map((order, index) => {
              const sc = statusConfig[order.status];
              return (
                <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-sm font-mono text-slate-500">{order.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {order.avatar}
                      </div>
                      <span className="text-sm font-medium text-slate-700">{order.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600">{order.product}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-slate-800">{order.amount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${sc.className}`}>
                      {sc.label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-500">{order.date}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
