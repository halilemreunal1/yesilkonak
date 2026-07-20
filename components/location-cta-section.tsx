import { MapPin, Phone, Clock, Navigation, MessageCircle, Mail } from "lucide-react"

export function LocationCtaSection() {
  return (
    <section id="konum" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Bizi Ziyaret Edin
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Odaları yerinde görmeden karar vermenizi önermiyoruz.
            Gelin, yurdumuzu tanıyın, kendiniz değerlendirin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d788.2573061710185!2d30.546778207348556!3d37.789354871550486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c5b5e1c177cd2f%3A0x93b8db1bd3484834!2zWWXFn2lsa29uYWsgRXJrZWsgw5bEn3JlbmNpIFlVcmR1!5e0!3m2!1str!2sus!4v1756458726563!5m2!1str!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yeşilkonak Erkek Öğrenci Yurdu Konum — Isparta"
            />
          </div>

          {/* Contact Details + CTA */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-muted/40 rounded-xl border border-border">
              <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Modern Evler Mahallesi, 3104. Sk. No: 29<br />
                  32000 Merkez / Isparta
                </p>
                <a
                  id="directions-link"
                  href="https://maps.google.com/maps?q=Ye%C5%9Filkonak+Erkek+%C3%96%C4%9Frenci+Yurdu+Isparta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-medium mt-2 hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Google Maps'te Aç & Yol Tarifi Al
                </a>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-4 p-5 bg-muted/40 rounded-xl border border-border">
              <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
                <div className="space-y-1">
                  <a
                    id="contact-landline"
                    href="tel:02462241650"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    📞 0246 224 16 50 <span className="text-xs opacity-60">(Sabit)</span>
                  </a>
                  <a
                    id="contact-gsm"
                    href="tel:05423145219"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    📱 0542 314 52 19 <span className="text-xs opacity-60">(GSM)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-5 bg-muted/40 rounded-xl border border-border">
              <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Ziyaret Saatleri</h3>
                <p className="text-muted-foreground text-sm">
                  Her gün (Pazartesi – Pazar):{" "}
                  <span className="font-semibold text-foreground">08:00 – 19:00</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Lütfen gelmeden önce bizi arayın.
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 bg-muted/40 rounded-xl border border-border">
              <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">E-posta</h3>
                <a
                  href="mailto:info@ispartayurt.org"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  info@ispartayurt.org
                </a>
              </div>
            </div>

            {/* Big CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                id="location-call-cta"
                href="tel:02462241650"
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-bold text-base hover:bg-primary/90 transition-colors shadow-md"
              >
                <Phone className="w-5 h-5" />
                Hemen Ara
              </a>
              <a
                id="location-whatsapp-cta"
                href="https://wa.me/905423145219?text=Merhaba, yurt hakkında bilgi almak ve oda görmek istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-4 rounded-xl font-bold text-base hover:bg-green-600 transition-colors shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile Yaz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
