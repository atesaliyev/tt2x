'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BrandRow } from '@/components/BrandRow';
import { CategoryCard } from '@/components/CategoryCard';
import { FeatureCard } from '@/components/FeatureCard';
import { motion } from 'framer-motion';
import { 
  Search, 
  Zap, 
  Shield, 
  CreditCard, 
  Smartphone, 
  Gamepad2, 
  Gift, 
  ShoppingBag,
  CheckCircle,
  ArrowRight,
  Mail,
  Lock,
  Clock
} from 'lucide-react';
import { SiApple, SiSteam, SiPlaystation } from 'react-icons/si';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <Container>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  EPINYA
                </span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/products" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Ürünler
                </Link>
                <Link href="/categories" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Kategoriler
                </Link>
                <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                  Nasıl Çalışır?
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="outline" size="sm">Giriş Yap</Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Kayıt Ol</Button>
              </Link>
            </div>
          </div>
        </Container>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
        
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="info" className="mb-6">
              <Zap className="w-4 h-4 mr-1" />
              Anında Teslimat
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Dijital Hediye Kartları ve{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Oyun Kodları
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Apple, Steam, PlayStation, PUBG ve daha fazlası. Güvenli, hızlı ve kolay.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Ürün ara... (örn: Steam, Apple, PlayStation)"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/products">
                <Button size="lg" className="group">
                  Alışverişe Başla
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="outline" size="lg">
                  Nasıl Çalışır?
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Güvenli Ödeme</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Anında Teslimat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>7/24 Destek</span>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Brand Row */}
      <Container>
        <BrandRow />
      </Container>

      {/* Categories Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popüler Kategoriler
            </h2>
            <p className="text-xl text-gray-600">
              En çok tercih edilen dijital ürünleri keşfedin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              title="Apple"
              description="App Store, iTunes ve Apple Music hediye kartları"
              icon={<SiApple className="w-8 h-8" />}
              gradient="from-gray-700 to-gray-900"
              href="/products?category=apple"
            />
            <CategoryCard
              title="Steam"
              description="Binlerce oyun için Steam cüzdan kodları"
              icon={<SiSteam className="w-8 h-8" />}
              gradient="from-blue-500 to-blue-700"
              href="/products?category=steam"
            />
            <CategoryCard
              title="PlayStation"
              description="PSN hediye kartları ve oyun kodları"
              icon={<SiPlaystation className="w-8 h-8" />}
              gradient="from-blue-600 to-blue-800"
              href="/products?category=playstation"
            />
            <CategoryCard
              title="Oyunlar"
              description="PUBG, Valorant ve daha fazlası"
              icon={<Gamepad2 className="w-8 h-8" />}
              gradient="from-purple-500 to-purple-700"
              href="/products?category=games"
            />
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nasıl Çalışır?
            </h2>
            <p className="text-xl text-gray-600">
              3 basit adımda dijital ürününüze sahip olun
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={<ShoppingBag className="w-7 h-7" />}
              title="1. Ürün Seçin"
              description="İstediğiniz dijital ürünü seçin ve sepete ekleyin"
              delay={0}
            />
            <FeatureCard
              icon={<CreditCard className="w-7 h-7" />}
              title="2. Güvenle Ödeyin"
              description="Kredi kartı veya diğer ödeme yöntemleriyle güvenle ödeyin"
              delay={0.1}
            />
            <FeatureCard
              icon={<Mail className="w-7 h-7" />}
              title="3. Anında Alın"
              description="Kodunuz ekranda görüntülenir ve e-posta ile gönderilir"
              delay={0.2}
            />
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Neden EPINYA?
            </h2>
            <p className="text-xl text-gray-600">
              Güvenli ve hızlı dijital alışveriş deneyimi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-7 h-7" />}
              title="Anında Teslimat"
              description="Ödeme sonrası kodunuz anında ekranda görüntülenir ve e-posta ile gönderilir"
              delay={0}
            />
            <FeatureCard
              icon={<Shield className="w-7 h-7" />}
              title="Güvenli Alışveriş"
              description="256-bit şifreleme ile korunan kodlar ve güvenli ödeme altyapısı"
              delay={0.1}
            />
            <FeatureCard
              icon={<CreditCard className="w-7 h-7" />}
              title="Çoklu Ödeme"
              description="Kredi kartı, banka kartı ve diğer ödeme yöntemleri ile kolayca ödeyin"
              delay={0.2}
            />
            <FeatureCard
              icon={<Lock className="w-7 h-7" />}
              title="Güvenli Kodlar"
              description="Tüm kodlar şifrelenmiş olarak saklanır ve sadece size özel olarak açılır"
              delay={0.3}
            />
            <FeatureCard
              icon={<Clock className="w-7 h-7" />}
              title="7/24 Erişim"
              description="İstediğiniz zaman alışveriş yapın, kodlarınıza her zaman erişin"
              delay={0.4}
            />
            <FeatureCard
              icon={<Smartphone className="w-7 h-7" />}
              title="Mobil Uyumlu"
              description="Telefon, tablet veya bilgisayardan kolayca alışveriş yapın"
              delay={0.5}
            />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hemen Başlayın
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Binlerce dijital ürün arasından seçim yapın ve anında teslim alın
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                  Ücretsiz Kayıt Ol
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Ürünleri İncele
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">EPINYA</span>
              </div>
              <p className="text-sm text-gray-400">
                Dijital hediye kartları ve oyun kodları için güvenilir adresiniz.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Ürünler</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/products?category=apple" className="hover:text-white transition-colors">Apple</Link></li>
                <li><Link href="/products?category=steam" className="hover:text-white transition-colors">Steam</Link></li>
                <li><Link href="/products?category=playstation" className="hover:text-white transition-colors">PlayStation</Link></li>
                <li><Link href="/products?category=games" className="hover:text-white transition-colors">Oyunlar</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Şirket</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">Hakkımızda</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">İletişim</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">SSS</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Destek</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Yasal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms" className="hover:text-white transition-colors">Kullanım Koşulları</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Gizlilik Politikası</Link></li>
                <li><Link href="/refund" className="hover:text-white transition-colors">İade Politikası</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2024 EPINYA. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <button className="hover:text-white transition-colors">🇹🇷 Türkçe</button>
              <span className="text-gray-600">|</span>
              <button className="hover:text-white transition-colors">TRY ₺</button>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
