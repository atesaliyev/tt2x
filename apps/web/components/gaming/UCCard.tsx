'use client';

import { motion } from 'framer-motion';

interface UCCardProps {
  amount: string;
  price: string;
  description: string;
}

export function UCCard({ amount, price, description }: UCCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="bg-gradient-to-br from-purple-900 to-purple-950 rounded-2xl p-6 border-2 border-purple-500/50 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 cursor-pointer"
    >
      <div className="text-center">
        <div className="text-5xl font-bold text-white mb-2">{amount}</div>
        <div className="text-gray-400 text-sm mb-4">{description}</div>
        <div className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
          {price}
        </div>
      </div>
    </motion.div>
  );
}
