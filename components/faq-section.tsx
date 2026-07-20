"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

const faqs = [
  {
    q: "Yeşilkonak Erkek Öğrenci Yurdu nerede?",
    a: "Modern Evler Mahallesi, 3104. Sk. No: 29, 32000 Merkez/Isparta adresinde hizmet vermekteyiz. Google Haritalar üzerinden kolayca yol tarifi alabilirsiniz.",
  },
  {
    q: "Yurt ücretlerine ne dahildir?",
    a: "Kahvaltı, yüksek hızlı WiFi, 7/24 güvenlik, haftalık temizlik hizmeti, çamaşırhane kullanımı ve ortak mutfak kullanımı ücrete dahildir. Her odada mini buzdolabı, çalışma masası ve dolap mevcuttur.",
  },
  {
    q: "Süleyman Demirel Üniversitesi'ne uzaklığı nedir?",
    a: "Yurdumuz Isparta merkezde yer almaktadır. SDÜ kampüsüne otobüs ile 15-20 dakika mesafededir. Yurdun önünde otobüs durağı mevcuttur, ulaşım son derece pratiktir.",
  },
  {
    q: "GSB onaylı bir yurt mu?",
    a: "Evet, yurdumuz Gençlik ve Spor Bakanlığı tarafından resmi olarak onaylı ve düzenli olarak denetlenmektedir. GSB sisteminde 'Özel Yeşilkonak Yükseköğretim Erkek Öğrenci Yurdu' adıyla kayıtlıdır. Bunu ozelbarinmahizmetleri.gsb.gov.tr adresinden doğrulayabilirsiniz.",
  },
  {
    q: "Kaç tür oda seçeneği var?",
    a: "4 farklı oda tipimiz mevcuttur: 1 Kişilik WC'li Oda (özel banyo), 1 Kişilik Ortak Lavabolu Oda, 2 Kişilik WC'li Oda ve 2 Kişilik Ortak Lavabolu Oda. Tüm odalar çalışma masası, dolap ve mini buzdolabı ile donatılmıştır.",
  },
  {
    q: "Yurtta ortak mutfak kullanımı var mı?",
    a: "Evet, tüm sakinlerimizin özgürce kullanabileceği tam donanımlı ortak bir mutfak bulunmaktadır. Öğrencilerimiz istedikleri zaman yemek yapabilirler.",
  },
  {
    q: "Rezervasyon ve kayıt nasıl yapılır?",
    a: "Rezervasyon için 0246 224 16 50 numaralı telefonu arayabilir, WhatsApp üzerinden iletişime geçebilir veya yurdumuzu haftanın her günü 08:00–19:00 saatleri arasında bizzat ziyaret edebilirsiniz. Odaları yerinde görmeden karar vermenizi öneririz — sizi bekliyoruz!",
  },
  {
    q: "2025–2026 dönemi kontenjan durumu nedir?",
    a: "Kontenjanımız sınırlıdır ve her yıl kayıt sezonu başlamadan hızla dolmaktadır. Yer garantisi için erken kayıt yaptırmanızı şiddetle tavsiye ederiz. Güncel bilgi için hemen arayın: 0246 224 16 50.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Sık Sorulan Sorular
          </h2>
          <p className="text-lg text-muted-foreground">
            Aklınızdaki soruların cevabını bulamıyorsanız bizi arayın:{" "}
            <a href="tel:02462241650" className="font-semibold text-primary hover:underline">
              0246 224 16 50
            </a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                id={`faq-btn-${index}`}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-primary" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-primary" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-5 pb-5 border-t border-border/50"
                >
                  <p className="text-muted-foreground leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center p-6 bg-primary/5 rounded-2xl border border-primary/20">
          <p className="text-foreground font-semibold mb-3">
            Başka sorunuz mu var? Bizi arayın!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              id="faq-phone-cta"
              href="tel:02462241650"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              📞 0246 224 16 50
            </a>
            <a
              id="faq-whatsapp-cta"
              href="https://wa.me/905423145219?text=Merhaba, yurt hakkında bilgi almak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
