'use client';

import { Shield, Zap, Headphones, Lock } from 'lucide-react';
import { SiVisa, SiMastercard } from 'react-icons/si';

export function TrustRow() {
  return (
    <div className="bg-zinc-900/50 border-y border-zinc-800 py-6">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
          {/* Security Badge */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Lock className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <div className="text-white font-medium text-sm">SSL & 3D Secure</div>
              <div className="text-gray-400 text-xs">Güvenli Ödeme</div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-12 h-8 rounded bg-white flex items-center justify-center">
                <SiVisa className="w-8 h-8 text-blue-600" />
              </div>
              <div className="w-12 h-8 rounded bg-white flex items-center justify-center">
                <SiMastercard className="w-8 h-8" />
              </div>
            </div>
            <div>
              <div className="text-white font-medium text-sm">Tüm Kartlar</div>
              <div className="text-gray-400 text-xs">Kredi & Banka Kartı</div>
            </div>
          </div>

          {/* Instant Delivery */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <div className="text-white font-medium text-sm">Anında Teslimat</div>
              <div className="text-gray-400 text-xs">Otomatik Sistem</div>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Headphones className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <div className="text-white font-medium text-sm">7/24 Destek</div>
              <div className="text-gray-400 text-xs">Canlı Yardım</div>
            </div>
          </div>

          {/* 100% Original */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <div className="text-white font-medium text-sm">%100 Orijinal</div>
              <div className="text-gray-400 text-xs">Garantili Ürünler</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
