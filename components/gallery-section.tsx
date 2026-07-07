"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  title: string
  category: string
}

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const galleryImages: GalleryImage[] = [
    {
      src: "/yesilkonak-building.jpeg",
      alt: "Yeşilkonak Erkek Öğrenci Yurdu Binası",
      title: "Yurt Binası",
      category: "building"
    },
    {
      src: "/photos/rooms/tip-1_oda.jpg",
      alt: "Tek kişilik banyo içinde balkonlu öğrenci odası",
      title: "Tip-1 Tek Kişilik Oda",
      category: "rooms"
    },
    {
       src: "/photos/rooms/tip-2_oda.jpg",
      alt: "İki kişilik. Banyo tuvaleti 3 oda, 5 kişiyle sınırlı ortak kullanımdır.Kendi balkonu vardır..",
      title: "Tip-2 İki Kişilik Öğrenci Odası",
      category: "rooms"
    },
    {
       src: "/photos/rooms/tip-3_oda.jpg",
      alt: "İki kişilik. Banyo tuvaleti içinde, kendi balkonu vardır..",
      title: "Tip-3 İki Kişilik Öğrenci Odası",
      category: "rooms"
    },
    {
       src: "/photos/rooms/tip-4_oda.jpg",
      alt: "Tek kişilik. Banyo tuvaleti 3 oda, 5 kişiyle sınırlı ortak kullanımdır.Ortak balkona tabidir.",
      title: "Tip-4 Tek Kişilik Öğrenci Odası",
      category: "rooms"
    },
    {
       src: "/photos/rooms/tip-5_oda.jpg",
      alt: "Tek kişilik. Banyo tuvaleti 3 oda, 5 kişiyle sınırlı ortak kullanımdır.Ortak balkona tabidir.",
      title: "Tip-5 Tek Kişilik Öğrenci Odası",
      category: "rooms"
    },
    {
      src: "/photos/rooms/tip-6_odare.png",
      alt: "İki kişilik iki odalı bir seçenek. Banyo tuvaleti içinde ortak balkona tabi.",
      title: "Tip-6 İki Kişilik Öğrenci Odası",
      category: "rooms"
    },
    {
      src: "/ogrenci_mutfak_2.jpg",
      alt: "Öğrencilerin dilediğince yemek yapabileceği öğrenci mutfağımız",
      title: "Öğrenci Mutfağı",
      category: "common"
    },

    {
      src: "/serbest_calisma_oda.jpg",
      alt: "Öğrenciler İçin Çok Amaçlı Serbest Ortak Alanı ",
      title: "Ortak Çalışma Alanı",
      category: "common"
    },
    {
      src: "/yemekhane.jpg",
      alt: "Öğrencilerin kahvaltı edeceği yemekhanemiz.",
      title: "Yemekhane",
      category: "common"
    },

    {
      src: "/avlu.jpg",
      alt: "Öğrencilerin hava almak, sohbet muhabbet için kullanabileceği avlumuz. ",
      title: "Avlu",
      category: "common"
    },
    {
      src: "/bahce_on.jpg",
      alt: "Öğrencilerin dilediği gibi çıkabildiği zaman zaman mangal etkinliği yapılan, ağaçlarımızdan taze meyve alıp yiyebildiği bahçemiz. ",
      title: "Bahçe",
      category: "common"
    },
    {
      src: "/bahce_kose_2.jpg",
      alt: "Öğrencilerin dilediği gibi çıkabildiği zaman zaman mangal etkinliği yapılan, ağaçlarımızdan taze meyve alıp yiyebildiği bahçemiz. ",
      title: "Bahçe",
      category: "common"
    },

  ]

  const categories = [
    { key: "all", label: "Tümü" },
    { key: "building", label: "Bina" },
    { key: "rooms", label: "Odalar" },
    { key: "common", label: "Ortak Alanlar" }
  ]

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openModal = (index: number) => {
    const actualIndex = galleryImages.findIndex(img => img.src === filteredImages[index].src)
    setSelectedImage(actualIndex)
  }

  const closeModal = () => setSelectedImage(null)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Galeri</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Yurdumuzdaki yaşam alanları, odalar ve sosyal tesisleri keşfedin.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1 bg-background rounded-lg shadow-sm">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.src}
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Desktop overlay - hidden on mobile */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 items-center justify-center hidden md:flex">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm">Büyütmek için tıklayın</p>
                  </div>
                </div>
              </div>
              {/* Mobile title - shown below image on mobile only */}
              <div className="p-3 md:hidden">
                <h3 className="text-sm font-semibold text-center text-foreground">{image.title}</h3>
                <p className="text-xs text-muted-foreground text-center mt-1">Büyütmek için tıklayın</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full h-full flex flex-col justify-center">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              {/* Image info - responsive positioning */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 rounded-lg p-4 text-white hidden md:block">
                <h3 className="text-lg font-semibold">{galleryImages[selectedImage].title}</h3>
                <p className="text-sm text-gray-300">{galleryImages[selectedImage].alt}</p>
              </div>
              
              {/* Mobile info - below image */}
              <div className="md:hidden mt-4 bg-black/50 rounded-lg p-3 text-white mx-4">
                <h3 className="text-base font-semibold text-center">{galleryImages[selectedImage].title}</h3>
                <p className="text-sm text-gray-300 text-center mt-1">{galleryImages[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
