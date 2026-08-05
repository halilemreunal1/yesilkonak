import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Utensils, Tv, BookOpen, Shield, Clock, Refrigerator, CookingPot } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Wifi,
      title: "Ücretsiz WiFi",
      description: "1 Gbps fiber altyapı — tüm odalarda ve ortak alanlarda hızlı internet erişimi.",
      iconColor: "text-sky-500 dark:text-sky-400",
      bgColor: "bg-sky-500/10 dark:bg-sky-500/20",
    },
    {
      icon: Utensils,
      title: "Kahvaltı Hizmeti",
      description: "Her sabah sıcak ve besleyici kahvaltı servisi",
      iconColor: "text-amber-500 dark:text-amber-400",
      bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
    },
    {
      icon: Tv,
      title: "Ortak Alanlar",
      description: "TV salonu, dinlenme ve sosyalleşme alanları",
      iconColor: "text-purple-500 dark:text-purple-400",
      bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    },
    {
      icon: CookingPot,
      title: "Öğrenci Mutfağı",
      description: "Öğrencilerin güvenle yemek yapabileceği mutfak",
      iconColor: "text-emerald-500 dark:text-emerald-400",
      bgColor: "bg-emerald-500/10 dark:bg-emerald-500/20",
    },
    {
      icon: Shield,
      title: "7/24 Güvenlik",
      description: "Güvenlik kameraları ve nöbetçi personel",
      iconColor: "text-rose-500 dark:text-rose-400",
      bgColor: "bg-rose-500/10 dark:bg-rose-500/20",
    },
    {
      icon: Clock,
      title: "Esnek Saatler",
      description: "Öğrenci programlarına uygun esnek giriş-çıkış",
      iconColor: "text-indigo-500 dark:text-indigo-400",
      bgColor: "bg-indigo-500/10 dark:bg-indigo-500/20",
    },
    {
      icon: Refrigerator,
      title: "Mini Buzdolabı",
      description: "Tüm odalarda kişisel mini buzdolabı bulunmaktadır",
      iconColor: "text-cyan-500 dark:text-cyan-400",
      bgColor: "bg-cyan-500/10 dark:bg-cyan-500/20",
    },
    {
      icon: Shield,
      title: "Yönetmelik Uyumu",
      description: "Yangın ve deprem yönetmeliklerine tam uygunluk",
      iconColor: "text-teal-500 dark:text-teal-400",
      bgColor: "bg-teal-500/10 dark:bg-teal-500/20",
    },
  ]

  return (
    <section id="services" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Oda Tipleri ve Hizmetlerimiz</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Öğrencilerimizin konforlu ve verimli bir eğitim hayatı geçirmeleri için sunduğumuz kapsamlı hizmetler.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-3 px-3 pt-5 sm:px-6 sm:pt-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${service.iconColor}`} />
                </div>
                <CardTitle className="text-sm sm:text-lg leading-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0 px-3 pb-5 sm:px-6">
                <p className="text-muted-foreground text-xs sm:text-sm">{service.description}</p>
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
                <p className="text-xl font-semibold mb-2">1 Kişilik Odalar</p>
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
                <p className="text-xl font-semibold mb-2">2 Kişilik Odalar</p>
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
