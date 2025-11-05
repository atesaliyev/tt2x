'use client';

import Link from 'next/link';
import { SiVisa, SiMastercard } from 'react-icons/si';
import { Shield, Lock } from 'lucide-react';

export function CorporateFooter() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-white font-bold text-xl">EPINYA</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Dijital ürün ve oyun içi içerikler konusunda Türkiye'nin güvenilir e-ticaret platformu. 
              Güvenli ödeme, anında teslimat ve 7/24 destek ile hizmetinizdeyiz.
            </p>
            
            {/* Security Badges */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 bg-zinc-900 px-3 py-2 rounded-lg border border-zinc-800">
                <Lock className="w-4 h-4 text-emerald-500" />
                <span className="text-xs text-gray-400">SSL Güvenli</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900 px-3 py-2 rounded-lg border border-zinc-800">
                <Shield className="w-4 h-4 text-blue-500" />
                <span className="text-xs text-gray-400">3D Secure</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Kabul Edilen Kartlar:</span>
              <div className="flex items-center gap-2">
                <div className="w-10 h-7 rounded bg-white flex items-center justify-center">
                  <SiVisa className="w-8 h-8 text-blue-600" />
                </div>
                <div className="w-10 h-7 rounded bg-white flex items-center justify-center">
                  <SiMastercard className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">KURUMSAL</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors">İletişim</Link></li>
              <li><Link href="/kariyer" className="text-gray-400 hover:text-white transition-colors">Kariyer</Link></li>
              <li><Link href="/basin" className="text-gray-400 hover:text-white transition-colors">Basın</Link></li>
            </ul>
          </div>

          {/* Müşteri Hizmetleri */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">MÜŞTERİ HİZMETLERİ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/siparis-takip" className="text-gray-400 hover:text-white transition-colors">Sipariş Takip</Link></li>
              <li><Link href="/sss" className="text-gray-400 hover:text-white transition-colors">Sıkça Sorulan Sorular</Link></li>
              <li><Link href="/nasil-siparis-verilir" className="text-gray-400 hover:text-white transition-colors">Nasıl Sipariş Verilir?</Link></li>
              <li><Link href="/guvenli-odeme" className="text-gray-400 hover:text-white transition-colors">Güvenli Ödeme</Link></li>
              <li><Link href="/destek" className="text-gray-400 hover:text-white transition-colors">Canlı Destek</Link></li>
            </ul>
          </div>

          {/* Yasal */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">YASAL</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kullanim-kosullari" className="text-gray-400 hover:text-white transition-colors">Kullanım Koşulları</Link></li>
              <li><Link href="/gizlilik-politikasi" className="text-gray-400 hover:text-white transition-colors">Gizlilik Politikası</Link></li>
              <li><Link href="/kvkk" className="text-gray-400 hover:text-white transition-colors">KVKK Aydınlatma Metni</Link></li>
              <li><Link href="/mesafeli-satis" className="text-gray-400 hover:text-white transition-colors">Mesafeli Satış Sözleşmesi</Link></li>
              <li><Link href="/iade-iptal" className="text-gray-400 hover:text-white transition-colors">İade ve İptal Koşulları</Link></li>
              <li><Link href="/cerez-politikasi" className="text-gray-400 hover:text-white transition-colors">Çerez Politikası</Link></li>
            </ul>
          </div>
        </div>

        {/* Company Legal Info */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="text-xs text-gray-500 space-y-1">
              <p><strong className="text-gray-400">Ünvan:</strong> EPINYA Dijital Hizmetler A.Ş.</p>
              <p><strong className="text-gray-400">Adres:</strong> [Şirket Adresi - Placeholder]</p>
              <p><strong className="text-gray-400">Vergi Dairesi:</strong> [Vergi Dairesi - Placeholder]</p>
              <p><strong className="text-gray-400">Vergi No:</strong> [Vergi Numarası - Placeholder]</p>
            </div>
            <div className="text-xs text-gray-500 space-y-1">
              <p><strong className="text-gray-400">MERSİS No:</strong> [MERSİS Numarası - Placeholder]</p>
              <p><strong className="text-gray-400">Ticaret Sicil No:</strong> [Ticaret Sicil - Placeholder]</p>
              <p><strong className="text-gray-400">E-posta:</strong> <a href="mailto:info@epinya.com" className="text-blue-400 hover:text-blue-300">info@epinya.com</a></p>
              <p><strong className="text-gray-400">Telefon:</strong> <a href="tel:+908501234567" className="text-blue-400 hover:text-blue-300">0850 123 45 67</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>© 2024 EPINYA Dijital Hizmetler A.Ş. Tüm hakları saklıdır.</p>
            <p>Tasarım ve yazılım: EPINYA Teknoloji</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
