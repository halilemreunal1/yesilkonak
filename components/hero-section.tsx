import { Phone, Shield, Users, Clock, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] lg:h-[calc(100vh-64px)] flex items-end lg:items-center overflow-hidden"
      style={{ backgroundColor: "oklch(0.13 0.008 265)" }}
    >

      {/* ── MOBILE: full-bleed background photo (unchanged) ── */}
      <div
        className="lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/yesilkonak-building.jpeg')" }}
        aria-hidden="true"
      />
      <div
        className="lg:hidden absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,11,15,0.92) 0%, rgba(10,11,15,0.45) 38%, rgba(10,11,15,0.10) 65%, rgba(10,11,15,0.25) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── DESKTOP: solid dark left panel + feathered seam ── */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-[52%]" style={{ backgroundColor: "oklch(0.13 0.008 265)" }} aria-hidden="true" />
      <div className="hidden lg:block absolute inset-y-0 left-[46%] w-40 bg-gradient-to-r from-[oklch(0.13_0.008_265)] to-transparent" aria-hidden="true" />

      {/* ── DESKTOP: img tag on the right — full control over fit & position ── */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[58%] overflow-hidden" aria-hidden="true">
        <img
          src="/yesilkonak-building.jpeg"
          alt=""
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center 15%",
            transform: "scale(1.25)",
            transformOrigin: "center 20%",
          }}
        />
        {/* Wide 3-stop gradient seam: solid → mid → transparent */}
        <div className="absolute inset-y-0 left-0 w-80"
          style={{ background: "linear-gradient(to right, oklch(0.13 0.008 265) 0%, oklch(0.13 0.008 265 / 0.7) 45%, transparent 100%)" }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6
                      pb-10 lg:pb-0
                      lg:flex lg:items-center lg:h-[calc(100vh-64px)]">

        <div className="w-full lg:w-[46%]">

          {/* Badge */}
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
              <Shield className="w-3 h-3" />
              GSB Onaylı · 2006
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-5">
            Isparta Erkek
            <span className="block text-cyan-400">Öğrenci Yurdu</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-md">
            SDÜ öğrencileri için güvenli, temiz ve{" "}
            <span className="text-white font-medium">kahvaltı dahil</span>{" "}
            konaklama. 1.000&apos;den fazla öğrenciye ev sahipliği yaptık.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              id="hero-call-cta"
              href="tel:05423145219"
              className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300
                         text-gray-900 font-bold text-sm sm:text-base
                         px-6 py-3 rounded-xl
                         transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-400/20"
            >
              <Phone className="w-4 h-4" />
              0542 314 52 19
            </a>
            <a
              id="hero-whatsapp-cta"
              href="https://wa.me/905423145219?text=Merhaba, yurt hakkında bilgi almak ve oda görmek istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20
                         backdrop-blur-sm text-white font-semibold text-sm sm:text-base
                         border border-white/20
                         px-6 py-3 rounded-xl
                         transition-all duration-200 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp ile Yaz
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap gap-2">
            {[
              { icon: Shield, label: "GSB Onaylı" },
              { icon: Clock,  label: "2006'dan Beri" },
              { icon: Users,  label: "1.000+ Öğrenci" },
              { icon: Shield, label: "7/24 Güvenlik"  },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 bg-white/8 backdrop-blur-sm
                           border border-white/12 text-white/80
                           text-xs font-medium px-3 py-1.5 rounded-full"
              >
                <item.icon className="w-3 h-3 text-cyan-400" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
