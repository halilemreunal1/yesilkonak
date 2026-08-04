"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Info, Users, Phone, Instagram, Shield, HelpCircle, MapPin, MessageCircle } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Ana Sayfa", href: "#home", icon: Home },
    { name: "Hakkımızda", href: "#about", icon: Info },
    { name: "Odalar", href: "#services", icon: Users },
    { name: "SSS", href: "#faq", icon: HelpCircle },
    { name: "Konum", href: "#konum", icon: MapPin },
    { name: "İletişim", href: "#contact", icon: Phone },
  ]

  return (
    <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/logo.png" alt="Yeşilkonak Erkek Öğrenci Yurdu Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-xl font-bold">Yeşilkonak Erkek Öğrenci Yurdu</span>
              <p className="text-sm opacity-90">Güvenli Konaklama</p>
            </div>
          </div>

          {/* Desktop Navigation & Social Media */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 hover:text-secondary transition-colors duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
            
            {/* Social Media & Contact */}
            <div className="flex items-center space-x-4 border-l border-primary-foreground/20 pl-6">
              <a 
                href="https://ozelbarinmahizmetleri.gsb.gov.tr/ozelyurtlar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-secondary transition-colors duration-200"
                title="Resmi Onaylı Yurt - GSB Doğrulama"
              >
                <Shield className="w-4 h-4" />
                <span className="hidden lg:inline text-xs font-medium">Resmi Onaylı</span>
              </a>
              
              <a 
                href="https://instagram.com/ispartayurt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-secondary transition-colors duration-200"
                title="Instagram'da bizi takip edin"
              >
                <Instagram className="w-4 h-4" />
                <span className="hidden lg:inline">Instagram</span>
              </a>
              
              <a 
                href="https://wa.me/905423145219?text=Merhaba, yurt hakkında bilgi almak istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-secondary transition-colors duration-200"
                title="WhatsApp ile yaz"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden lg:inline text-sm">WhatsApp</span>
              </a>
              <a 
                href="tel:02462241650" 
                className="flex items-center space-x-1 bg-secondary/20 hover:bg-secondary/40 px-3 py-1.5 rounded-lg transition-colors duration-200 font-bold"
                title="Bizi arayın"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline text-sm">0246 224 16 50</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary-foreground hover:bg-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 py-2 px-4 rounded-lg hover:bg-secondary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              ))}
              
              {/* Mobile Social Media & Contact */}
              <div className="border-t border-primary-foreground/20 mt-2 pt-2">
                <a 
                  href="https://ozelbarinmahizmetleri.gsb.gov.tr/ozelyurtlar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 py-2 px-4 rounded-lg hover:bg-secondary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Shield className="w-4 h-4" />
                  <span>Resmi Onaylı Yurt</span>
                </a>
                
                <a 
                  href="https://instagram.com/ispartayurt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 py-2 px-4 rounded-lg hover:bg-secondary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                
                <a 
                  href="tel:05423145219" 
                  className="flex items-center space-x-2 py-2 px-4 rounded-lg hover:bg-secondary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>0542 314 52 19</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
