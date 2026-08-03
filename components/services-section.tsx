import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Utensils, Tv, BookOpen, Shield, Clock, Refrigerator, CookingPot } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Wifi,
      title: "Ücretsiz WiFi",
      description: "Tüm odalarda ve ortak alanlarda hızlı internet erişimi",
    },
    {
      icon: Utensils,
      title: "Kahvaltı Hizmeti",
      description: "Her sabah sıcak ve besleyici kahvaltı servisi",
    },
    {
      icon: Tv,
      title: "Ortak Alanlar",
      description: "TV salonu, dinlenme ve sosyalleşme alanları",
    },
    {
      icon: CookingPot,
      title: "Öğrenci Mutfağı",
      description: "Öğrencilerin güvenle yemek yapabileceği mutfak",
    },
    {
      icon: Shield,
      title: "7/24 Güvenlik",
      description: "Güvenlik kameraları ve nöbetçi personel",
    },
    {
      icon: Clock,
      title: "Esnek Saatler",
      description: "Öğrenci programlarına uygun esnek giriş-çıkış",
    },
    {
      icon: Refrigerator,
      title: "Mini Buzdolabı",
      description: "Tüm odalarda kişisel mini buzdolabı bulunmaktadır",
    },
    {
      icon: Shield,
      title: "Yönetmelik Uyumu",
      description: "Yangın ve deprem yönetmeliklerine tam uygunluk",
    },
  ]

  return (
    <section id="services" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Hizmetlerimiz</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Öğrencilerimizin konforlu ve verimli bir eğitim hayatı geçirmeleri için sunduğumuz kapsamlı hizmetler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Room Types */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Oda Tipleri</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                <img src="/single-person-room.webp" alt="Tek Kişilik Oda" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">1 Kişilik Odalar</h4>
                <p className="text-muted-foreground mb-4">
                  Kişisel çalışma alanı, dolap, yatak ve mini buzdolabı bulunan özel odalar.
                </p>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm mb-1">1 Kişilik WC'li</h5>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-2">
                      <li>• Özel banyo ve WC</li>
                      <li>• Mini buzdolabı</li>
                      <li>• Çalışma masası</li>
                      <li>• Dolap</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm mb-1">1 Kişilik Ortak Lavabo</h5>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-2">
                      <li>• Ortak banyo kullanımı</li>
                      <li>• Mini buzdolabı</li>
                      <li>• Çalışma masası</li>
                      <li>• Dolap</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                <img src="/two-person-room.webp" alt="İki Kişilik Oda" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2">2 Kişilik Odalar</h4>
                <p className="text-muted-foreground mb-4">
                  İki öğrenci için tasarlanmış, sosyal ve ekonomik konaklama seçeneği.
                </p>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm mb-1">2 Kişilik İçinde WC'li</h5>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-2">
                      <li>• Özel banyo ve WC</li>
                      <li>• Mini buzdolabı</li>
                      <li>• İki çalışma masası</li>
                      <li>• İki dolap</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm mb-1">2 Kişilik Ortak Lavabo</h5>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-2">
                      <li>• Ortak banyo kullanımı</li>
                      <li>• Mini buzdolabı</li>
                      <li>• İki çalışma masası</li>
                      <li>• İki dolap</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
