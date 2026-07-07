import { Button } from "@/components/ui/button"
import { Shield, Users, Clock, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Yeşilkonak'ta
                <span className="text-primary block">Güvenli Konaklama</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Öğrencilerimize ev konforunda, güvenli ve kaliteli konaklama hizmeti sunuyoruz. Modern imkanlar ve
                deneyimli kadromuzla yanınızdayız.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <a href="tel:02462241650">
                  İletişime Geç
                  <Phone className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#about">Daha Fazla Bilgi</a>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Güvenli</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Sosyal</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">7/24 Hizmet</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src="/yesilkonak-building.jpeg"
                alt="Yeşilkonak Erkek Öğrenci Yurdu Binası"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">2006'dan Beri</p>
                  <p className="text-sm text-muted-foreground">2000+ Öğrenci</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
