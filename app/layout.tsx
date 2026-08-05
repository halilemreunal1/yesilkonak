import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import Script from "next/script"
import "./globals.css"


export const metadata: Metadata = {
  title: "Isparta Erkek Öğrenci Yurdu | Yeşilkonak — GSB Onaylı",
  description:
    "Isparta'da GSB onaylı Yeşilkonak Erkek Öğrenci Yurdu. Kahvaltı dahil, 7/24 güvenlik, WiFi, SDÜ'ye kolay ulaşım. 0542 314 52 19",
  keywords:
    "Isparta erkek öğrenci yurdu, Süleyman Demirel Üniversitesi yurdu, SDÜ yurdu, Isparta özel yurt, GSB onaylı yurt Isparta, Yeşilkonak yurt",
  authors: [{ name: "Yeşilkonak Erkek Öğrenci Yurdu" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Yeşilkonak Erkek Öğrenci Yurdu — Isparta",
    description:
      "20 yıldır 1.000+ öğrenciye ev sahipliği yaptık. Kahvaltı dahil, GSB onaylı, SDÜ yakını. Hemen ara veya ziyaret et.",
    url: "https://www.ispartayurt.org",
    siteName: "Yeşilkonak Erkek Öğrenci Yurdu",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "https://www.ispartayurt.org/yesilkonak-building.jpeg",
        width: 1200,
        height: 630,
        alt: "Yeşilkonak Erkek Öğrenci Yurdu — Isparta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeşilkonak Erkek Öğrenci Yurdu | Isparta",
    description: "Isparta'da 2006'dan beri güvenli, kahvaltılı ve GSB onaylı erkek öğrenci yurdu",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.ispartayurt.org",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Özel Yeşilkonak Yükseköğretim Erkek Öğrenci Yurdu",
  alternateName: "Yeşilkonak Erkek Öğrenci Yurdu",
  url: "https://www.ispartayurt.org",
  telephone: ["+905423145219"],
  email: "info@ispartayurt.org",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Modern Evler, 3104. Sk. No: 29",
    addressLocality: "Merkez",
    addressRegion: "Isparta",
    postalCode: "32000",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "37.789354",
    longitude: "30.546778",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "19:00",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Kahvaltı Dahil", value: true },
    { "@type": "LocationFeatureSpecification", name: "Ücretsiz WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "7/24 Güvenlik", value: true },
    { "@type": "LocationFeatureSpecification", name: "Temizlik Hizmeti", value: true },
    { "@type": "LocationFeatureSpecification", name: "Çamaşırhane", value: true },
    { "@type": "LocationFeatureSpecification", name: "Ortak Mutfak", value: true },
    { "@type": "LocationFeatureSpecification", name: "Mini Buzdolabı", value: true },
  ],
  areaServed: ["Isparta", "Süleyman Demirel Üniversitesi", "Isparta Uygulamalı Bilimler Üniversitesi"],
  foundingDate: "2006",
  slogan: "Isparta'nın En Köklü Erkek Öğrenci Yurdu",
  sameAs: ["https://www.instagram.com/ispartayurt", "https://www.facebook.com/ispartayurt"],
  image: "https://www.ispartayurt.org/yesilkonak-building.jpeg",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Yeşilkonak Erkek Öğrenci Yurdu nerede?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern Evler Mahallesi, 3104. Sk. No: 29, 32000 Merkez/Isparta adresinde hizmet vermekteyiz.",
      },
    },
    {
      "@type": "Question",
      name: "Yurt ücretlerine ne dahildir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kahvaltı, yüksek hızlı WiFi, 7/24 güvenlik, haftalık temizlik hizmeti, çamaşırhane kullanımı ve ortak mutfak kullanımı ücrete dahildir. Her odada mini buzdolabı, çalışma masası ve dolap mevcuttur.",
      },
    },
    {
      "@type": "Question",
      name: "Süleyman Demirel Üniversitesi'ne uzaklığı nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yurdumuz Isparta merkezde yer almaktadır. SDÜ kampüsüne otobüs ile 15-20 dakika mesafededir. Yurdun önünde otobüs durağı mevcuttur.",
      },
    },
    {
      "@type": "Question",
      name: "GSB onaylı bir yurt mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, yurdumuz Gençlik ve Spor Bakanlığı tarafından resmi olarak onaylı ve düzenli olarak denetlenmektedir. GSB sisteminde Özel Yeşilkonak Yükseköğretim Erkek Öğrenci Yurdu adıyla kayıtlıdır.",
      },
    },
    {
      "@type": "Question",
      name: "Kaç tür oda seçeneği var?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "4 farklı oda tipimiz mevcuttur: 1 Kişilik WC'li Oda, 1 Kişilik Ortak Lavabolu Oda, 2 Kişilik WC'li Oda ve 2 Kişilik Ortak Lavabolu Oda. Tüm odalar çalışma masası, dolap ve mini buzdolabı ile donatılmıştır.",
      },
    },
    {
      "@type": "Question",
      name: "Yurtta ortak mutfak var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, tüm sakinlerimizin özgürce kullanabileceği tam donanımlı ortak bir mutfak bulunmaktadır.",
      },
    },
    {
      "@type": "Question",
      name: "Rezervasyon ve kayıt nasıl yapılır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rezervasyon için 0542 314 52 19 numaralı telefonu arayabilir, WhatsApp üzerinden iletişime geçebilir veya yurdumuzu haftanın her günü 08:00-19:00 saatleri arasında ziyaret edebilirsiniz. Oda görmeden karar vermenizi önermiyoruz — sizi bekliyoruz!",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Ads */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-725478637" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-725478637');
          `}
        </Script>

        {/* LocalBusiness Schema — inline for static export compatibility */}
        <script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* FAQPage Schema — inline for static export compatibility */}
        <script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}

        {/* Google Ads Conversion Event */}
        <Script id="google-ads-conversion" strategy="lazyOnload">
          {`
            gtag('event', 'ads_conversion_Ki_i_1', {});
          `}
        </Script>
      </body>
    </html>
  )
}
