'use client';

import { Shield, Zap, CreditCard, Headphones, RefreshCw, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: 'Güvenli Ödeme',
    description: 'SSL ve 3D Secure ile korunan ödeme altyapısı',
  },
  {
    icon: Zap,
    title: 'Anında Teslimat',
    description: 'Otomatik sistem ile saniyeler içinde teslimat',
  },
  {
    icon: CreditCard,
    title: 'Kolay Ödeme',
    description: 'Tüm kredi kartları ve banka kartları kabul edilir',
  },
  {
    icon: Headphones,
    title: '7/24 Canlı Destek',
    description: 'Her zaman yanınızdayız, hızlı çözüm garantisi',
  },
  {
    icon: RefreshCw,
    title: 'İade Garantisi',
    description: 'Sorun yaşarsanız koşulsuz iade hakkı',
  },
  {
    icon: Award,
    title: '%100 Orijinal',
    description: 'Tüm ürünlerimiz resmi kaynaklardan temin edilir',
  },
];

export function WhyUsCorporate() {
  return (
    <div className="bg-zinc-950 py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Neden EPINYA?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Güvenilir, hızlı ve profesyonel hizmet anlayışımızla dijital ürün alışverişinde lider platformuz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
