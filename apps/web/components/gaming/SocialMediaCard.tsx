'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SocialMediaCardProps {
  name: string;
  icon: ReactNode;
  bgColor: string;
  hoverColor: string;
}

export function SocialMediaCard({ name, icon, bgColor, hoverColor }: SocialMediaCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`${bgColor} hover:${hoverColor} rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-2xl`}
    >
      <div className="text-white text-5xl">
        {icon}
      </div>
      <span className="text-white font-bold text-sm">{name}</span>
    </motion.button>
  );
}
