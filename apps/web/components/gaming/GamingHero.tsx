'use client';

import { motion } from 'framer-motion';

export function GamingHero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-blue-600/30 border border-blue-500/50 px-4 py-2 rounded-lg mb-4">
              <span className="text-blue-300 text-sm font-medium">VALORANT</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              VELİBOR GİFT
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                ŞİMDİ OYNUNDA!
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              En uygun fiyatlarla oyun içi ürünler
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg shadow-purple-500/50">
              Hemen Al
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96 flex items-center justify-center"
          >
            {/* Placeholder for character image */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl" />
            <div className="relative z-10 text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full flex items-center justify-center">
                <span className="text-white/50 text-6xl">🎮</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
    </div>
  );
}
