'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Siparişim ne kadar sürede teslim edilir?',
    answer: 'Ödemeniz onaylandıktan sonra siparişiniz otomatik sistemimiz tarafından saniyeler içinde e-posta adresinize ve hesabınıza teslim edilir. 7/24 anında teslimat garantisi sunuyoruz.',
  },
  {
    question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
    answer: 'Visa, Mastercard ve Troy logolu tüm kredi kartları ve banka kartlarını kabul ediyoruz. Tüm ödemeler SSL ve 3D Secure ile güvence altındadır.',
  },
  {
    question: 'Ürünlerim orijinal mi?',
    answer: 'Evet, tüm ürünlerimiz resmi kaynaklardan temin edilmektedir. %100 orijinal ve çalışır garantisi veriyoruz. Sorun yaşamanız durumunda koşulsuz iade hakkınız bulunmaktadır.',
  },
  {
    question: 'İade ve değişim politikanız nedir?',
    answer: 'Dijital ürünlerde teslimat sonrası iade mümkün değildir. Ancak ürününüzde bir sorun varsa (çalışmıyor, yanlış ürün vb.) 24 saat içinde destek ekibimizle iletişime geçerek değişim veya iade talebinde bulunabilirsiniz.',
  },
  {
    question: 'Fatura alabilir miyim?',
    answer: 'Evet, tüm siparişleriniz için e-fatura veya e-arşiv fatura düzenlenmektedir. Faturanıza hesabınızın "Siparişlerim" bölümünden ulaşabilirsiniz.',
  },
  {
    question: 'Destek ekibinize nasıl ulaşabilirim?',
    answer: '7/24 canlı destek hattımız, WhatsApp destek hattımız (0850 123 45 67) ve e-posta adresimiz (destek@epinya.com) üzerinden bize ulaşabilirsiniz. Ortalama yanıt süremiz 5 dakikadır.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-zinc-900 py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-gray-400 text-lg">
            Merak ettiklerinizin cevapları burada
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-900/50 transition-colors"
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-zinc-800 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
