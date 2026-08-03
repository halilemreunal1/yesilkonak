"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  title: string
  category: string
}

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
    alt: "İki kişilik. Banyo tuvaleti 3 oda, 5 kişiyle sınırlı ortak kullanımdır. Kendi balkonu vardır.",
    title: "Tip-2 İki Kişilik Öğrenci Odası",
    category: "rooms"
  },
  {
    src: "/photos/rooms/tip-3_oda.jpg",
    alt: "İki kişilik. Banyo tuvaleti içinde, kendi balkonu vardır.",
    title: "Tip-3 İki Kişilik Öğrenci Odası",
    category: "rooms"
  },
  {
    src: "/photos/rooms/tip-4_oda.jpg",
    alt: "Tek kişilik. Banyo tuvaleti 3 oda, 5 kişiyle sınırlı ortak kullanımdır. Ortak balkona tabidir.",
    title: "Tip-4 Tek Kişilik Öğrenci Odası",
    category: "rooms"
  },
  {
    src: "/photos/rooms/tip-5_oda.jpg",
    alt: "Tek kişilik. Banyo tuvaleti 3 oda, 5 kişiyle sınırlı ortak kullanımdır. Ortak balkona tabidir.",
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
    alt: "Öğrenciler İçin Çok Amaçlı Serbest Ortak Alanı",
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
    alt: "Öğrencilerin hava almak, sohbet muhabbet için kullanabileceği avlumuz.",
    title: "Avlu",
    category: "common"
  },
  {
    src: "/bahce_on.jpg",
    alt: "Öğrencilerin dilediği gibi çıkabildiği, zaman zaman mangal etkinliği yapılan bahçemiz.",
    title: "Bahçe",
    category: "common"
  },
  {
    src: "/bahce_kose_2.jpg",
    alt: "Öğrencilerin dilediği gibi çıkabildiği, zaman zaman mangal etkinliği yapılan bahçemiz.",
    title: "Bahçe",
    category: "common"
  },
]

// The 4 featured thumbnails shown in the preview strip
const FEATURED_INDICES = [0, 1, 7, 10]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

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
    <section id="gallery" className="py-14 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Galeri</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Yurdumuzdaki yaşam alanları, odalar ve sosyal tesisleri keşfedin.
          </p>
        </div>

        {/* Featured 4-thumbnail preview strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {FEATURED_INDICES.map((imgIdx, i) => {
            const image = galleryImages[imgIdx]
            return (
              <button
                key={imgIdx}
                onClick={() => setSelectedImage(imgIdx)}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`${image.title} fotoğrafını büyüt`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-end">
                  <div className="w-full px-3 py-2 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-xs font-semibold truncate">{image.title}</p>
                  </div>
                </div>
                {/* Small expand icon */}
                <div className="absolute top-2 right-2 w-7 h-7 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Images className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            )
          })}
        </div>

        {/* "See all photos" button */}
        <div className="flex justify-center">
          <button
            onClick={() => setSelectedImage(0)}
            className="inline-flex items-center gap-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-md hover:scale-105"
          >
            <Images className="w-4 h-4" />
            Tüm Fotoğrafları Gör ({galleryImages.length})
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full h-full flex flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label="Kapat"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Photo counter */}
            <div className="absolute top-4 left-4 z-10 bg-black/50 rounded-full px-3 py-1 text-white text-sm font-medium">
              {selectedImage + 1} / {galleryImages.length}
            </div>

            {/* Prev button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label="Önceki fotoğraf"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label="Sonraki fotoğraf"
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

            {/* Caption — desktop */}
            <div className="absolute bottom-4 left-16 right-16 bg-black/55 rounded-lg p-4 text-white hidden md:block">
              <h3 className="text-base font-semibold">{galleryImages[selectedImage].title}</h3>
              <p className="text-sm text-gray-300 mt-0.5">{galleryImages[selectedImage].alt}</p>
            </div>

            {/* Caption — mobile */}
            <div className="md:hidden mt-4 bg-black/55 rounded-lg p-3 text-white mx-4">
              <h3 className="text-sm font-semibold text-center">{galleryImages[selectedImage].title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
