'use client';

import Link from 'next/link';
import { Search, User, ShoppingCart } from 'lucide-react';

export function GamingNav() {
  return (
    <nav className="bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-white font-bold text-xl">Hesap</span>
            <span className="text-gray-500 text-sm">UC PIN</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Arama yap..."
                className="w-full bg-zinc-900 text-white pl-10 pr-4 py-2.5 rounded-lg border border-zinc-800 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
              Giriş Yap
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
              Kayıt Ol
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function GamingSecondaryNav() {
  const categories = [
    'Kategoriler',
    'Popüler Filtreler',
    'PUBG',
    'Valorant',
    'ML',
    'CS2',
    'CRV',
    'Best Prices',
    'Güvenli Ödeme',
    'Canlılar',
  ];

  return (
    <div className="bg-zinc-900 border-b border-zinc-800 text-gray-300">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center gap-6 h-10 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/category/${category.toLowerCase()}`}
              className="text-sm font-medium whitespace-nowrap hover:text-white hover:scale-[1.01] transition-all duration-150"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
