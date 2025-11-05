'use client';

import { Phone, Mail, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import Link from 'next/link';

export function CorporateBar() {
  return (
    <div className="bg-zinc-900 border-b border-zinc-800 text-sm">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-10">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6 text-gray-400">
            <a href="tel:+908501234567" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>0850 123 45 67</span>
            </a>
            <a href="https://wa.me/908501234567" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <SiWhatsapp className="w-3.5 h-3.5" />
              <span>WhatsApp Destek</span>
            </a>
            <a href="mailto:destek@epinya.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>destek@epinya.com</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>7/24 Destek</span>
            </div>
          </div>

          {/* Right: Corporate Links */}
          <div className="flex items-center gap-4 text-gray-400">
            <Link href="/hakkimizda" className="hover:text-white transition-colors">
              Hakkımızda
            </Link>
            <Link href="/kvkk" className="hover:text-white transition-colors">
              KVKK
            </Link>
            <Link href="/mesafeli-satis" className="hover:text-white transition-colors">
              Mesafeli Satış
            </Link>
            <Link href="/siparis-takip" className="hover:text-white transition-colors font-medium text-blue-400 hover:text-blue-300">
              Sipariş Takip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
