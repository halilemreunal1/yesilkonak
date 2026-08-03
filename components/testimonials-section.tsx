"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Mert A.",
    detail: "SDÜ, 3. Sınıf • 1 Kişilik Oda",
    text: "2 yıldır Yeşilkonak'tayım. Kahvaltı her sabah hazır, güvenlik mükemmel ve personel çok ilgili. Ailem de çok memnun — cevabım hep aynı: harika!",
    stars: 5,
    initial: "M",
  },
  {
    name: "Kaan T.",
    detail: "SDÜ, 2. Sınıf • 2 Kişilik WC'li Oda",
    text: "Üniversiteye başlarken çok telaşlıydım. Buraya gelince kendimi evimde gibi hissettim. Ortak mutfak harika, WiFi çok hızlı. Kesinlikle tavsiye ederim.",
    stars: 5,
    initial: "K",
  },
  {
    name: "Emre S.",
    detail: "SDÜ, 4. Sınıf • 1 Kişilik WC'li Oda",
    text: "4 yıllık üniversite hayatımın tamamını Yeşilkonak'ta geçirdim. Temiz, güvenli, huzurlu bir ortam. Mezun olacak olmak beni gerçekten üzüyor!",
    stars: 5,
    initial: "E",
  },
]

const stats = [
  { num: "2006", label: "Kuruluş" },
  { num: "20+", label: "Yıllık Deneyim" },
  { num: "2.000+", label: "Mezun Öğrenci" },
  { num: "4", label: "Oda Tipi" },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section id="testimonials" className="py-14 bg-foreground text-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Öğrencilerimiz Ne Diyor?</h2>
          <p className="text-sm opacity-70">2006'dan bu yana 2.000'den fazla öğrenciye ev sahipliği yaptık.</p>
        </div>

        {/* Single testimonial card */}
        <div className="relative bg-background/10 rounded-2xl p-7 border border-background/20">
          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            aria-label="Önceki yorum"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            aria-label="Sonraki yorum"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="px-6">
            {/* Quote icon */}
            <Quote className="w-7 h-7 text-primary opacity-60 mb-3" />

            {/* Stars */}
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.stars }).map((_, s) => (
                <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote text */}
            <p className="text-background/85 leading-relaxed italic mb-5">"{t.text}"</p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground text-sm flex-shrink-0">
                {t.initial}
              </div>
              <div>
                <p className="font-semibold text-background text-sm">{t.name}</p>
                <p className="text-xs text-background/60">{t.detail}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-200 rounded-full ${
                i === current
                  ? "w-6 h-2.5 bg-secondary"
                  : "w-2.5 h-2.5 bg-background/30 hover:bg-background/50"
              }`}
              aria-label={`${i + 1}. yoruma git`}
            />
          ))}
        </div>

        {/* Compact stats row */}
        <div className="mt-8 pt-6 border-t border-background/20 flex justify-center gap-8 flex-wrap">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-bold text-secondary">{stat.num}</p>
              <p className="text-xs text-background/60 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
