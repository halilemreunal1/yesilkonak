import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "Yeşilkonak Erkek Öğrenci Yurdu | Isparta'da Güvenli Konaklama",
  description: "Isparta'da öğrenci yurdu arıyorsanız, Yeşilkonak Erkek Öğrenci Yurdu modern imkanlar, güvenli ortam ve uygun fiyatlarla hizmet veriyor. 1 ve 2 kişilik odalar mevcut.",
  keywords: "Isparta öğrenci yurdu, erkek öğrenci yurdu, Yeşilkonak yurt, öğrenci konaklama, Isparta yurt, üniversite yurdu",
  authors: [{ name: "Yeşilkonak Erkek Öğrenci Yurdu" }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Yeşilkonak Erkek Öğrenci Yurdu | Isparta",
    description: "Modern imkanlar, güvenli ortam ve uygun fiyatlarla öğrenci konaklama hizmeti",
    url: "https://yesilkonakerkekogreniyurdu.org",
    siteName: "Yeşilkonak Erkek Öğrenci Yurdu",
    type: "website",
    locale: "tr_TR"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeşilkonak Erkek Öğrenci Yurdu",
    description: "Isparta'da güvenli ve konforlu öğrenci konaklama"
  },
  robots: "index, follow",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-725478637"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-725478637');
          `}
        </Script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        
        {/* Google Ads Conversion Event */}
        <Script id="google-ads-conversion" strategy="lazyOnload">
          {`
            gtag('event', 'ads_conversion_Ki_i_1', {
              // event_parameters can be added here
            });
          `}
        </Script>
      </body>
    </html>
  )
}
