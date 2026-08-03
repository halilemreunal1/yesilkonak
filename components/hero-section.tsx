import { Button } from "@/components/ui/button"
import { Phone, Shield, Users, Clock, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/yesilkonak-building.jpeg')" }}
        aria-hidden="true"
      />
      {/* Dark forest overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-950/80 to-green-950/55" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">
          {/* Primary H1 — keyword optimized */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-5">
            Isparta Erkek
            <span className="block text-secondary">Öğrenci Yurdu</span>
          </h1>

          {/* Sub-headline with secondary keywords */}
          <p className="text-xl text-white/85 leading-relaxed mb-8 max-w-xl">
            SDÜ öğrencileri için 2006'dan beri güvenli, temiz ve{" "}
            <span className="font-semibold text-secondary/90">kahvaltı dahil</span>{" "}
            konaklama. GSB onaylı yurdumuzda 2.000'den fazla öğrenciye ev sahipliği yaptık.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              id="hero-call-cta"
              href="tel:02462241650"
              className="inline-flex items-center justify-center gap-2.5 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-emerald-500/30 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              0246 224 16 50
            </a>
            <a
              id="hero-whatsapp-cta"
              href="https://wa.me/905423145219?text=Merhaba, yurt hakkında bilgi almak ve oda görmek istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp ile Yaz
            </a>
          </div>

          {/* Trust bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Shield, label: "GSB Onaylı" },
              { icon: Clock, label: "2006'dan Beri" },
              { icon: Users, label: "2.000+ Öğrenci" },
              { icon: Shield, label: "7/24 Güvenlik" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20"
              >
                <item.icon className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-white text-xs font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
