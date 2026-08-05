import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Heart, Star, Target, Shield, ExternalLink } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Aile Ortamı",
      description: "Öğrencilerimizi ailemizin bir parçası olarak görüyor, sıcak bir ortam sunuyoruz.",
      iconColor: "text-rose-500 dark:text-rose-400",
      bgColor: "bg-rose-500/10 dark:bg-rose-500/20",
    },
    {
      icon: Award,
      title: "Kaliteli Hizmet",
      description: "Yılların deneyimi ile en kaliteli konaklama hizmetini sağlıyoruz.",
      iconColor: "text-amber-500 dark:text-amber-400",
      bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
    },
    {
      icon: Star,
      title: "Güvenilir",
      description: "Aileler bize güveniyor, öğrenciler kendilerini güvende hissediyor.",
      iconColor: "text-yellow-500 dark:text-yellow-400",
      bgColor: "bg-yellow-500/10 dark:bg-yellow-500/20",
    },
    {
      icon: Target,
      title: "Hedef Odaklı",
      description: "Öğrencilerin eğitim hayatlarında başarılı olmalarını destekliyoruz.",
      iconColor: "text-blue-500 dark:text-blue-400",
      bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    },
  ]

  return (
    <section id="about" className="py-14 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Yeşilkonak Hakkında — 2006'dan Beri Isparta'da</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Yılların deneyimi ile Isparta'da öğrenci konaklama hizmetinde öncü konumdayız. Yeşilkonak Erkek Öğrenci
            Yurdu olarak güvenli, temiz ve konforlu ortamımızda öğrencilerimizin eğitim hayatlarını destekliyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {values.map((value, index) => (
            <Card key={index} className="group text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Neden Yeşilkonak Erkek Öğrenci Yurdu?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Merkezi Konum:</strong> Şehir merkezine ve üniversiteye yakın
                  konumumuz ile ulaşım kolaylığı sağlıyoruz.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Modern İmkanlar:</strong> Günümüz standartlarına uygun odalar ve
                  ortak kullanım alanları.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Deneyimli Kadro:</strong> Öğrenci ihtiyaçlarını bilen, deneyimli
                  ve güler yüzlü personelimiz.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Uygun Fiyat:</strong> Kaliteli hizmeti en uygun fiyatlarla
                  sunuyoruz.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/avlu.jpg"
              alt="Öğrenciler Ortak Alan"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Government Verification Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="text-xl font-bold text-foreground mb-2">Resmi Onaylı Yurt</h3>
                    <p className="text-muted-foreground mb-2">
                      Yurdumuz Gençlik ve Spor Bakanlığı tarafından resmi olarak onaylı ve denetlenmektedir.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Güvenilir ve kaliteli hizmet garantisi için GSB verilerini kontrol edebilirsiniz.
                    </p>
                  </div>
                </div>
                <Button asChild className="flex-shrink-0">
                  <a 
                    href="https://ozelbarinmahizmetleri.gsb.gov.tr/ozelyurtlar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <span>GSB'de Doğrula</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
