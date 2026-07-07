/**
 * Photo Directory Scanner
 * Bu dosyayı referans olarak kullanarak yeni fotoğrafları kolayca ekleyebilirsiniz
 */

// Fotoğraf dizini yapısı
const photoStructure = {
  rooms: {
    path: '/photos/rooms/',
    category: 'rooms',
    examples: [
      'tek-kisilik-oda-1.jpg',
      'iki-kisilik-oda-wcli.jpg',
      'uc-kisilik-oda.jpg'
    ]
  },
  building: {
    path: '/photos/building/',
    category: 'building',
    examples: [
      'bina-on-cephe.jpg',
      'giris-kapisi.jpg',
      'bina-gece.jpg'
    ]
  },
  commonAreas: {
    path: '/photos/common-areas/',
    category: 'common',
    examples: [
      'tv-salonu.jpg',
      'calisma-odasi.jpg',
      'mutfak.jpg'
    ]
  },
  facilities: {
    path: '/photos/facilities/',
    category: 'facilities',
    examples: [
      'lavabo.jpg',
      'banyo.jpg',
      'guvenlik.jpg'
    ]
  }
}

/**
 * Yeni fotoğraf eklemek için bu template'i kullanın:
 * 
 * {
 *   src: "/photos/[category]/[filename]",
 *   alt: "Fotoğraf açıklaması",
 *   title: "Fotoğraf başlığı",
 *   category: "rooms" | "building" | "common" | "facilities"
 * }
 */

// Örnek yeni fotoğraf ekleme:
const newPhotoExample = {
  src: "/photos/rooms/tek-kisilik-oda-yeni.jpg",
  alt: "Yeni tek kişilik oda fotoğrafı",
  title: "Tek Kişilik Oda - Yeni",
  category: "rooms"
}

export { photoStructure, newPhotoExample }
