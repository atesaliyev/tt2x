'use client';

import { motion } from 'framer-motion';
import { GAMING_COLORS, type AccentColor } from '@/lib/gaming-theme';
import { ReactNode } from 'react';

interface ProductCardGamingProps {
  title: string;
  description: string;
  price: string;
  icon: ReactNode;
  accent?: AccentColor;
  badge?: string;
  image?: string;
}

export function ProductCardGaming({
  title,
  description,
  price,
  icon,
  accent = 'magenta',
  badge,
  image,
}: ProductCardGamingProps) {
  const accentColors = GAMING_COLORS.accents[accent];
  
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative"
    >
      {/* Neon border wrapper */}
      <div className={`p-[2px] rounded-xl bg-gradient-to-br ${accentColors.gradient} hover:shadow-lg hover:shadow-${accent}-500/50 transition-shadow duration-300`}>
        {/* Card content */}
        <div className="bg-zinc-900 rounded-[inherit] p-4 h-full flex flex-col">
          {/* Badge */}
          {badge && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md font-bold">
              {badge}
            </div>
          )}
          
          {/* Icon/Image section */}
          <div className="relative mb-3 flex items-center justify-center h-24 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg overflow-hidden">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="text-white text-4xl">
                {icon}
              </div>
            )}
          </div>
          
          {/* Title */}
          <h3 className="text-white font-bold text-sm mb-1 line-clamp-1">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-400 text-xs mb-3 line-clamp-2 flex-grow">
            {description}
          </p>
          
          {/* Price */}
          <div className="flex items-center justify-between">
            <div className={`bg-gradient-to-r ${accentColors.gradient} text-white font-bold px-3 py-1.5 rounded-lg text-sm`}>
              {price}
            </div>
            <button className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
