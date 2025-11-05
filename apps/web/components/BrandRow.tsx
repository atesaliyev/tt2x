'use client';

import { SiApple, SiSteam, SiPlaystation, SiEpicgames } from 'react-icons/si';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Apple', icon: SiApple, color: 'text-gray-900' },
  { name: 'Steam', icon: SiSteam, color: 'text-blue-600' },
  { name: 'PlayStation', icon: SiPlaystation, color: 'text-blue-700' },
  { name: 'Epic Games', icon: SiEpicgames, color: 'text-gray-800' },
];

export function BrandRow() {
  return (
    <div className="py-12 border-y border-gray-100">
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          Güvenilir Markalar
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center gap-3 group"
          >
            <div className="p-4 rounded-2xl bg-gray-50 group-hover:bg-gray-100 transition-colors duration-200">
              <brand.icon className={`w-12 h-12 ${brand.color}`} />
            </div>
            <span className="text-sm font-medium text-gray-600">{brand.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
