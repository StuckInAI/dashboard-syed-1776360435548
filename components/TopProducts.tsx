'use client';

interface Product {
  name: string;
  sales: number;
  revenue: string;
  growth: number;
  icon: string;
}

const products: Product[] = [
  { name: 'Enterprise Plan', sales: 1284, revenue: '$128,400', growth: 14.2, icon: '🏢' },
  { name: 'Pro Plan', sales: 2847, revenue: '$85,410', growth: 8.5, icon: '⚡' },
  { name: 'Starter Plan', sales: 5621, revenue: '$27,543', growth: -2.3, icon: '🚀' },
  { name: 'Add-ons Bundle', sales: 934, revenue: '$18,680', growth: 22.1, icon: '🎯' },
  { name: 'API Access', sales: 412, revenue: '$12,360', growth: 5.7, icon: '🔌' }
];

export default function TopProducts() {
  const maxSales = Math.max(...products.map((p) => p.sales));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#FFC72C]/40 h-full">
      <div className="p-6 border-b border-[#FFC72C]/20 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#1a0000]">Top Products</h2>
          <p className="text-[#DA291C] text-sm mt-0.5">Best performing items</p>
        </div>
        <button className="text-sm text-[#DA291C] font-medium hover:text-[#c0241a] transition-colors">
          View all
        </button>
      </div>
      <div className="p-6 space-y-5">
        {products.map((product, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">{product.icon}</span>
                <span className="text-sm font-medium text-[#1a0000]">{product.name}</span>
              </div>
              <span
                className={`text-xs font-semibold ${
                  product.growth >= 0 ? 'text-emerald-600' : 'text-red-500'
                }`}
              >
                {product.growth >= 0 ? '+' : ''}{product.growth}%
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-[#FFF0C0] rounded-full h-1.5">
                <div
                  className="bg-[#DA291C] h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${(product.sales / maxSales) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-[#DA291C]/80 w-16 text-right">{product.sales.toLocaleString()} sales</span>
            </div>
            <p className="text-xs text-[#DA291C]/70">{product.revenue} revenue</p>
          </div>
        ))}
      </div>
    </div>
  );
}
