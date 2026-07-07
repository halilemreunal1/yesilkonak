import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Users, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">İletişim</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adres</h4>
                    <p className="text-muted-foreground">
                      Modern Evler, 3104. Sk. No: 29
                      <br />
                      32200 Merkez/Isparta
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefon</h4>
                    <p className="text-muted-foreground">02462241650</p>
                    <p className="text-muted-foreground">GSM: 05423145219</p>
                    <a 
                      href="https://wa.me/905423145219?text=Merhaba, yurt hakkında bilgi almak istiyorum" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors mt-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">WhatsApp ile yaz</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-posta</h4>
                    <p className="text-muted-foreground">
                      achilles2005@hotmail.com
                    
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Çalışma Saatleri</h4>
                    <p className="text-muted-foreground">
                      Haftanın her günü gelmeden önce arayıp 08:00 - 19:00 arasında bizi ziyaret edebilirsiniz.
                      
                    </p>
                  </div>
                </div>

                {/* Social Media Section */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-3">Bizi Takip Edin</h4>
                    <div className="space-y-3">
                      <a 
                        href="https://facebook.com/ispartayurt" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors">
                          <Facebook className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Facebook</p>
                          <p className="text-sm">Güncel duyurular ve haberler için</p>
                        </div>
                      </a>
                      
                      <a 
                        href="https://instagram.com/ispartayurt" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <div className="w-8 h-8 bg-pink-100 group-hover:bg-pink-200 rounded-lg flex items-center justify-center transition-colors">
                          <Instagram className="w-4 h-4 text-pink-600" />
                        </div>
                        <div>
                          <p className="font-medium">Instagram</p>
                          <p className="text-sm">Daha detaylı fotoğraflar ve günlük yaşam için</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <Card className="overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d788.2573061710185!2d30.546778207348556!3d37.789354871550486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c5b5e1c177cd2f%3A0x93b8db1bd3484834!2zWWXFn2lsa29uYWsgRXJrZWsgw5bEn3JlbmNpIFlVcmR1!5e0!3m2!1str!2sus!4v1756458726563!5m2!1str!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yeşilkonak Erkek Öğrenci Yurdu Konumu"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
