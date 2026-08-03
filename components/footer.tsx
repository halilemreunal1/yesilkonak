import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Yeşilkonak Erkek Öğrenci Yurdu Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Yeşilkonak Erkek Öğrenci Yurdu</h3>
                <p className="text-sm opacity-80">Güvenli Konaklama</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4 max-w-md">
              2006'dan bu yana Isparta'da Süleyman Demirel Üniversitesi öğrencilerine güvenli, temiz ve kaliteli konaklama hizmeti sunuyoruz. GSB onaylı yurdumuzda kahvaltı, WiFi, 7/24 güvenlik ve temizlik hizmetleri mevcuttur.
            </p>
            {/* SEO keyword paragraph — helps indexing */}
            <p className="text-xs opacity-40 max-w-md leading-relaxed">
              Isparta erkek öğrenci yurdu · SDÜ yurdu · Süleyman Demirel Üniversitesi öğrenci yurdu · Isparta özel yurt · GSB onaylı yurt Isparta
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com/ispartayurt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/ispartayurt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#home" className="hover:text-secondary transition-colors">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-secondary transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-secondary transition-colors">
                  SSS
                </a>
              </li>
              <li>
                <a href="#konum" className="hover:text-secondary transition-colors">
                  Konum
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition-colors">
                  İletişim
                </a>
              </li>
              <li>
                <a 
                  href="https://ozelbarinmahizmetleri.gsb.gov.tr/ozelyurtlar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors flex items-center space-x-1"
                >
                  <Shield className="w-3 h-3" />
                  <span>Resmi Onaylı Yurt</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Modern Evler, 3104. Sk. No: 29, 32200 Merkez/Isparta</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>02462241650</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@ispartayurt.org" className="hover:text-secondary transition-colors">info@ispartayurt.org</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p className="text-xs opacity-60 mb-2">Özel Yeşilkonak Yükseköğretim Erkek Öğrenci Yurdu</p>
          <p>&copy; 2026 Yeşilkonak Erkek Öğrenci Yurdu. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
