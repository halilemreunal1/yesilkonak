import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Mert A.",
    detail: "SDÜ, 3. Sınıf • 1 Kişilik Oda",
    text: "2 yıldır Yeşilkonak'tayım. Kahvaltı her sabah hazır, güvenlik mükemmel ve personel çok ilgili. Ailem de çok memnun, her aradığında 'orası nasıl' diye soruyor — cevabım hep aynı: harika!",
    stars: 5,
    initial: "M",
  },
  {
    name: "Kaan T.",
    detail: "SDÜ, 2. Sınıf • 2 Kişilik WC'li Oda",
    text: "Üniversiteye başlarken çok telaşlıydım. Buraya gelince kendimi evimde gibi hissettim. Ortak mutfak harika bir özellik, WiFi çok hızlı. Kesinlikle tavsiye ederim.",
    stars: 5,
    initial: "K",
  },
  {
    name: "Emre S.",
    detail: "SDÜ, 4. Sınıf • 1 Kişilik WC'li Oda",
    text: "4 yıllık üniversite hayatımın tamamını Yeşilkonak'ta geçirdim. Temiz, güvenli, huzurlu bir ortam. Odamda rahatça çalışabildim. Mezun olacak olmak beni gerçekten üzüyor!",
    stars: 5,
    initial: "E",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Öğrencilerimiz Ne Diyor?
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            2006'dan bu yana 2.000'den fazla öğrenciye ev sahipliği yaptık.
            İşte onların sözleri.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-background/10 rounded-2xl p-7 border border-background/20 hover:bg-background/15 transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary opacity-60 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-background/85 leading-relaxed mb-6 italic">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-background">{t.name}</p>
                  <p className="text-sm text-background/60">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust numbers */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-background/20 pt-12">
          {[
            { num: "2006", label: "Kuruluş Yılı" },
            { num: "20+", label: "Yıllık Deneyim" },
            { num: "2.000+", label: "Mezun Öğrenci" },
            { num: "4", label: "Oda Tipi" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-bold text-primary mb-1">{stat.num}</p>
              <p className="text-sm text-background/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
