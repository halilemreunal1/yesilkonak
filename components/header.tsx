"use client"

import { useState } from "react"
import { Menu, X, Home, Info, Users, Phone, Instagram, Shield, HelpCircle, MapPin, MessageCircle } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navigation = [
  { name: "Ana Sayfa",  href: "#home",     icon: Home       },
  { name: "Hakkında",   href: "#about",    icon: Info       },
  { name: "Odalar",     href: "#services", icon: Users      },
  { name: "SSS",        href: "#faq",      icon: HelpCircle },
  { name: "Konum",      href: "#konum",    icon: MapPin     },
  { name: "İletişim",   href: "#contact",  icon: Phone      },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header style={{ background: "var(--header-bg, oklch(0.13 0.008 265))", borderBottom: "1px solid var(--border)" }} className="sticky top-0 z-50 text-white [.light_&]:text-foreground">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6">

        {/* ── Single row — logo | nav | cta ── */}
        <div className="flex items-center justify-between h-16">

          {/* Logo — compact, one line always */}
          <a href="#home" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 flex-shrink-0">
              <img src="/logo.png" alt="Yeşilkonak Logo" className="w-full h-full object-contain" />
            </div>
            <div className="leading-none">
              <span className="text-base font-bold tracking-wide text-foreground whitespace-nowrap">
                YEŞİLKONAK
              </span>
              <span className="hidden sm:block text-[11px] text-muted-foreground tracking-widest uppercase whitespace-nowrap">
                Erkek Öğrenci Yurdu
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-base text-muted-foreground hover:text-foreground hover:bg-foreground/8 transition-all duration-150"
              >
                <item.icon className="w-3.5 h-3.5" />
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Social + Theme toggle */}
            <div className="hidden lg:flex items-center gap-1 border-r border-border pr-3 mr-1">
              <a
                href="https://ozelbarinmahizmetleri.gsb.gov.tr/ozelyurtlar"
                target="_blank" rel="noopener noreferrer"
                title="GSB Onaylı"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-primary transition-colors"
              >
                <Shield className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/ispartayurt"
                target="_blank" rel="noopener noreferrer"
                title="Instagram"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/905423145219"
                target="_blank" rel="noopener noreferrer"
                title="WhatsApp"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <ThemeToggle />
            </div>

            {/* Call CTA pill */}
            <a
              id="header-call-cta"
              href="tel:02462241650"
              className="hidden sm:flex items-center gap-1.5 bg-cyan-400 hover:bg-cyan-300 text-gray-900 font-bold text-base px-5 py-2 rounded-lg transition-all duration-150 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">0246 224 16 50</span>
              <span className="md:hidden">Ara</span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menü"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border px-4 pb-4 pt-2"
          style={{ background: "var(--header-bg)" }}>
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/8 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-4 h-4 text-primary" />
                {item.name}
              </a>
            ))}
          </nav>
          <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
            <a
              href="tel:02462241650"
              className="flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-gray-900 font-bold text-sm px-4 py-2.5 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-4 h-4" />
              0246 224 16 50
            </a>
            <a
              href="https://wa.me/905423145219"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-foreground/10 hover:bg-foreground/15 text-foreground text-sm font-medium px-4 py-2.5 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp ile Yaz
            </a>
            {/* Theme toggle row */}
            <ThemeToggle className="w-full flex items-center justify-center gap-2 text-sm font-medium border border-border rounded-lg py-2" />
          </div>
        </div>
      )}
    </header>
  )
}
