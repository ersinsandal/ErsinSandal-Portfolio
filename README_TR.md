<p align="center">
  <img src="public/sitelogo.png" alt="Ersin Sandal Logo" width="180" />
</p>

<h1 align="center">Ersin Sandal — Portfolyo ve Dijital Ekosistem</h1>

<p align="center">
  <strong>Resmî Kişisel Web Sitesi, Girişim Vitrini ve Yönetici Portfolyosu</strong><br />
  <em>React 19, Vite, Framer Motion ve Kurumsal Modern Web Mimarisi ile Geliştirilmiştir.</em>
</p>

<p align="center">
  <a href="README.md">
    <img src="https://img.shields.io/badge/DOCUMENTATION-CLICK%20FOR%20ENGLISH-0052cc?style=for-the-badge&logo=readme&logoColor=white" alt="English Documentation" />
  </a>
</p>

<p align="center">
  <a href="https://ersinsandal.com" target="_blank"><img src="https://img.shields.io/badge/Canl%C4%B1%20Domain-ersinsandal.com-9B111E?style=flat-square&logo=google-chrome&logoColor=white" alt="Domain"></a>
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-8.2-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Framer_Motion-13.1-FF0055?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion">
  <img src="https://img.shields.io/badge/Lisans-Telif%20Hakk%C4%B1%20%2F%20MIT-brightgreen?style=flat-square" alt="Lisans">
</p>

---

## 📑 İçindekiler Tablosu

1. [Yönetici Özeti](#yönetici-özeti)
2. [Çekirdek Mimari ve Mühendislik Standartları](#çekirdek-mimari-ve-mühendislik-standartları)
3. [Sayfa Yapısı ve Sistem Genel Bakışı](#sayfa-yapısı-ve-sistem-genel-bakışı)
4. [Öne Çıkan Projeler Vitrini](#öne-çıkan-projeler-vitrini)
5. [Teknoloji Yığını](#teknoloji-yığını)
6. [Güvenlik, Gizlilik ve Veri Bütünlüğü](#güvenlik-gizlilik-ve-veri-bütünlüğü)
7. [Kurulum ve Yerel Geliştirme](#kurulum-ve-yerel-geliştirme)
8. [Üretim Derlemesi ve CI/CD Hattı](#üretim-derlemesi-ve-cicd-hattı)
9. [Tasarım Felsefesi ve UI/UX İlkeleri](#tasarım-felsefesi-ve-uiux-ilkeleri)
10. [Lisans ve Fikri Mülkiyet](#lisans-ve-fikri-mülkiyet)

---

## 💡 Yönetici Özeti

Bu repo; Teknoloji Girişimcisi, Siyasetçi, Medya Yöneticisi, Bilgisayar Mühendisi ve **SliferSoft** Kurucu & CEO'su **Ersin Sandal**'ın resmî portfolyosunun ve çok yönlü girişim ekosisteminin kaynak kodlarını içerir.

Uygulama; yalnızca saf bir yazılım vitrini değil, dört ana eksendeki stratejik ve operasyonel liderliği yansıtacak şekilde ultra hızlı, modern bir Tek Sayfa Uygulaması (SPA) olarak geliştirilmiştir:
- **Teknoloji Girişimciliği ve Ürün Liderliği:** SliferSoft ve ATE Digital Arena gibi bağımsız teknoloji yapılarını kurma; üst düzey ürün vizyonunu çalışan, ölçeklenebilir dijital sistemlere dönüştürme.
- **Siyaset, Dijital Örgütlenme ve Kamuoyu:** Dijital gençlik hareketleri, yeni nesil kamuoyu araştırma ve etkileşim sistemleri (A******t, 36.000+ kitle) ve sivil toplum etki platformları inşa etme vizyonu.
- **Medya, İçerik ve Büyüme Stratejisi:** Organik kitle büyütme mekanizmaları, sosyal medya içerik ekosistemleri (10.000+ kitle) ve bağımsız e-spor medya markası operasyonları.
- **İleri Düzey Yazılım ve Sistem Mühendisliği:** Sıfır-Bilgi Kanıtları (ZKP Groth16), kriptografik mekânsal ağlar (NaviSecret), Windows DPAPI şifrelemeli masaüstü yazılımları (StorySepeti) ve deneysel siber güvenlik araştırmaları (LuckyLick).

Canlı yayındaki sisteme **[ersinsandal.com](https://ersinsandal.com)** adresinden erişilebilir.

---

## 🏛️ Çekirdek Mimari ve Mühendislik Standartları

Kod tabanı temiz kod (clean code) prensiplerine, sorumlulukların ayrılığına (separation of concerns) ve modüler reaktif tasarıma sıkı sıkıya bağlıdır:

```
ErsinSandal-Portfolio/
├── public/
│   ├── .htaccess                   # SPA istemci yönlendirmesi için Apache rewrite kuralları
│   ├── favicon.svg                 # Vektörel tarayıcı sekme ikonu
│   ├── icons.svg                   # SVG sprite koleksiyonu
│   └── sitelogo.png                # Yüksek çözünürlüklü marka logosu
│
├── src/
│   ├── assets/                     # Yüksek çözünürlüklü medya, proje logoları ve profil görselleri
│   ├── components/                 # Yeniden kullanılabilir arayüz ve yerleşim bileşenleri
│   │   ├── BackgroundParticles.jsx # tsParticles tuval parçacık simülasyonu
│   │   ├── CustomCursor.jsx        # Akıcı özel imleç takip mekanizması
│   │   ├── Footer.jsx / .css       # Semantik alt bilgi ve profesyonel bağlantılar
│   │   ├── Navbar.jsx / .css       # Sayfa tepesine yumuşak kaydıran cam efektli gezinme çubuğu
│   │   ├── PageHeader.jsx / .css   # Standart tipografi ve sayfa başlığı sarmalayıcısı
│   │   └── ScrollToTop.jsx         # Sayfa geçişlerinde bakış alanını sıfırlayan bileşen
│   │
│   ├── data/
│   │   └── projectsData.jsx        # Tüm projelerin tek doğruluk kaynağı (SSOT) veri modeli
│   │
│   ├── pages/                      # Üst düzey sayfa modülleri ve yönlendirilen görünümler
│   │   ├── About.jsx               # Mühendislik vizyonu, felsefe ve biyografi
│   │   ├── Contact.jsx             # Sunucusuz AJAX iletişim portalı
│   │   ├── Experience.jsx          # Kronolojik kariyer ve girişimcilik zaman çizelgesi
│   │   ├── Expertise.jsx           # Teknik yetkinlik matrisi ve uzmanlık alanları
│   │   ├── Home.jsx / Home.css     # Karşılama bölümü, dinamik unvanlar ve portre vitrini
│   │   ├── Media.jsx               # Başarılar, hackathonlar ve basında yer alan haberler
│   │   ├── ProjectDetail.jsx/.css  # Proje bazlı detaylı teknik vaka analizleri
│   │   └── Projects.jsx            # Kategorize edilmiş animasyonlu proje kartları
│   │
│   ├── App.jsx                     # Framer Motion rota geçişlerini yöneten ana sarmalayıcı
│   ├── main.jsx                    # React 19 DOM giriş noktası
│   ├── index.css                   # Global tasarım belirteçleri ve CSS değişkenleri
│   └── App.css                     # Uygulama geneli yardımcı sınıflar ve kaydırma çubuğu
│
├── .gitignore                      # Güvenlik öncelikli git dışlama manifestosu
├── index.html                      # SEO ve mobil uyumlu HTML5 ana kabuğu
├── package.json                    # Bağımlılıklar ve derleme komutları
└── vite.config.js                  # Vite derleyici ve optimizasyon yapılandırması
```

---

## 🧭 Sayfa Yapısı ve Sistem Genel Bakışı

### 1. Ana Sayfa (`/`)
- Bilgisayar Mühendisi, Teknoloji Girişimcisi, SliferSoft Kurucu & CEO unvanlarını sergileyen dinamik hero alanı.
- Çok katmanlı geometrik hatlarla çerçevelenmiş portre vitrini.

### 2. Hakkımda (`/hakkimda`)
- Mühendislik felsefesi: Sistem analizi, kullanıcı odaklı ürün stratejisi ve ölçeklenebilir kod mimarisinin kesişimi.
- Akademik altyapı ve çok disiplinli araştırma vizyonu.

### 3. Deneyim (`/deneyim`)
- Kurulan teknoloji şirketleri, girişim liderlikleri ve kurumsal yazılım stajlarını (ARGEYA) içeren ayrıntılı kronoloji.

### 4. Projeler & Vizyon (`/projeler`)
- Ticari ürünler, açık kaynak projeler, deneysel güvenlik araştırmaları ve akademik kıyaslama testlerini içeren kapsamlı vitrin.
- Proje durumuna göre dinamik rozetler (`Aktif`, `Geliştirme`, `Tamamlandı`, `Gizli Proje`).

### 5. Proje Detayı (`/projeler/:id`)
- Her proje için teknik inceleme ve mimari döküm.
- Proje türü, platform, rol, kaynak kod bağlantısı ve tam teknoloji yığınını gösteren **Detail Meta Grid**.

### 6. Uzmanlık (`/uzmanlik`)
- Yazılım Mühendisliği, Dağıtık Sistemler, Masaüstü & Tersine Mühendislik, Makine Öğrenmesi ve Bulut Altyapısı yetkinlik matrisi.

### 7. Medya & Başarılar (`/medya`)
- Dereceye girilen hackathonlar, girişimcilik yarışmaları, basında çıkan haberler ve akademik başarılar.

### 8. İletişim (`/iletisim`)
- Sayfa yenilenmesine gerek kalmadan çalışan, Formspree AJAX tabanlı güvenli mesajlaşma arayüzü.

---

## 🚀 Öne Çıkan Projeler Vitrini

| Proje | Kategori | Öne Çıkan Teknolojiler | Kısa Açıklama |
| :--- | :--- | :--- | :--- |
| **[SliferSoft](https://slifersoft.com)** | Teknoloji Şirketi & Stüdyo | React, Next.js, Spring Boot, Java | Özgün dijital ürünler ve ölçeklenebilir yazılım sistemleri geliştiren bağımsız şirket. |
| **[NaviSecret](https://github.com/ersinsandal/NaviSecret)** | Kriptografik Mekânsal Ağ | React 19, Fastify, Circom (ZKP), PostgreSQL, Docker | 20m geofence kilitli AES-256-GCM kapsülleri ve Groth16 ZK konum kanıtları sunan mekânsal sosyal ağ. |
| **[StorySepeti](https://github.com/ersinsandal/StorySepeti)** | Masaüstü Yazılım & Güvenlik | Python 3.10+, CustomTkinter, FFmpeg, Windows DPAPI | DASH akışlarını kayıpsız birleştiren ve DPAPI şifreleme kasasına sahip 1080p+ Instagram arşivleyicisi. |
| **[SliferJump 2.0](https://github.com/ersinsandal/SliferJump)** | 2D Oyun Motoru & Web Audio | Vanilla JS, HTML5 Canvas, p5.js, Web Audio API | Newton fiziği, anti-camping dinamik lav mekaniği ve prosedürel osilatör sentezine sahip 2D oyun motoru. |
| **[LuckyLick](https://github.com/ersinsandal/LuckyLick-showcase)** | Siber Güvenlik Araştırması | Python, DoH, TLS SNI Enjeksiyonu, HTTP 206 Akışı | VPN olmadan DNS-over-HTTPS ve yerel ters vekil üzerinden ISP sansürünü aşan deneysel siber güvenlik çalışması. |
| **[ATE Digital Arena](https://github.com/ersinsandal/Alanya-Taudra-Esports)** | Rekabetçi E-Spor Platformu | Next.js 15, React 19, Tailwind CSS v4, Prisma, PostgreSQL | ATE ID sporcu pasaportu, turnuva motoru ve canlı denetim kütükleri barındıran tam teşekküllü dijital espor platformu. |
| **Site Defteri** | Mülk Yönetim Sistemi | Spring Boot, Next.js, React, MySQL | Apartman ve sitelerin finansal ve operasyonel süreçlerini tek merkezde toplayan çok modüllü web sistemi. |
| **B2X LoRa Mesh** | Nesnelerin İnterneti & Donanım | LoRa, C++, Gömülü Sistemler | Düşük güç tüketimiyle uzun mesafeli kablosuz veri aktarımı sağlayan IoT protokol prototipi. |
| **Bilgisayarlı Görü Karşılaştırması** | Makine Öğrenmesi Araştırması | Python, Scikit-Learn, SVM, HOG, LBP | Ham piksel, HOG ve LBP özelliklerinin görüntü sınıflandırma performansını ölçen deneysel kıyaslama çalışması. |
| **İlanZeka** | Kurumsal Yazılım | Kurumsal Sistem Mimarisi | ARGEYA bünyesindeki yazılım geliştirme stajı kapsamında yürütülen kurumsal proje deneyimi. |

---

## 🛠️ Teknoloji Yığını

### Ön Yüz ve Derleme Katmanı
- **Çekirdek Kütüphane:** [React 19](https://react.dev/) (Eşzamanlı render, optimize durum yönetimi)
- **Derleme Motoru:** [Vite 8](https://vitejs.dev/) (Anlık HMR, ES modül yerel paketleme)
- **Yönlendirme:** [React Router v7](https://reactrouter.com/) (İstemci taraflı deklaratif yönlendirme)
- **Animasyon ve Fizik:** [Framer Motion 13](https://www.framer.com/motion/) (Donanım hızlandırmalı geçişler)
- **Parçacık Motoru:** [react-tsparticles](https://particles.js.org/) & `tsparticles-slim`
- **İkonografi:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

### Tasarım Sistemi
- **Saf CSS3 Modülleri:** CSS değişkenleri ve tasarım belirteçleri (`--color-primary`, `--glass-bg`).
- **Cam Efekti (Glassmorphism):** Çok katmanlı arka plan bulanıklığı (`backdrop-filter: blur(20px)`), buzlu cam kenarlıklar ve radyal gradyanlar.
- **Akıcı Duyarlı Tasarım:** 320 piksel mobil ekranlardan 4K ultra geniş monitörlere kadar `clamp()` tipografisi ile kusursuz ölçeklenme.

---

## 🔒 Güvenlik, Gizlilik ve Veri Bütünlüğü

Sitede sıfır-güven (zero-trust) ve yüksek güvenlik standartları uygulanmıştır:

1. **Sıfır Telemetri ve Takipçi:** Hiçbir reklam ağı, kullanıcı takip kodu veya izleme pikseli bulunmaz.
2. **Hassas Bilgi İzolasyonu:**
   - İstemci kodlarında hiçbir parola, özel API anahtarı veya iç ağ bilgisi yer almaz.
   - İletişim formu sunucusuz token mimarisiyle çalışır; arka uç posta sunucuları ifşa edilmez.
3. **Güçlendirilmiş `.gitignore` Politikası:** Derlenmiş dosyalar, dağıtım zip arşivleri, ortam değişkenleri (`.env*`) repoya asla eklenmez.
4. **Apache ve Rota Güvenliği:** Doğrudan URL erişimlerinde güvenlik ve tek giriş noktası sağlayan kurumsal `.htaccess` yapılandırması mevcuttur.

---

## 💻 Kurulum ve Yerel Geliştirme

### Gereksinimler
- **Node.js:** `v20.x` veya üzeri (LTS önerilir)
- **Paket Yöneticisi:** `npm` (v10+) veya `pnpm`

### Adım Adım Kurulum

1. **Repoyu klonlayın:**
   ```bash
   git clone https://github.com/ersinsandal/ErsinSandal-Portfolio.git
   cd ErsinSandal-Portfolio
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```
   *Yerel sunucu `http://localhost:5173/` adresinde anında çalışmaya başlayacaktır.*

4. **Üretim derlemesini test edin:**
   ```bash
   npm run build
   ```

5. **Derlenmiş paketi önizleyin:**
   ```bash
   npm run preview
   ```

---

## ⚖️ Lisans ve Fikri Mülkiyet

- **Kaynak Kod Mimarisi:** İnceleme ve eğitim amaçlı kullanım için [MIT Lisansı](LICENSE) kapsamındadır.
- **Kişisel İçerik, Logolar ve Marka Kimliği:** Tüm hakları saklıdır. **Ersin Sandal**, **SliferSoft**, **ATE (Alanya Taudra Esports)** markaları, logoları, portre fotoğrafları ve biyografik metinler sahibinin izni olmadan kopyalanamaz veya çoğaltılamaz.

---

<div align="center">
  <strong>© 2026 Ersin Sandal. Tüm Hakları Saklıdır.</strong><br />
  <em>Tutku ve mühendislik disipliniyle geliştirilmiştir.</em>
</div>
