# Fotoğraf Dizini Kullanım Kılavuzu

Bu dizinde yurt fotoğraflarınızı düzenli bir şekilde saklayabilirsiniz.

## Dizin Yapısı

\`\`\`
public/photos/
├── rooms/          # Oda fotoğrafları (tek kişilik, iki kişilik, üç kişilik)
├── building/       # Bina dış görünümü ve yapı fotoğrafları
├── common-areas/   # Ortak alanlar (salon, çalışma odası, mutfak vb.)
└── facilities/     # Tesisler (lavabo, banyo, güvenlik vb.)
\`\`\`

## Fotoğraf Ekleme Talimatları

### 1. Fotoğraf Ekleme
- Yeni fotoğrafları uygun kategoriye göre ilgili klasöre kopyalayın
- Fotoğraf formatları: .jpg, .jpeg, .png, .webp desteklenir
- Önerilen boyut: En az 800x600 piksel, maksimum 2MB

### 2. Dosya Adlandırma Önerileri
**Odalar için:**
- `tek-kisilik-oda-1.jpg`
- `iki-kisilik-oda-wc-li-2.jpg`
- `uc-kisilik-oda-ortak-lavabo.jpg`

**Bina için:**
- `bina-on-cephe.jpg`
- `bina-gece-goruntumu.jpg`
- `giris-kapisi.jpg`

**Ortak Alanlar için:**
- `tv-salonu.jpg`
- `calisma-odasi.jpg`
- `yemek-salonu.jpg`

**Tesisler için:**
- `lavabo-genel.jpg`
- `mutfak.jpg`
- `guvenlik-kamerasi.jpg`

## Fotoğrafları Website'ye Ekleme

Yeni fotoğraf ekledikten sonra, bu fotoğrafları website galerisine eklemek için:

1. `components/gallery-section.tsx` dosyasını açın
2. `galleryImages` dizisine yeni fotoğraf bilgilerini ekleyin:

\`\`\`javascript
{
  src: "/photos/rooms/yeni-foto.jpg",
  alt: "Fotoğraf açıklaması",
  title: "Fotoğraf başlığı",
  category: "rooms" // rooms, building, common, facilities
}
\`\`\`

## İpuçları

- Fotoğrafları eklemeden önce boyutlarını optimize edin
- Net ve iyi aydınlatılmış fotoğraflar kullanın
- Her kategoride en az 2-3 fotoğraf bulundurun
- Dosya adlarında Türkçe karakter yerine İngilizce karakter kullanın

## Yardım İçin

Fotoğraf ekleme konusunda yardıma ihtiyacınız olursa, bu talimatları takip edin veya teknik destek alın.
