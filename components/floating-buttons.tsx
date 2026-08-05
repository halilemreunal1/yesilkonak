"use client"

import { Phone, MessageCircle, MapPin } from "lucide-react"

export function FloatingButtons() {
  return (
    <>
      {/* ── Desktop: WhatsApp bubble (bottom-right) ── */}
      <a
        id="float-whatsapp"
        href="https://wa.me/905423145219?text=Merhaba, yurt hakkında bilgi almak istiyorum"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yaz"
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-5 py-3.5 rounded-full shadow-2xl shadow-secondary/30 transition-all duration-300 hover:scale-105 font-semibold text-sm"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp ile Yaz
      </a>

      {/* ── Mobile: sticky bottom action bar ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary border-t border-primary-foreground/10 shadow-[0_-4px_24px_rgba(0,0,0,0.25)]">
        <div className="grid grid-cols-3 divide-x divide-primary-foreground/10">
          {/* Call */}
          <a
            id="mobile-float-call"
            href="tel:05423145219"
            aria-label="Ara"
            className="flex flex-col items-center justify-center py-3 gap-1 text-primary-foreground hover:bg-white/10 transition-colors active:bg-white/20"
          >
            <Phone className="w-5 h-5" />
            <span className="text-xs font-semibold">Ara</span>
          </a>

          {/* WhatsApp — accent highlight in the center */}
          <a
            id="mobile-float-whatsapp"
            href="https://wa.me/905423145219?text=Merhaba, yurt hakkında bilgi almak istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex flex-col items-center justify-center py-3 gap-1 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors active:bg-secondary/80"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs font-semibold">WhatsApp</span>
          </a>

          {/* Directions */}
          <a
            id="mobile-float-map"
            href="https://maps.google.com/maps?q=Ye%C5%9Filkonak+Erkek+%C3%96%C4%9Frenci+Yurdu+Isparta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yol Tarifi"
            className="flex flex-col items-center justify-center py-3 gap-1 text-primary-foreground hover:bg-white/10 transition-colors active:bg-white/20"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-xs font-semibold">Yol Tarifi</span>
          </a>
        </div>
      </div>

      {/* Bottom padding so the floating bar doesn't cover page content on mobile */}
      <div className="md:hidden h-16" aria-hidden="true" />
    </>
  )
}
