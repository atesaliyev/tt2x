'use client';

import { GamingNav, GamingSecondaryNav } from '@/components/gaming/GamingNav';
import { GamingHero } from '@/components/gaming/GamingHero';
import { GameTabs } from '@/components/gaming/GameTabs';
import { ProductCardGaming } from '@/components/gaming/ProductCardGaming';
import { SocialMediaCard } from '@/components/gaming/SocialMediaCard';
import { UCCard } from '@/components/gaming/UCCard';
import { 
  SiTiktok, 
  SiInstagram, 
  SiFacebook, 
  SiSpotify, 
  SiYoutube, 
  SiTwitter,
  SiDiscord,
  SiTelegram,
  SiWhatsapp,
  SiRoblox,
  SiX
} from 'react-icons/si';
import { Music, Zap, Users, MessageCircle } from 'lucide-react';

export default function GamingPage() {
  const products = [
    { title: '10 ADET', description: 'TikTok Takipçi', price: '₺4,99', icon: <SiTiktok />, accent: 'magenta' as const },
    { title: '1000', description: 'Instagram Takipçi Türk', price: '₺24,99', icon: <SiInstagram />, accent: 'magenta' as const, badge: 'İNDİRİM' },
    { title: '5000', description: 'Instagram Takipçi Türk', price: '₺99,99', icon: <SiInstagram />, accent: 'magenta' as const, badge: 'İNDİRİM' },
    { title: '1000', description: 'Facebook Sayfa Beğeni', price: '₺29,99', icon: <SiFacebook />, accent: 'cyan' as const },
    { title: '1000', description: 'Spotify Takipçi', price: '₺34,99', icon: <SiSpotify />, accent: 'green' as const },
    { title: '1000', description: 'Instagram Beğeni', price: '₺9,99', icon: <SiInstagram />, accent: 'magenta' as const, badge: 'İNDİRİM' },
    
    { title: '100', description: 'TikTok Takipçi', price: '₺14,99', icon: <SiTiktok />, accent: 'magenta' as const },
    { title: '1000 ADET', description: 'TikTok İzlenme', price: '₺4,99', icon: <SiTiktok />, accent: 'magenta' as const },
    { title: '10000', description: 'Facebook Video İzlenme', price: '₺49,99', icon: <SiFacebook />, accent: 'cyan' as const },
    { title: '500000', description: 'TikTok İzlenme', price: '₺199,99', icon: <SiTiktok />, accent: 'magenta' as const },
    { title: 'INSTAGRAM', description: 'Premium Takipçi', price: '₺149,99', icon: <SiInstagram />, accent: 'magenta' as const },
    { title: '1000', description: 'Instagram Beğeni', price: '₺9,99', icon: <SiInstagram />, accent: 'magenta' as const },
    
    { title: '100 ADET', description: 'Bing Ads Hesap', price: '₺299,99', icon: <Zap />, accent: 'orange' as const },
    { title: '500', description: 'Facebook Sayfa Beğeni', price: '₺19,99', icon: <SiFacebook />, accent: 'cyan' as const },
    { title: '1000', description: 'Spotify Takipçi', price: '₺34,99', icon: <SiSpotify />, accent: 'green' as const },
    { title: '5000', description: 'Facebook Sayfa Beğeni', price: '₺89,99', icon: <SiFacebook />, accent: 'cyan' as const },
    { title: 'PUBG', description: 'Premium Hesap', price: '₺499,99', icon: <Users />, accent: 'orange' as const },
    { title: '100 ADET', description: 'Discord Üye', price: '₺24,99', icon: <SiDiscord />, accent: 'magenta' as const },
    
    { title: '1000', description: 'Instagram Takipçi', price: '₺24,99', icon: <SiInstagram />, accent: 'magenta' as const },
    { title: '5000', description: 'Spotify Dinlenme', price: '₺49,99', icon: <SiSpotify />, accent: 'green' as const },
    { title: '10 TİKTOK', description: 'Takipçi Paketi', price: '₺4,99', icon: <SiTiktok />, accent: 'magenta' as const },
    { title: '1000', description: 'TikTok Beğeni', price: '₺9,99', icon: <SiTiktok />, accent: 'magenta' as const },
    { title: '1000', description: 'Instagram Beğeni', price: '₺9,99', icon: <SiInstagram />, accent: 'magenta' as const },
    { title: '100', description: 'Discord Üye', price: '₺24,99', icon: <SiDiscord />, accent: 'magenta' as const },
    
    { title: '5000', description: 'Instagram Takipçi', price: '₺99,99', icon: <SiInstagram />, accent: 'magenta' as const },
    { title: '5000', description: 'Instagram Takipçi', price: '₺99,99', icon: <SiInstagram />, accent: 'magenta' as const },
    { title: '1000', description: 'TikTok Takipçi', price: '₺49,99', icon: <SiTiktok />, accent: 'magenta' as const },
    { title: '1000', description: 'Facebook Beğeni', price: '₺29,99', icon: <SiFacebook />, accent: 'cyan' as const },
    { title: '1000', description: 'Instagram Beğeni', price: '₺9,99', icon: <SiInstagram />, accent: 'magenta' as const },
    { title: 'ROBLOX', description: 'Premium Hesap', price: '₺199,99', icon: <SiRoblox />, accent: 'orange' as const },
    
    { title: '1000', description: 'Instagram Takipçi', price: '₺24,99', icon: <SiInstagram />, accent: 'magenta' as const },
    { title: '5000', description: 'Instagram Takipçi', price: '₺99,99', icon: <SiInstagram />, accent: 'magenta' as const },
    { title: '1000', description: 'TikTok Beğeni', price: '₺9,99', icon: <SiTiktok />, accent: 'magenta' as const },
    { title: 'CLASH', description: 'Elmas Paketi', price: '₺149,99', icon: <Zap />, accent: 'green' as const },
    { title: 'KAHVE KING', description: 'Premium Hesap', price: '₺299,99', icon: <Music />, accent: 'cyan' as const },
    { title: '1000', description: 'Instagram Beğeni', price: '₺9,99', icon: <SiX />, accent: 'magenta' as const },
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <GamingNav />
      <GamingSecondaryNav />
      
      {/* Hero Banner */}
      <GamingHero />
      
      {/* Game Tabs */}
      <GameTabs />
      
      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Filter Buttons */}
        <div className="flex items-center gap-3 mb-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <span>🔥</span> En Çok Satan
          </button>
          <button className="bg-zinc-900 text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            ⚡ Günün Fırsatı
          </button>
          <button className="bg-zinc-900 text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            🎮 Yeni Ürünler
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-12">
          {products.map((product, index) => (
            <ProductCardGaming key={index} {...product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mb-16">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            DAHA FAZLA YÜKLE GÖRÜNTÜLE
          </button>
        </div>

        {/* UC Purchase Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-900 to-purple-950 rounded-2xl p-8 mb-6">
            <h2 className="text-3xl font-bold text-white text-center mb-8">UC Satın Al</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <UCCard amount="60 UC" price="₺19,99" description="Küçük Paket" />
              <UCCard amount="325 UC" price="₺99,99" description="Orta Paket" />
              <UCCard amount="660 UC" price="₺199,99" description="Büyük Paket" />
              <UCCard amount="1800 UC" price="₺499,99" description="Mega Paket" />
              <UCCard amount="3850 UC" price="₺999,99" description="Ultra Paket" />
              <UCCard amount="8100 UC" price="₺1.999,99" description="Premium Paket" />
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Sosyal Medya Hizmetleri</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <SocialMediaCard name="Discord" icon={<SiDiscord />} bgColor="bg-indigo-600" hoverColor="bg-indigo-700" />
            <SocialMediaCard name="Instagram" icon={<SiInstagram />} bgColor="bg-pink-600" hoverColor="bg-pink-700" />
            <SocialMediaCard name="TikTok" icon={<SiTiktok />} bgColor="bg-gray-900" hoverColor="bg-gray-800" />
            <SocialMediaCard name="YouTube" icon={<SiYoutube />} bgColor="bg-red-600" hoverColor="bg-red-700" />
            <SocialMediaCard name="X" icon={<SiX />} bgColor="bg-gray-900" hoverColor="bg-gray-800" />
            <SocialMediaCard name="Facebook" icon={<SiFacebook />} bgColor="bg-blue-600" hoverColor="bg-blue-700" />
            <SocialMediaCard name="Telegram" icon={<SiTelegram />} bgColor="bg-sky-500" hoverColor="bg-sky-600" />
            <SocialMediaCard name="WhatsApp" icon={<SiWhatsapp />} bgColor="bg-green-600" hoverColor="bg-green-700" />
          </div>
        </div>

        {/* Deals Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">GÜNÜN FİRSATLARI</h2>
            <button className="text-emerald-500 hover:text-emerald-400 font-medium">Tümünü Gör →</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.slice(0, 12).map((product, index) => (
              <ProductCardGaming key={index} {...product} badge="İNDİRİM" />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">HAKKIMIZDA</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Biz Kimiz?</a></li>
                <li><a href="#" className="hover:text-white">İletişim</a></li>
                <li><a href="#" className="hover:text-white">Kariyer</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">POPÜLER LİNKLER</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">PUBG Mobile UC</a></li>
                <li><a href="#" className="hover:text-white">Valorant VP</a></li>
                <li><a href="#" className="hover:text-white">Instagram Takipçi</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">YARDIM</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">SSS</a></li>
                <li><a href="#" className="hover:text-white">Nasıl Sipariş Verilir?</a></li>
                <li><a href="#" className="hover:text-white">Güvenli Ödeme</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">YASAL</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Kullanım Koşulları</a></li>
                <li><a href="#" className="hover:text-white">Gizlilik Politikası</a></li>
                <li><a href="#" className="hover:text-white">İade Politikası</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Hesap UC PIN. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
