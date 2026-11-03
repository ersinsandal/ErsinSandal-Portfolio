import React from 'react';
import logoSlifersoft from '../assets/slifersoft.png';
import logoAnketest from '../assets/anketest.png';
import logoVetha from '../assets/vetha.png';
import logoFloresan from '../assets/floresan.png';
import logoAte from '../assets/ate.png';
import logoNaviSecret from '../assets/navisecret.svg';
import logoStorySepeti from '../assets/storysepeti.png';
import logoSliferJump from '../assets/sliferjump.png';
import logoLuckyLick from '../assets/luckylick.png';
import logoB2X from '../assets/b2x.jpeg';
import logoIlanZeka from '../assets/ilanzeka.jpg';

export const projectsData = [
  {
    id: "slifersoft",
    title: "SliferSoft",
    logo: logoSlifersoft,
    blurLogo: false,
    subtitle: "Yazılım Şirketi ve Teknoloji Ürünleri Geliştirme Yapısı",
    category: "Teknoloji Şirketi",
    shortDesc: "Yazılım ürünleri ve ölçeklenebilir dijital sistemler geliştiren teknoloji şirketi.",
    status: "Aktif",
    audience: null,
    owner: null,
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Teknoloji şirketi</div>
          <div className="meta-item"><span className="meta-label">Kuruluş:</span> Nisan 2025</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Aktif</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Kurucu & CEO</div>
          <div className="meta-item"><span className="meta-label">Çalışma Alanı:</span> Yazılım • Dijital Ürünler • Ürün Stratejisi • Teknoloji Girişimciliği</div>
          <div className="meta-item"><span className="meta-label">Resmî Site:</span> <a href="https://slifersoft.com" target="_blank" rel="noreferrer">slifersoft.com</a></div>
        </div>

        <h2>SliferSoft Nedir?</h2>
        <p>SliferSoft, yazılım tabanlı ürünler, internet platformları ve teknoloji çözümleri geliştirmek amacıyla kurduğum teknoloji şirketidir.</p>
        <p>Şirket klasik anlamda yalnızca müşterilerden proje alıp yazılım teslim eden bir yazılım ajansı olarak konumlandırılmamaktadır.</p>
        <p>Temel vizyon; belirli kullanıcı problemlerini çözebilecek, bağımsız marka kimliğine sahip, ölçeklenebilir ve uzun vadede kendi kullanıcı ekosistemini oluşturabilecek <strong>özgün dijital ürünler geliştirmektir.</strong></p>
        <p>Bu nedenle SliferSoft içerisinde yazılım geliştirme süreci, ürün yönetiminden ayrı düşünülmez.</p>
        <p>Her proje;</p>
        <blockquote>Problem Tanımlama → Kullanıcı Analizi → Ürün Gereksinimleri → Sistem Tasarımı → Arayüz Tasarımı → Yazılım Geliştirme → Test → Yayına Alma → Ölçümleme → İyileştirme</blockquote>
        <p>döngüsü içerisinde değerlendirilir.</p>

        <h2>Ne Üretiyor?</h2>
        <p>SliferSoft’un temel üretim alanları:</p>
        <ul>
          <li>Web tabanlı yazılım sistemleri</li>
          <li>Yönetim panelleri</li>
          <li>Kullanıcı hesap altyapısına sahip dijital platformlar</li>
          <li>Veri tabanı merkezli kurumsal uygulamalar</li>
          <li>Mobil veya mobil uyumlu dijital ürünler</li>
          <li>Yapay zekâ araçlarıyla desteklenen yeni nesil sistemler</li>
          <li>Belirli sektör problemlerine yönelik özgün yazılım ürünleri</li>
        </ul>

        <h2>Teknik Yaklaşım</h2>
        <p>SliferSoft bünyesindeki projelerde mümkün olduğunca <strong>modüler ve katmanlı yazılım mimarileri</strong> tercih edilmektedir.</p>
        <p>Bir sistemin;</p>
        <ul>
          <li>kullanıcı arayüzü,</li>
          <li>sunucu tarafı iş mantığı,</li>
          <li>veri erişim katmanı,</li>
          <li>kimlik doğrulama,</li>
          <li>yetkilendirme,</li>
          <li>veri tabanı,</li>
          <li>harici servis bağlantıları</li>
        </ul>
        <p>birbirinden mantıksal olarak ayrılabilecek biçimde tasarlanması hedeflenmektedir. Bu yaklaşım sistemlerin ilerleyen aşamalarda daha kolay geliştirilmesini ve yeni modüller eklenmesini sağlar.</p>

        <h2>Kullanılan Teknolojiler</h2>
        <p>Projeye göre değişmekle birlikte ekosistemde kullanılan başlıca teknolojiler:</p>
        <ul>
          <li>Java, Spring Boot, JavaScript, React, Next.js</li>
          <li>MySQL, SQL</li>
          <li>REST tabanlı servis mimarileri</li>
          <li>HTML, CSS, Git tabanlı sürüm kontrol süreçleri</li>
          <li>Yapay zekâ destekli yazılım geliştirme araçları</li>
        </ul>

        <h2>Yapay Zekâ Destekli Geliştirme</h2>
        <p>SliferSoft’un çalışma yaklaşımının önemli parçalarından biri yapay zekâ araçlarının geliştirme döngüsüne entegre edilmesidir.</p>
        <p>Yapay zekâ; ürün araştırması, rakip analizi, teknik araştırma, gereksinim dokümantasyonu, arayüz prototipleme, yazılım üretimi, kod inceleme, hata analizi, test senaryoları, teknik dokümantasyon gibi süreçlerin hızlandırılması amacıyla kullanılmaktadır.</p>
        <p>Buradaki amaç yazılım geliştirme sürecini tamamen otomatikleştirmek değil; insan tarafından oluşturulan ürün stratejisinin daha kısa sürede çalışan prototiplere dönüştürülmesini sağlamaktır.</p>

        <h2>Benim Rolüm</h2>
        <p>SliferSoft içerisinde doğrudan sorumluluk üstlendiğim alanlar:</p>
        <ul>
          <li>şirket vizyonu, ürün fikirlerinin oluşturulması, ürün seçimi,</li>
          <li>proje kapsamının belirlenmesi, ürün gereksinimlerinin hazırlanması,</li>
          <li>geliştirme önceliklendirmesi, ekip koordinasyonu,</li>
          <li>marka stratejisi, ürün konumlandırması, kullanıcı deneyimi kararları,</li>
          <li>yapay zekâ destekli geliştirme süreçleri, uzun vadeli ürün yol haritasıdır.</li>
        </ul>
      </>
    )
  },
  {
    id: "sliferjump",
    title: "SliferJump 2.0",
    logo: logoSliferJump,
    blurLogo: false,
    subtitle: "2D Dikey Platformer Oyun Motoru ve Yükselen Lav Simülasyonu",
    category: "Oyun Motoru & Web Audio",
    shortDesc: "Newton fiziği, dinamik lav mekaniği, prosedürel platform üretimi ve Web Audio API osilatör sentezine sahip 2D dikey platformer oyunu.",
    status: "Tamamlandı / Açık Kaynak",
    audience: null,
    owner: "SliferSoft",
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> 2D Oyun Motoru & Web Audio Sentezleyici</div>
          <div className="meta-item"><span className="meta-label">Platform:</span> Web (PWA) • Mobil (Capacitor Android & iOS)</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Tamamlandı / MIT Lisansı</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Oyun Motoru Mimarı & Geliştirici</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> Oyun Fiziği • Prosedürel Üretim • Web Audio API • Canvas Render</div>
          <div className="meta-item"><span className="meta-label">Kaynak Kodu:</span> <a href="https://github.com/ersinsandal/SliferJump" target="_blank" rel="noreferrer">github.com/ersinsandal/SliferJump</a></div>
          <div className="meta-item" style={{ gridColumn: '1 / -1' }}><span className="meta-label">Teknoloji Yığını:</span> Vanilla JavaScript • HTML5 Canvas • p5.js • Web Audio API • Capacitor • PWA Service Worker</div>
        </div>

        <h2>SliferJump 2.0 Nedir?</h2>
        <p>SliferJump 2.0, ağır oyun motorlarına (Unity, Unreal vb.) ihtiyaç duymadan, saf Vanilla JavaScript ve HTML5 Canvas üzerinde yüksek performansla çalışacak şekilde sıfırdan mimarilendirilmiş 2D dikey platformer oyunudur.</p>
        <p>Modüler bileşen tabanlı tasarımı; fizik hesaplamaları, girdi yönetimi, varlık güncellemeleri, tuval çizimi ve ses sentezini birbirinden bağımsız katmanlarda yürütür.</p>

        <h2>Fizik ve Matematiksel Model</h2>
        <ul>
          <li><strong>Newton Tipi Kinematik ve Yerçekimi Entegrasyonu:</strong> Karakter yatay eksende sabit hız ve yumuşak ekran sarma (screen wrapping) ile hareket ederken, dikey eksen Δvy = g · Δt denklemiyle yerçekimini entegre eder.</li>
          <li><strong>Dinamik Bakış Alanı Kaydırma (Viewport Scrolling):</strong> Yüzen nokta hassasiyet kaybı yaşamadan sonsuz dikey tırmanışı sürdürmek için kamera eşik değerini aştığında tüm sahne varlıkları aşağı ötelenir.</li>
          <li><strong>Akıllı Anti-Camping Dinamik Lav Sistemi:</strong> Oyuncunun altına yerleştirilen dinamik lav, oyuncunun tek bir platformda 3'ten fazla kez zıplaması durumunda hızlanarak platformu eritir ve pasif beklemeyi cezalandırır.</li>
          <li><strong>Orichalcos Kara Delik Tekilliği:</strong> r(t) = r₀ · e⁻ᵏᵗ spiral çekim fonksiyonu ile oyuncuyu içine çeken yerçekimsel karadelik tehlikesi.</li>
        </ul>

        <h2>Hibrit Web Audio Sentez Mimarisi</h2>
        <p>Oyundaki sesler yalnızca hazır ses dosyalarından ibaret değildir. <code>SoundManager</code> mimarisi, gerçek zamanlı Web Audio API osilatörleri, kazanç zarfları (gain envelopes) ve gürültü düğümleri (noise nodes) kullanarak kristal kalkan kırılmaları, lav kabarcıkları ve meteor uğultularını sıfır gecikmeyle prosedürel olarak sentezler.</p>
      </>
    )
  },
  {
    id: "ate",
    title: "Alanya Taudra E-Sports (ATE)",
    logo: logoAte,
    blurLogo: false,
    subtitle: "Bağımsız E-Spor Markası & ATE Digital Arena Platformu",
    category: "Bağımsız E-Spor Markası & Dijital Arena",
    shortDesc: "Alanya merkezli e-spor organizasyonu ve Next.js 15 tabanlı rekabetçi dijital arena platformu.",
    status: "Geliştirme",
    audience: null,
    owner: null,
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Tam Ad:</span> Alanya Taudra E-Sports</div>
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> E-spor markası ve rekabetçi dijital arena platformu</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Geliştirme / Aktif</div>
          <div className="meta-item"><span className="meta-label">Merkez:</span> Alanya</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> E-Spor • Dijital Platform • Turnuva Motoru • Topluluk</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Kurucu • Sistem Mimarı • Marka Stratejisi</div>
          <div className="meta-item"><span className="meta-label">Kaynak Kodu:</span> <a href="https://github.com/ersinsandal/Alanya-Taudra-Esports" target="_blank" rel="noreferrer">github.com/ersinsandal/Alanya-Taudra-Esports</a></div>
          <div className="meta-item" style={{ gridColumn: '1 / -1' }}><span className="meta-label">Teknoloji Yığını:</span> Next.js 15 (App Router, RSC) • React 19 • TypeScript • Tailwind CSS v4 • Prisma ORM • PostgreSQL • Custom JWT</div>
        </div>

        <h2>ATE Nedir?</h2>
        <p>ATE, Alanya merkezli bağımsız bir e-spor ve oyun ekosistemidir. Amaç; Alanya ve çevresindeki oyuncuları rekabetçi oyun, turnuvalar, etkinlikler, içerik ve profesyonel bir dijital platform üzerinden aynı çatı altında bir araya getirmektir.</p>

        <h2>ATE Digital Arena Platform Mimarisi</h2>
        <p>ATE yalnızca bir takım veya topluluk değil; arkasında modern web teknolojileriyle geliştirilmiş tam kapsamlı bir <strong>dijital espor altyapısı (ATE Digital Arena)</strong> barındırmaktadır.</p>
        <p>Platform mimarisinin öne çıkan modülleri şunlardır:</p>
        <ul>
          <li><strong>ATE ID ve Sporcu Pasaportu:</strong> Oyuncuların maç arşivleri, başarı rozetleri ve yerel 512x512 tuval tabanlı avatar işleyicisine sahip resmî dijital kimlik sistemi.</li>
          <li><strong>Turnuva ve Etkinlik Motoru:</strong> Hem çevrim içi (online) hem de yerel LAN turnuvaları için fikstür yönetimi, anlık maç skorları ve ödül havuzu şeffaflığı.</li>
          <li><strong>Alanya Okullar Ligi ve Üniversite E-Spor Koordinasyonu:</strong> Alanya'daki liseler ile ALKÜ ve Alanya Üniversitesi kampüs temsilcileriyle organize edilen eğitim odaklı e-spor ligleri.</li>
          <li><strong>Canlı Sistem Denetim Motoru (AuditLog):</strong> Süper yöneticiler için tüm idari eylemlerin (rol atamaları, turnuva kararları vb.) istemci IP'si ve zaman damgasıyla kaydedildiği kurumsal denetim yapısı.</li>
        </ul>

        <h2>Marka Mimarisi ve Topluluk</h2>
        <p>ATE’nin uzun vadeli modeli yalnızca tek bir e-spor takımına bağlı değildir. Markanın altında rekabetçi takımlar, akademi kadroları, turnuva organizasyonları ve fiziksel oyuncu buluşmaları konumlandırılmaktadır.</p>

        <h2>ALKÜ E-Sports ile Farkı</h2>
        <p><strong>ALKÜ E-Sports:</strong> Üniversite bünyesindeki öğrenci topluluğu.</p>
        <p><strong>ATE:</strong> Üniversiteden bağımsız, bölgesel yetenekleri ulusal ve uluslararası arenaya taşımayı hedefleyen bağımsız espor markası ve teknoloji platformudur.</p>
      </>
    )
  },
  {
    id: "navisecret",
    title: "NaviSecret",
    logo: logoNaviSecret,
    blurLogo: false,
    subtitle: "Gizlilik Öncelikli Mekânsal Sosyal Ağ ve Sıfır-Bilgi İspatlı Geo-Kapsüller",
    category: "Kriptografik Sosyal Ağ & ZKP",
    shortDesc: "Fiziksel koordinatlara şifreli geo-kapsüller bağlayan, gerçek zamanlı yakınlık keşfi ve Groth16 ZK kanıtları sunan mekânsal sosyal ağ.",
    status: "Tamamlandı / Açık Kaynak",
    audience: null,
    owner: "SliferSoft",
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Kriptografik Mekânsal Sosyal Ağ & ZKP</div>
          <div className="meta-item"><span className="meta-label">Mimari:</span> İstemci Taraflı Şifreleme • Dağıtık Docker Yığını</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Açık Kaynak / MIT Lisansı</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Sistem Mimarı & Tam Yığın Geliştirici</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> Web3 • Sıfır-Bilgi Kanıtları (ZKP) • Coğrafi Şifreleme • Gerçek Zamanlı Sistemler</div>
          <div className="meta-item"><span className="meta-label">Kaynak Kodu:</span> <a href="https://github.com/ersinsandal/NaviSecret" target="_blank" rel="noreferrer">github.com/ersinsandal/NaviSecret</a></div>
          <div className="meta-item" style={{ gridColumn: '1 / -1' }}><span className="meta-label">Teknoloji Yığını:</span> React 19 • TypeScript • Fastify (Node.js 22 LTS) • PostgreSQL 16 • Redis 7 • Circom (Groth16 ZKP) • AES-256-GCM • Docker • WebSockets</div>
        </div>

        <h2>NaviSecret Vizyonu: "Every Place Holds a Secret"</h2>
        <p>Aşırı bağlantılı modern dünyada kişisel mahremiyet, merkezi şirketlerin veri madenciliği ve reklam takipleri uğruna feda edilmiştir. Ticari konum uygulamaları, insan hareketliliğini bir gelir metriğine dönüştürerek ham GPS koordinatlarını merkezi sunuculara kesintisiz iletir.</p>
        <p><strong>NaviSecret, fiziksel alanın egemenliğini ve gizemini yeniden inşa eder:</strong></p>
        <p>Sıradan bir sokak bankının veya tarihi bir meydanın yanında yürüdüğünüzü düşünün; tam o koordinatta görünmez, şifrelenmiş dijital bir kapsül duruyor. Binlerce kilometre uzaktaki bir koltuktan veya merkezi sunucudan açılamaz. <strong>Kapsülün sırrını çözmek için fiziksel olarak orada durmanız gerekir.</strong></p>

        <h2>Temel Yetenekler</h2>
        <ul>
          <li><strong>Mekânsal Geo-Kapsüller (NaviDrop):</strong> Koordinatlara 20 metrelik coğrafi sınır (geofence) ile kilitlenen şifreli notlar, ses kayıtları ve fotoğraflar bırakma. İçerikler istemci tarafında <code>AES-256-GCM</code> ile şifrelenir; şifre çözme anahtarı PBKDF2 ve coğrafi yakınlık doğrulamasıyla türetilir. Sunucu şifresiz içeriği asla göremez.</li>
          <li><strong>Spontane Yakınlık Karşılaşmaları (NaviBump):</strong> Arkadaşlarınız fiziksel dünyada yakınınızdan geçtiğinde güvenli eşler arası el sıkışma (peer handshake) protokolü.</li>
          <li><strong>Sıfır-Bilgi Konum Kanıtları (NaviZKP):</strong> Sunucuya veya kamuya açık defterlere gerçek koordinatlarınızı (enlem, boylam) ifşa etmeden, bir etkinlik veya dönüm noktasında bulunduğunuzu Groth16 zk-SNARK devreleri ile matematiksel olarak ispatlama.</li>
          <li><strong>Özerk & Hafif Altyapı:</strong> Üçüncü taraf BaaS bulutlarına sıfır bağımlılık. Kendi donanımınızda ~100 MB RAM tüketen bağımsız 4 konteynerli Docker mimarisi (Fastify, PostgreSQL, Redis, Web).</li>
        </ul>

        <h2>Güvenlik ve Gizlilik Mimarisi</h2>
        <p>Hiçbir izleme pikseli veya ticari reklam SDK'sı barındırmaz. Kapsül verileri tarayıcıdan çıkmadan önce istemci tarafında izole edilir; veritabanı yöneticileri dahi şifresiz içerikleri okuyamaz. Gerçek zamanlı konum güncellemeleri WebSocket üzerinden şifreli aktarılır.</p>
      </>
    )
  },
  {
    id: "storysepeti",
    title: "StorySepeti",
    logo: logoStorySepeti,
    blurLogo: false,
    subtitle: "Maximum Fidelity Instagram Hikaye & Öne Çıkan İndirme Motoru",
    category: "Masaüstü Yazılım & Güvenlik",
    shortDesc: "Instagram hikayelerini 1080p+ orijinal DASH akış kalitesinde kayıpsız birleştiren ve DPAPI şifreleme ile koruyan Windows masaüstü uygulaması.",
    status: "Tamamlandı / Açık Kaynak",
    audience: null,
    owner: "SliferSoft",
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Kurumsal Düzeyde Windows Masaüstü Uygulaması</div>
          <div className="meta-item"><span className="meta-label">Platform:</span> Windows 10 / 11 (x64)</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Tamamlandı / MIT Lisansı</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Kurucu & Tek Geliştirici</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> Masaüstü Yazılım • Ağ Protokolleri • Medya Akış Mühendisliği • Kriptografi</div>
          <div className="meta-item"><span className="meta-label">Kaynak Kodu:</span> <a href="https://github.com/ersinsandal/StorySepeti" target="_blank" rel="noreferrer">github.com/ersinsandal/StorySepeti</a></div>
          <div className="meta-item" style={{ gridColumn: '1 / -1' }}><span className="meta-label">Teknoloji Yığını:</span> Python 3.10+ • CustomTkinter • curl_cffi (TLS Impersonation) • yt-dlp • FFmpeg / FFprobe • Windows DPAPI (AES-256-GCM) • PyInstaller</div>
        </div>

        <h2>StorySepeti Nedir?</h2>
        <p>StorySepeti, Instagram hikayelerini (24 saatlik geçici medyalar) ve öne çıkan hikaye albümlerini mevcut olan mutlak en yüksek kalitede arşivlemek için Python ve CustomTkinter mimarisiyle geliştirilmiş bağımsız bir masaüstü uygulamasıdır.</p>
        <p>Geleneksel web tabanlı indirme araçlarının aksine, sıkıştırılmış 720p/480p önizleme akışları yerine Instagram'ın modern Web API'sine ve DASH akış manifestolarına doğrudan erişir.</p>

        <h2>"720p Sınırı" Nasıl Çözüldü?</h2>
        <p>Instagram sunucuları bant genişliğinden tasarruf etmek için 1080p videoları video ve ses kanallarını ayırarak (DASH) dağıtır. Standart web araçları ayrı kanalları birleştiremediği için mobil tarayıcılar için üretilen düşük bit hızlı 720p MP4 önizlemelerine mahkûmdur.</p>
        <p>StorySepeti bu problemi şu adımlarla aşar:</p>
        <ul>
          <li><strong>Chrome 124 TLS Parmak İzi Sahtelemesi:</strong> <code>curl_cffi</code> kütüphanesiyle doğrudan yüksek hızlı Instagram Web API uç noktalarına yetkili erişim.</li>
          <li><strong>DASH Kayıpsız Akış Birleştirme:</strong> Ayrık 1080p video ve master ses akışlarını yeniden kodlama (re-encoding) kaybı olmadan MKV/MP4 kapsayıcılarında birleştirme.</li>
          <li><strong>Donanımsal FFprobe Doğrulaması:</strong> İndirilen her dosyanın kodek, piksel boyutları ve bit hızını dosya kaydedilmeden önce otomatik fiziksel denetime tabi tutma.</li>
          <li><strong>Orijinal Fotoğraf Çözünürlüğü:</strong> 640x640 kırpılmış küçük resimler yerine 1206x2144 piksele varan tam sıkıştırmasız orijinal tuval indirme.</li>
        </ul>

        <h2>Kurumsal Güvenlik ve Gizlilik</h2>
        <p>Kullanıcı oturum çerezleri (sessionid) asla düz metin olarak saklanmaz. Yalnızca Windows'un donanım destekli <code>DPAPI</code> (Data Protection API) şifreleme kasasında <code>AES-256-GCM</code> ile korunur. Sıfır telemetri ve sıfır harici sunucu bağımlılığıyla tüm veri akışı doğrudan kullanıcının bilgisayarı ile resmî sunucular arasında gerçekleşir.</p>
      </>
    )
  },
  {
    id: "b2x",
    title: "B2X-LoRa",
    logo: logoB2X,
    blurLogo: false,
    subtitle: "Sensör Destekli Deterministik Durak-Araç Haberleşme Sistemi",
    category: "IoT & Kablosuz Haberleşme Sistemi",
    shortDesc: "Pasif toplu taşıma duraklarını deterministik uzun menzilli LoRa telemetrisi ve sensör doğrulamasıyla akıllı IoT düğümlerine dönüştüren yeni nesil ulaşım altyapısı.",
    status: "Tamamlandı / Açık Kaynak",
    audience: null,
    owner: null,
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Donanım Prototipi + Deterministik IoT Haberleşme Altyapısı</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Tamamlandı (Açık Kaynak Firmware & Donanım)</div>
          <div className="meta-item"><span className="meta-label">Platform & Donanım:</span> Çift ESP32-S3 • Ra-02 LoRa (SX1278 433 MHz) • BMI160 6-Eksen IMU • PIR • LDR • MPPT Solar</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Sistem Mimarisi • Gömülü C++ Yazılımı • Donanım Tasarımı • Test & Entegrasyon</div>
          <div className="meta-item"><span className="meta-label">Kaynak Kodu:</span> <a href="https://github.com/ersinsandal/B2X-LoRa" target="_blank" rel="noreferrer">github.com/ersinsandal/B2X-LoRa</a></div>
          <div className="meta-item" style={{ gridColumn: '1 / -1' }}><span className="meta-label">Teknoloji Yığını:</span> Gömülü C++ (Arduino/ESP-IDF) • LoRa P2P (B2X Deterministik v3.0) • FreeRTOS Durum Makineleri • Wi-Fi NTP</div>
        </div>

        <h2>B2X-LoRa Nedir ve Hangi Problemi Çözer?</h2>
        <p>Mevcut toplu taşıma sistemlerinde duraklar büyük oranda pasif fiziksel yapılardır. Yolcular gece saatlerinde, virajlı yollarda veya görüş mesafesinin azaldığı hava koşullarında el işaretiyle araç durdurmak zorunda kalmakta; şoförler durakta bekleyen yolcuları sıklıkla fark edemeyip durağı pas geçebilmekte ya da kimsenin beklemediği duraklarda gereksizce yavaşlayarak yakıt ve zaman kaybetmektedir.</p>
        <p><strong>B2X-LoRa (Bus-to-Everything over LoRa)</strong>, durak ile otobüs arasında hücresel ağa veya harici internet bağlantısına bağımlı olmadan deterministik, doğrudan ve uzun menzilli eşler arası (peer-to-peer) RF bağlantısı kurarak bu sorunu kökten çözer.</p>

        <h2>Sistem Mimarisi ve İki Donanım Prototipi</h2>
        <p>Sistem, birbirleriyle 433 MHz frekans bandında deterministik paket protokolüyle haberleşen çalışan iki donanım prototipinden oluşur:</p>
        <ul>
          <li><strong>Akıllı Durak Ünitesi (durak.ino):</strong> ESP32-S3 ana işlemcisi, Ra-02 LoRa RF alıcı-vericisi, SSD1306 OLED durum ekranı, HC-SR501 PIR hareket sensörü, LDR ortam ışığı sensörü, ışıklı fiziksel talep butonu, DFPlayer Mini ses işlemcisi + harici hoparlör, CN3791 MPPT solar şarj devresi (6V panel + 18650 Li-Ion) ve Wi-Fi/NTP zaman istemcisi.</li>
          <li><strong>Otobüs Araç İçi Ünitesi (otobus.ino):</strong> ESP32-S3 işlemcisi, Ra-02 LoRa modülü, SSD1306 OLED şoför bilgilendirme ekranı, kilitlenmeyen aktif sesli ikaz buzzer'ı, BMI160 6 eksenli IMU ivme/jiroskop sensörü ve yazılımsal RTC senkronizasyon motoru.</li>
        </ul>

        <h2>Çalışma Mantığı ve Deterministik Durum Makineleri</h2>
        <ul>
          <li><strong>İki Kademeli Deterministik Yolcu Doğrulaması:</strong> Yolcu talep butonuna bastığında ekranda 15 saniyelik bir onay sayacı başlar. Sistem PIR hareket sensörüyle durakta fiziksel bir yolcunun bulunduğunu doğrular; böylece basıp kaçma veya asılsız çağrılar filtrelenir.</li>
          <li><strong>RSSI Tabanlı Yaklaşma ve Otonom Anons:</strong> Yaklaşan otobüs her 2000 ms'de bir LoRa beacon sinyali yayar. Durak bu sinyali yakalayarak RSSI (sinyal gücü) tabanlı algoritmayla tahmini varış süresini hesaplar, sesli ve görsel bildirim üretir.</li>
          <li><strong>Kilitlenmeyen (Non-blocking) Ses Yönetimi:</strong> ESP32'nin ana döngüsünü dondurmayan millis() tabanlı melodi motoru sayesinde ses çalınırken RF paket dinlemesi kesintisiz devam eder.</li>
          <li><strong>Ortam Işığına Göre Dinamik Adaptasyon:</strong> LDR sensörü gece/gündüz ayrımı yaparak durak aydınlatmasını ve ekran parlaklığını otomatik ayarlar.</li>
        </ul>

        <h2>Güvenlik ve Otonom Kaza Algılama Sistemi</h2>
        <p>Otobüs ünitesindeki 6 eksenli BMI160 IMU sensörü, ani darbe veya devrilme anlarını (6.5g eşik değeri üzeri) gerçek zamanlı olarak algılar. Kaza anında sistem otonom olarak acil durum LoRa paketini çevreye yayar; durak ünitesi acil durum alarmı ve sesli siren moduna geçerek kurtarma ekiplerine kritik ilk saniyelerde yön gösterir.</p>

        <h2>Deterministik Rota ve Çoklu Otobüs Yönetimi</h2>
        <p>Paket protokolündeki <code>Side_ID</code> parametresi ile otobüsün gidiş mi geliş yönünde mi olduğu otomatik anlaşılır. Birden fazla otobüsün aynı anda durağa yaklaşması durumunda ise <code>Round Robin</code> kuyruk algoritması devreye girerek her otobüsün bilgisi OLED ekranda dönüşümlü olarak gösterilir.</p>
      </>
    )
  },
  {
    id: "luckylick",
    title: "LuckyLick",
    logo: logoLuckyLick,
    blurLogo: true,
    subtitle: "Deneysel ISP Düzeyinde Sansür Atlama ve DNS Tünelleme Araştırması",
    category: "Siber Güvenlik & Ağ Araştırması",
    shortDesc: "VPN olmadan DNS-over-HTTPS (DoH) ve çok iş parçacıklı ters vekil üzerinden ISP engellerini aşan deneysel siber güvenlik çalışması.",
    status: "Araştırma / Özel Kaynak",
    audience: null,
    owner: "SliferSoft",
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Deneysel Siber Güvenlik ve Ağ Tünelleme Projesi</div>
          <div className="meta-item"><span className="meta-label">Mimari:</span> Multi-Threaded Reverse Proxy • DNS-over-HTTPS</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Tamamlandı (Teknik Dokümantasyon Açık / Kaynak Kod Özel)</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Araştırmacı & Sistem Geliştirici</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> Ağ Güvenliği • DNS Tünelleme • TLS SNI Manipülasyonu • Tersine Mühendislik</div>
          <div className="meta-item"><span className="meta-label">Dokümantasyon:</span> <a href="https://github.com/ersinsandal/LuckyLick-showcase" target="_blank" rel="noreferrer">github.com/ersinsandal/LuckyLick-showcase</a></div>
          <div className="meta-item" style={{ gridColumn: '1 / -1' }}><span className="meta-label">Teknoloji Yığını:</span> Python 3.10+ • DNS-over-HTTPS (DoH) • TLS SNI Injection • HTTP 206 Partial Content Streaming • Vanilla JS SPA</div>
        </div>

        <h2>LuckyLick Nedir ve Nasıl Çalışır?</h2>
        <p>LuckyLick, internet servis sağlayıcı (ISP) düzeyindeki DNS engellerini ve sansür mekanizmalarını <strong>üçüncü taraf bir VPN veya tarayıcı eklentisi olmadan</strong> aşmayı araştıran deneysel bir siber güvenlik ve ağ tünelleme projesidir.</p>
        <p>Proje, <em>theuselessweb.com</em> konseptinden esinlenen tek tıkla şans odaklı bir web arayüzü sunar. Kullanıcı butona bastığında sistem, Türkiye'de ISP düzeyinde en katı idari erişim engellerine tabi tutulan yetişkin video platformlarının API ve akış havuzlarından rastgele bir içerik seçer ve bunu doğrudan tarayıcıda oynatır.</p>
        <p>Projenin kanıtladığı temel bilimsel tez şudur: <em>Standart bir web tarayıcısından, istemci tarafında hiçbir VPN, proxy eklentisi veya DNS yapılandırmasına ihtiyaç kalmadan; yalnızca yerel ters vekil (reverse proxy) ve DoH (DNS-over-HTTPS) tünellemesiyle engellenmiş CDN video akışlarına gecikmesiz ve doğrudan erişilebilir.</em></p>

        <h2>Neden Yetişkin Video Platformları Test Alanı Olarak Seçildi?</h2>
        <p>Araştırmada test ortamı olarak özellikle bu platformların tercih edilme sebebi rastgele bir seçim olmayıp, geliştirilen tünelleme algoritmasının sınırlarını zorlayan şu teknik ölçütlere dayanmaktadır:</p>
        <ul>
          <li><strong>En Katı ISP ve DPI Regülasyonları:</strong> Türkiye'deki internet servis sağlayıcıları ve DPI (Derin Paket İncelemesi) sistemleri en agresif ve çok katmanlı engelleme kurallarını bu platformlara uygulamaktadır.</li>
          <li><strong>Yüksek Sürtünmeli CDN Mimarisi:</strong> Bu platformlar; çok katmanlı küresel CDN ağları, süre sınırlı dinamik imzalı tokenler, sıkı Origin/Referer başlık doğrulaması ve uyarlamalı parçalı video akışları (chunked streaming) kullanır.</li>
          <li><strong>Nihai Kıyaslama Testi (Ultimate Benchmark):</strong> Geliştirilen yerel DoH ve proxy algoritması; internetteki en yüksek sürtünmeli, en sıkı korunan ve en katı engellenmiş bu medya akışlarını <em>HTTP 206 Partial Content</em> ile gecikmesiz oynatabiliyorsa, teorik olarak ISP düzeyindeki tüm DNS engellerini aşabilecek güçte olduğunu ampirik olarak kanıtlamış olur.</li>
        </ul>

        <h2>Temel Teknik İnovasyonlar</h2>
        <ul>
          <li><strong>DoH ve Önceden Eşlenmiş IP Havuzu:</strong> ISP çözümleyicilerinin DNS yanıtlarını zehirlemesini engellemek için Cloudflare ve Google DoH üzerinden şifreli DNS sorgulaması ve gerçek IP yönlendirmesi.</li>
          <li><strong>TLS SNI Enjeksiyonu:</strong> Python'un HTTPS bağlantılarında IP adresine bağlanırken SNI başlığını düşürmesini engelleyen <code>_server_hostname</code> mühendisliği.</li>
          <li><strong>Platform Duyarlı Origin/Referer Sahtelemesi:</strong> CDN sunucularının istek kökeni doğrulamasını başarıyla geçiren dinamik başlık manipülasyonu.</li>
          <li><strong>İstemci Taraflı JS Müdahale Enjeksiyonu:</strong> Tarayıcıdaki <code>fetch()</code>, <code>XMLHttpRequest</code> ve <code>HTMLMediaElement.src</code> atamalarını çalışma zamanında yerel vekile yönlendiren komut dizisi enjeksiyonu.</li>
          <li><strong>HTTP 206 Parçalı İçerik Akışı (Range Streaming):</strong> Medya dosyalarını 64 KB'lık parçalar halinde gecikmesiz ve kesintisiz akıtarak tamponlama ihtiyacını ortadan kaldırma.</li>
        </ul>

        <h2>Proje Durumu ve Etik Sorumluluk</h2>
        <p>Bu çalışma bir ticari ürün veya dağıtım servisi değil; ağ protokolleri üzerine yürütülmüş akademik ve deneysel bir araştırmadır. Kötüye kullanımı önlemek amacıyla tam kaynak kodlar özel repoda tutulmakta, teknik analiz ve dokümantasyon ise açık olarak paylaşılmaktadır.</p>
      </>
    )
  },
  {
    id: "site-defteri",
    title: "Site Defteri",
    subtitle: "Web Tabanlı Akıllı Apartman ve Site Yönetim Sistemi",
    category: "Web Tabanlı Site Yönetim Sistemi",
    shortDesc: "Apartman ve site yönetiminin finansal, operasyonel ve iletişim süreçlerini tek sistemde birleştiren web uygulaması.",
    status: "Tamamlandı",
    audience: null,
    owner: null,
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Tam kapsamlı web uygulaması</div>
          <div className="meta-item"><span className="meta-label">Platform:</span> Web</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Tamamlandı / Sunuldu</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> Yönetim Sistemleri • Gayrimenkul Teknolojileri • Yazılım</div>
          <div className="meta-item"><span className="meta-label">Geliştiriciler:</span> Ersin Sandal & Burak Işık</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Ürün Tasarımı • Sistem Analizi • Yazılım Geliştirme • Proje Yönetimi</div>
          <div className="meta-item" style={{ gridColumn: '1 / -1' }}><span className="meta-label">Teknoloji Yığını:</span> Java • Spring Boot • MySQL • React • Next.js</div>
        </div>

        <h2>Site Defteri Nedir?</h2>
        <p>Site Defteri, apartman ve site yönetiminde kullanılan dağınık operasyonları tek bir merkezi web uygulamasında birleştirmek için geliştirilmiş yönetim sistemidir. Sistem basit bir “aidat takip sitesi” değildir. Site yönetiminin finansal, operasyonel ve iletişim süreçlerini aynı veri modeli içerisinde birleştiren çok modüllü bir uygulamadır.</p>

        <h2>Sistem Mimarisi ve Kullanıcı Modeli</h2>
        <p>Site Defteri mantıksal olarak üç ana katmandan oluşur:</p>
        <ul>
          <li><strong>Kullanıcı Arayüzü Katmanı:</strong> React ve Next.js tabanlı kullanıcı ekranları.</li>
          <li><strong>Uygulama Katmanı:</strong> Spring Boot üzerinden çalışan iş mantığı ve servis yapısı.</li>
          <li><strong>Veri Katmanı:</strong> MySQL üzerinde çalışan ilişkisel veri tabanı.</li>
        </ul>
        <p>Sistem rol tabanlı erişim kontrolü mantığına sahiptir. Yöneticiler, sakinler ve personeller, kendilerine atanan operasyonel alanlara erişebilir. Bu yapı, her kullanıcıya yalnızca ihtiyacı olan veri ve işlemleri göstermeyi amaçlar.</p>

        <h2>Modüler Sistem</h2>
        <p>Platform birbirinden bağımsız fakat aynı veri tabanı içerisinde ilişkili çalışan modüllerden oluşur. Başlıca modüller şunlardır:</p>
        <ul>
          <li>Aidat ve Finansal İşlemler</li>
          <li>Daire Yönetimi, Malik ve Kiracı Yönetimi</li>
          <li>Arıza ve Şikâyet Yönetimi, Hizmet Seviyesi Takibi</li>
          <li>Duyurular, Okundu Bilgisi</li>
          <li>Elektronik Oylama ve PDF Tutanak Sistemi</li>
          <li>Kargo ve Personel Sistemleri</li>
        </ul>

        <h2>Veri İlişkileri</h2>
        <p>Sistem içerisinde çeşitli ilişkisel yapılar bulunmaktadır. Örneğin; <strong>Kullanıcı → Arıza Talebi</strong>, <strong>Oylama → Kullanıcı → Oy</strong>, <strong>Kargo → Daire → Kullanıcı</strong> gibi. Bu ilişkiler uygulamayı basit form girişlerinden oluşan bir yazılımdan çıkararak gerçek alan modeline sahip bir yönetim sistemine dönüştürmektedir.</p>
      </>
    )
  },
  {
    id: "ilanzeka",
    title: "İlanZeka",
    logo: logoIlanZeka,
    blurLogo: false,
    subtitle: "ARGEYA Bünyesinde Profesyonel Yazılım Projesi",
    category: "Kurumsal Yazılım Projesi",
    shortDesc: "ARGEYA bünyesindeki yazılım geliştirme stajı kapsamında üzerinde çalışılan profesyonel proje.",
    status: "Profesyonel Proje",
    audience: null,
    owner: "ARGEYA",
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Kurumsal yazılım projesi</div>
          <div className="meta-item"><span className="meta-label">Sahibi:</span> ARGEYA</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Profesyonel Proje</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Yazılım Geliştirme Stajyeri</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> Yazılım Geliştirme • Kurumsal Sistemler</div>
        </div>

        <h2>İlanZeka Nedir?</h2>
        <p>İlanZeka, ARGEYA’daki yazılım geliştirme stajım sırasında dahil olduğum profesyonel yazılım projelerinden biridir. Bu proje kişisel girişimim değildir. Tüm ürün sahipliği ve kurumsal yapı ARGEYA’ya aittir.</p>

        <h2>Neden Portfolyoda Yer Alıyor?</h2>
        <p>Kişisel ve akademik projelerde sistem mimarisinin ve ürün kararlarının büyük bölümünü doğrudan oluşturmak mümkündür. Kurumsal projelerde ise mevcut yazılım mimarisine, kod standartlarına, iş kurallarına ve proje süreçlerine uyum sağlamak gerekir. İlanZeka bu nedenle profesyonel yazılım geliştirme ortamında çalışma deneyimimi temsil etmektedir.</p>

        <h2>Teknik Deneyim</h2>
        <p>Bu tür profesyonel geliştirme süreçlerinde; mevcut kod tabanını analiz etme, gereksinimleri yorumlama, mevcut yapıyla uyumlu geliştirme, hata ayıklama, bileşenler arasındaki ilişkileri anlama ve ekip içi koordinasyon gibi konular önem kazanmaktadır.</p>

        <h2>Gizlilik</h2>
        <p>ARGEYA’ya ait kaynak kod, veri modeli, iş mantığı, sistem mimarisi, kurum içi belgeler ve kamuya açıklanmamış ürün özellikleri portfolyoda paylaşılmamalıdır. Bu nedenle İlanZeka sayfası özellikle <strong>profesyonel çalışma deneyimi ve kazanılan yetkinliklere</strong> odaklanmaktadır.</p>
      </>
    )
  },
  {
    id: "a-project",
    title: "A******t",
    logo: logoAnketest,
    blurLogo: true,
    subtitle: "Sosyal Medya Merkezli Dijital Kamuoyu Araştırma ve Etkileşim Sistemi",
    category: "Dijital Kamuoyu Araştırma Platformu",
    shortDesc: "Genç kullanıcıların görüşlerini dijital ve etkileşimli yöntemlerle ölçen araştırma sistemi.",
    status: "Aktif",
    audience: "36.000+",
    owner: null,
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Dijital kamuoyu araştırma platformu</div>
          <div className="meta-item"><span className="meta-label">Dağıtım Modeli:</span> Sosyal medya merkezli dijital yapı</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Aktif / Gizli Proje</div>
          <div className="meta-item"><span className="meta-label">Kitle:</span> 36.000+</div>
          <div className="meta-item"><span className="meta-label">Temel Alan:</span> Kamuoyu • Anket • Veri • Gençlik • Dijital İçerik</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Proje Stratejisi • İçerik Sistemi • Kitle Geliştirme • Veri Odaklı Büyüme</div>
        </div>

        <h2>A******t Nedir?</h2>
        <p>A******t, özellikle genç kullanıcıların güncel, sosyal ve toplumsal konular hakkındaki görüşlerini daha hızlı ve etkileşimli biçimde ölçmek amacıyla geliştirilmiş dijital bir kamuoyu araştırma projesidir.</p>
        <p>Proje geleneksel araştırma şirketlerinin kullandığı uzun anket formlarından farklı bir yaklaşım benimser. Araştırma içeriği kullanıcıların zaten yoğun biçimde bulunduğu dijital ortamlara taşınır.</p>
        <p>Anket, soru, karşılaştırma ve etkileşim mekanikleri; sosyal medya içerik formatlarıyla bütünleştirilir. Böylece kullanıcı için araştırmaya katılmak ayrı ve yorucu bir işlem olmaktan çıkarak doğal dijital içerik tüketiminin bir parçasına dönüşür.</p>

        <h2>Sistem Nasıl Çalışıyor?</h2>
        <p>Projenin kamuya açık şekilde anlatılabilecek genel yapısı dört katmandan oluşmaktadır:</p>
        <ul>
          <li><strong>1. İçerik Katmanı:</strong> Gündem veya araştırma konusu belirlenir. Kullanıcı tarafından birkaç saniye içerisinde anlaşılabilecek soru formatları oluşturulur.</li>
          <li><strong>2. Etkileşim Katmanı:</strong> Kullanıcılar anketler, karşılaştırmalar veya diğer etkileşim formatları üzerinden görüşlerini belirtir.</li>
          <li><strong>3. Veri Katmanı:</strong> Toplanan etkileşimler anonimleştirilmiş veya toplulaştırılmış istatistiksel sonuçlara dönüştürülebilecek veri noktaları oluşturur.</li>
          <li><strong>4. Dağıtım Katmanı:</strong> Sonuçlar veya devam içerikleri yeniden dijital kanallarda kullanıcılarla buluşturularak sürekli bir etkileşim döngüsü yaratılır.</li>
        </ul>

        <h2>Geleneksel Anketlerden Farkı</h2>
        <p>A******t’in temel yaklaşımı, kullanıcının araştırmaya gelmesini beklemek yerine <strong>araştırmayı kullanıcının bulunduğu dijital ortama götürmektir.</strong></p>
        <p>Bunun için; kısa soru yapıları, yüksek görsel okunabilirlik, hızlı etkileşim, güncel internet dili, mizah, paylaşılabilir içerikler ve yapay zekâ destekli içerik üretimi birlikte kullanılmaktadır.</p>

        <h2>Veri Yaklaşımı ve Yapay Zekâ Katmanı</h2>
        <p>Platform yalnızca toplam oy sayılarına odaklanan basit bir anket hesabı olarak değerlendirilmemektedir. Üretilen etkileşim verileri teorik olarak: yanıt dağılımı, katılım oranı, içerik türü, kullanıcı tepki hızı, etkileşim oranı, konu performansı ve zaman bazlı eğilimler üzerinden analiz edilebilir.</p>
        <p>Yapay zekâ araçları; soru varyasyonlarının hazırlanması, gündem araştırması, içerik fikirleri, alternatif soru biçimleri, sonuçların özetlenmesi ve içerik optimizasyonu gibi alanlarda yardımcı araç olarak kullanılabilir.</p>

        <h2>Kitle ve Gizlilik</h2>
        <p>A******t bugüne kadar <strong>36.000+</strong> kullanıcı ve takipçiden oluşan dijital topluluk ölçeğine ulaşmıştır. Bu büyüklük projenin yalnızca kavramsal bir çalışma olmadığını, gerçek kullanıcı davranışları üzerinde denenmiş bir dijital yapı olduğunu göstermektedir.</p>
        <p>Projenin gerçek adı, ayrıntılı veri mimarisi, bazı araştırma yöntemleri, özel içerik formatları ve gelecek ürünleşme planı kamuya açık değildir.</p>
      </>
    )
  },
  {
    id: "v-project",
    title: "V****",
    logo: logoVetha,
    blurLogo: true,
    subtitle: "Dijital Hizmet, Sosyal Medya ve Büyüme Ajansı",
    category: "Dijital Hizmet Ajansı",
    shortDesc: "Sosyal medya, dijital kampanya ve organik büyüme alanında faaliyet gösteren dijital hizmet yapısı.",
    status: "Geçmiş",
    audience: "10.000+",
    owner: null,
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Dijital hizmet ajansı</div>
          <div className="meta-item"><span className="meta-label">Faaliyet Modeli:</span> Sosyal medya merkezli hizmet ve içerik üretimi</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Gizli Proje / Geçmiş Operasyon</div>
          <div className="meta-item"><span className="meta-label">Kitle:</span> 10.000+</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> Dijital Pazarlama • Sosyal Medya • İçerik • Organik Büyüme</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Strateji • İçerik Yönetimi • Topluluk Geliştirme</div>
        </div>

        <h2>V**** Nedir?</h2>
        <p>V****, markalara ve dijital hesaplara sosyal medya, içerik üretimi ve organik büyüme alanında hizmet vermek amacıyla oluşturulmuş dijital hizmet projesidir.</p>
        <p>Bu proje doğrudan bir mobil uygulama veya klasik yazılım ürünü değildir. <strong>Dijital hizmet ve medya ajansı modeline sahiptir.</strong> Temel uzmanlık alanı bir markanın veya hesabın dijital görünürlüğünü artırmak, içerik üretim sistemini geliştirmek ve sosyal medya hedef kitlesini büyütmektir.</p>

        <h2>Hizmet ve Büyüme Modeli</h2>
        <p>Proje kapsamında gerçekleştirilen çalışmalar; sosyal medya hesap yönetimi, içerik planlaması, içerik üretimi, dijital kampanya geliştirme, hedef kitle analizi, hesap konumlandırması, organik erişim optimizasyonu ve etkileşim stratejileri etrafında şekillenmiştir.</p>
        <p>Hesap performansı yalnızca takipçi artışı üzerinden değerlendirilmemektedir. İçerik üretiminde:</p>
        <blockquote>İçerik → Yayın → Veri → Analiz → Optimizasyon → Yeni İçerik</blockquote>
        <p>döngüsü uygulanır.</p>

        <h2>Kitle</h2>
        <p>V**** kendi dijital varlıkları üzerinden <strong>10.000+</strong> kişilik topluluk ölçeğine ulaşmıştır. Bu süreç organik topluluk oluşturma ve sosyal medya büyüme mekanikleri hakkında önemli operasyonel deneyim sağlamıştır.</p>
      </>
    )
  },
  {
    id: "f-project",
    title: "F******* P******",
    logo: logoFloresan,
    blurLogo: true,
    subtitle: "Dijital Merkezli Politik Gençlik Hareketi",
    category: "Politik Gençlik Hareketi",
    shortDesc: "Gençlerin siyasi ve toplumsal gündeme katılımını artırmaya yönelik dijital gençlik hareketi.",
    status: "Geçmiş",
    audience: "8.000+",
    owner: null,
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Siyasi / politik gençlik hareketi</div>
          <div className="meta-item"><span className="meta-label">Organizasyon Modeli:</span> Dijital topluluk ve gençlik hareketi</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Gizli / Geçmiş Proje</div>
          <div className="meta-item"><span className="meta-label">Kitle:</span> 8.000+</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> Gençlik • Siyaset • Dijital İletişim • Topluluk</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Kurucu Yapı • Dijital Strateji • Topluluk Yönetimi</div>
        </div>

        <h2>F******* P****** Nedir?</h2>
        <p>F******* P******, gençlerin siyasi ve toplumsal süreçlere ilgisini artırmak amacıyla oluşturulmuş <strong>politik gençlik hareketidir.</strong></p>
        <p>Bu proje bir yazılım ürünü, şirket veya sivil toplum kuruluşu değildir. Temel yapısı dijital iletişim ve topluluk örgütlenmesi üzerine kurulmuş bir gençlik hareketidir.</p>

        <h2>Amaç ve Örgütlenme Modeli</h2>
        <p>Projenin temel amacı genç kullanıcıların; güncel siyasi gelişmeler, toplumsal sorunlar, gençlerin yaşadığı problemler, yerel ve ulusal gündem hakkında daha fazla içerik tüketmesini ve tartışmalara katılmasını sağlamaktır.</p>
        <p>Hareketin ana iletişim kanalları sosyal medya platformlarıdır. Bu nedenle topluluk büyümesi gündem odaklı içerik, gençlere uygun iletişim dili ve etkileşim üzerine kurulmuştur.</p>

        <h2>Kitle ve Teknik Tarafı</h2>
        <p>Hareket <strong>8.000+</strong> kişilik dijital kitleye ulaşmıştır. Bu proje özellikle dijital ortamda politik iletişim, gençlik toplulukları ve kullanıcı aidiyeti üzerine önemli deneyim sağlamıştır.</p>
        <p>Performans; içerik erişimi, etkileşim, büyüme oranı, paylaşım ve kullanıcı davranışı gibi göstergeler üzerinden analiz edilmiştir.</p>
      </>
    )
  },
  {
    id: "t-project-web",
    title: "T****",
    subtitle: "Web Merkezli Sivil Toplum ve Sosyal Etki Platformu",
    category: "Sivil Toplum Teknolojisi",
    shortDesc: "Gönüllüler, topluluklar ve sosyal projeleri dijital ortamda bir araya getirmeyi amaçlayan web merkezli sivil toplum platformu.",
    status: "Geliştirme",
    audience: null,
    owner: null,
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Sivil toplum teknolojisi</div>
          <div className="meta-item"><span className="meta-label">Platform:</span> Web tabanlı, mobil uyumlu dijital platform</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Geliştirme / Gizli Proje</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> Sivil Toplum • Gönüllülük • Sosyal Etki • Topluluk</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Kurucu Fikir • Ürün Stratejisi • Platform Tasarımı</div>
        </div>

        <h2>T**** Nedir?</h2>
        <p>T****, sivil toplum kuruluşları, gönüllüler ve sosyal projeler arasındaki dağınık iletişimi daha merkezi ve dijital bir yapıya taşımayı hedefleyen sosyal etki platformudur. Bu proje <strong>siyasi hareket değildir.</strong> Temel odağı sivil toplum, gönüllülük ve sosyal etki ekosistemidir.</p>

        <h2>Çözmek İstediği Problem</h2>
        <p>Sivil toplum dünyasında; gönüllüler, dernekler, sosyal girişimler, yerel inisiyatifler, etkinlikler çoğu zaman birbirinden bağımsız kanallar üzerinden organize edilmektedir. Bir kullanıcı gönüllü olmak istediğinde hangi projeye nasıl katılacağını bilemeyebilir. Bir kuruluş ise doğru gönüllü kitlesine ulaşmakta zorlanabilir. T**** bu iki taraf arasında dijital bir bağlantı katmanı oluşturmayı hedefler.</p>

        <h2>Platform Mimarisi ve Hedef Kitle</h2>
        <p>Ürün vizyonunda sistemin temel veri nesnelerinin; kullanıcı, kuruluş, topluluk, proje, etkinlik, katılım, gönüllülük kaydı, bildirim gibi yapılardan oluşması öngörülmektedir.</p>
        <p>Hedef Kitle: Üniversite öğrencileri, genç gönüllüler, dernekler, sivil toplum kuruluşları, sosyal girişimler ve yerel inisiyatifler.</p>
      </>
    )
  },
  {
    id: "t-project-mobile",
    title: "T****",
    subtitle: "Mobil Öncelikli Yeni Nesil Sosyal Keşif Uygulaması",
    category: "Mobil Sosyal Keşif Uygulaması",
    shortDesc: "Genç kullanıcıların yaşadıkları şehirde yeni insanlar, topluluklar ve etkinlikler keşfetmesini amaçlayan mobil sosyal ağ.",
    status: "Geliştirme",
    audience: null,
    owner: null,
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Sosyal ağ ve sosyal keşif uygulaması</div>
          <div className="meta-item"><span className="meta-label">Platform:</span> Mobil uygulama</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Ürün Tasarımı / Geliştirme / Gizli Proje</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> Sosyal Ağ • Yerel Keşif • Gençlik • Topluluk</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Kurucu Fikir • Ürün Tasarımı • Ürün Stratejisi</div>
        </div>

        <h2>T**** Nedir?</h2>
        <p>T****, özellikle genç kullanıcıların kendi şehirlerindeki insanları, toplulukları ve sosyal hareketliliği daha doğal biçimde keşfedebilmesini amaçlayan <strong>mobil öncelikli sosyal uygulamadır.</strong> Bu proje klasik anlamda Instagram, X veya TikTok benzeri içerik merkezli sosyal medya platformu değildir. Temel odağı gerçek sosyal keşiftir.</p>

        <h2>Temel Problem</h2>
        <p>Modern kullanıcı yüzlerce kişiyi takip etmesine rağmen fiziksel dünyada yeni sosyal bağlar kurmakta zorlanabilmektedir. Özellikle üniversiteye yeni başlayan, yeni bir şehre taşınan veya sosyal çevresini genişletmek isteyen genç kullanıcılar için bu problem daha belirgindir. T**** dijital bağlantıyı gerçek sosyal hayata bağlayan bir yapı oluşturmayı hedeflemektedir.</p>

        <h2>Sosyal Grafik ve Konum Tabanlı Keşif</h2>
        <p>Sistemin önemli teknik bileşenlerinden biri kullanıcılar arasındaki ilişki ağının yönetilmesidir. Veri modeli yalnızca Kullanıcı → Kullanıcı bağlantısından oluşmaz. Kullanıcı → Topluluk, Etkinlik → Konum gibi çok katmanlı bir <strong>sosyal grafik</strong> yapısına dönüşür.</p>
        <p>Ürünün önemli özelliklerinden biri fiziksel konum ile sosyal ağı birbirine bağlamaktır. Kullanıcının yalnızca “kimi takip ettiğini” değil, bulunduğu şehir içerisinde <strong>neler olduğunu</strong> keşfetmesi amaçlanmaktadır.</p>
      </>
    )
  },
  {
    id: "bilgisayarli-goru",
    title: "Bilgisayarlı Görmede Öznitelik Çıkarım Yöntemlerinin Nicel Karşılaştırmalı Analizi",
    subtitle: "Ham Pikseller (Raw Pixels) vs. HOG vs. Çok Ölçekli Mekansal LBP (MS-S-LBP)",
    category: "Bilgisayarlı Görü Araştırması",
    shortDesc: "Ham piksel, HOG ve Çok Ölçekli Mekansal LBP özniteliklerinin üç farklı veri kümesinde (Fashion-MNIST, CIFAR-10, KTH-TIPS) sınıflandırma başarısını ve hesaplama karmaşıklığını kıyaslayan ampirik araştırma.",
    status: "Akademik",
    audience: null,
    owner: null,
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Akademik Araştırma & Deneysel Kıyaslama (Benchmark)</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Tamamlandı (Açık Kaynak & Tekrarlanabilir Python Hattı)</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> Bilgisayarlı Görü • Öznitelik Mühendisliği • Örüntü Tanıma</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Bağımsız Araştırmacı • Deney Tasarımı • Algoritma Geliştirme • Matematiksel Modelleme</div>
          <div className="meta-item"><span className="meta-label">Kaynak Kodu:</span> <a href="https://github.com/ersinsandal/Feature-Extraction-Analysis" target="_blank" rel="noreferrer">github.com/ersinsandal/Feature-Extraction-Analysis</a></div>
          <div className="meta-item" style={{ gridColumn: '1 / -1' }}><span className="meta-label">Teknoloji Yığını:</span> Python 3.10+ • Scikit-Learn • OpenCV • TensorFlow • NumPy • Matplotlib</div>
        </div>

        <h2>Yönetici Özeti ve Temel Bilimsel Soru</h2>
        <p>Bilgisayarlı görü sistemlerinde başarı çoğu zaman karmaşık sınıflandırıcı mimarilerine atfedilir. Ancak asıl kritik soru şudur: <em>Bir sınıflandırma probleminde nihai doğruluğu belirleyen faktör modelin parametre sayısı mıdır, yoksa giriş verisinden çıkarılan öznitelik manifoldunun geometrik kalitesi midir?</em></p>
        <p>Bu araştırma; derin yapay sinir ağlarının "kara kutu" doğasından kaçınarak, geleneksel matematiksel öznitelik çıkarıcılarının tümevarımsal önyargılarını (inductive bias) ve gürültü dirençlerini izole etmek amacıyla kontrollü bir deney ortamında yürütülmüştür.</p>

        <h2>İncelenen Öznitelik Temsilleri</h2>
        <ul>
          <li><strong>Normalize Ham Pikseller (Raw Pixels):</strong> Görüntü yoğunluk değerlerinin [0, 1] aralığına normalize edildiği temel referans vektörü (d = 784 / 1024 / 4096).</li>
          <li><strong>Yönlendirilmiş Gradyanlar Histogramı (HOG):</strong> Yerel kenar yönelim dağılımlarını 9 açısal dilimde toplayan, 4x4 hücre ve 2x2 blok normalizasyonu (L2-Hys) ile aydınlatma değişimlerine dirençli yapısal şekil çıkarıcısı.</li>
          <li><strong>Çok Ölçekli Mekansal Yerel İkili Örüntüler (MS-S-LBP):</strong> P=8/R=1.0, P=16/R=2.0 ve P=24/R=3.0 yarıçaplarında 4x4 mekansal ızgara ile mikrodoku ve yüzey örüntülerini yakalayan doku deskriptörü.</li>
        </ul>

        <h2>Kıyaslama Veri Kümeleri ve Konsolide Sonuçlar</h2>
        <p>Tüm deneylerde kontrollü karşılaştırma amacıyla sınıflandırıcı olarak <strong>Destek Vektör Makineleri (Linear SVM)</strong> sabit tutulmuştur:</p>
        <ul>
          <li><strong>Fashion-MNIST (Şekil / Silüet Odaklı):</strong> HOG %85,80 doğruluk ve 0.857 F1 skoru ile zirvede yer alırken, ham piksel %83,05'te, LBP ise %71,55'te kalmıştır.</li>
          <li><strong>CIFAR-10 (Karmaşık Doğal Nesneler):</strong> Ham piksel %38,00 doğruluk verirken, HOG kenar bilgisini koruyarak %46,20'ye ulaşmıştır.</li>
          <li><strong>KTH-TIPS (Doku / Yüzey Odaklı):</strong> Yüksek boyutlu doku varyasyonlarında Çok Ölçekli LBP, mikrodoku yapısını koruyarak en kararlı temsil gücünü sergilemiştir.</li>
        </ul>

        <h2>No Free Lunch Teoreminin Doğrulanması</h2>
        <p>Elde edilen ampirik sonuçlar makine öğrenmesindeki <em>"No Free Lunch"</em> ilkesini kesin olarak doğrulamaktadır: Evrensel olarak her senaryoda üstün tek bir öznitelik yöntemi yoktur. Nesnenin ayırt edici özelliği kontur ve silüet ise HOG; mikro yüzey yapısı ve pürüzlülük ise LBP matematiksel olarak tercih edilmelidir.</p>
      </>
    )
  },
  {
    id: "classification-methods-analysis",
    title: "Örüntü Tanımada Sınıflandırma Yöntemlerinin Nicel Karşılaştırmalı Analizi",
    subtitle: "Yapısal, Gerçek Dünya ve Doku Veri Setleri Üzerinde Farklı Makine Öğrenmesi Sınıflandırıcılarının HOG Tabanlı Değerlendirilmesi",
    category: "Örüntü Tanıma & Makine Öğrenmesi",
    shortDesc: "HOG öznitelik temsili sabit tutularak Linear SVM, KNN, Random Forest ve MLP algoritmalarının tümevarımsal önyargılarını ve genelleme sınırlarını karşılaştıran nicel analiz.",
    status: "Akademik",
    audience: null,
    owner: null,
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Akademik Araştırma & Karşılaştırmalı Algoritma Analizi</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Tamamlandı (Açık Kaynak & Tekrarlanabilir Deney Mimarisi)</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> Örüntü Tanıma • Makine Öğrenmesi • Algoritma Optimizasyonu</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Bağımsız Araştırmacı • Matematiksel Deney Tasarımı • Model Eğitimi & Analiz</div>
          <div className="meta-item"><span className="meta-label">Kaynak Kodu:</span> <a href="https://github.com/ersinsandal/Classification-Methods-Analysis" target="_blank" rel="noreferrer">github.com/ersinsandal/Classification-Methods-Analysis</a></div>
          <div className="meta-item" style={{ gridColumn: '1 / -1' }}><span className="meta-label">Teknoloji Yığını:</span> Python 3.10+ • Scikit-Learn • TensorFlow • OpenCV • Pandas • Seaborn</div>
        </div>

        <h2>Araştırma Motivasyonu ve Kontrollü Deney Paradigması</h2>
        <p>Bilgisayarlı görü ve örüntü tanıma literatüründe, öznitelik kalitesi ile sınıflandırma algoritmasının içsel kapasitesi sıklıkla birbirine karışmaktadır. Bu çalışmada öznitelik varyansı kaynaklı belirsizliği yok etmek adına <strong>HOG (Yönlendirilmiş Gradyanlar Histogramı)</strong> öznitelik çıkarımı tüm deneylerde <em>kesin olarak sabit tutulmuş</em>; dört farklı temel makine öğrenmesi algoritmasının saf matematiksel tepkileri incelenmiştir.</p>

        <h2>Kıyaslanan Sınıflandırma Paradigmaları</h2>
        <ul>
          <li><strong>Destek Vektör Makineleri (Linear SVM):</strong> Sınıflar arası ayrım marjinini maksimize eden dışbükey optimizasyon modeli.</li>
          <li><strong>K-En Yakın Komşu (KNN, k=5):</strong> Örnek tabanlı, parametrik olmayan yerel mesafe metriği.</li>
          <li><strong>Rastgele Orman (Random Forest, n=100):</strong> Çok sayıda karar ağacının oylamasına dayalı topluluk (ensemble) modeli.</li>
          <li><strong>Çok Katmanlı Algılayıcı (MLP):</strong> Doğrusal olmayan manifoldları öğrenebilen 128 gizli nöronlu yapay sinir ağı.</li>
        </ul>

        <h2>Veri Karakteristiği ve Ampirik Bulgular</h2>
        <ul>
          <li><strong>Fashion-MNIST (Doğrusal Ayrılabilir Rejim):</strong> Düzenli ve belirgin silüet verisinde dört model de neredeyse birebir aynı başarıyı göstermiştir (~%85.5 - %86.2 Doğruluk, Macro F1 ~0.858 - 0.865). Doğrusal ayrılabilir uzaylarda basit modeller karmaşık ağlarla yarışabilmektedir.</li>
          <li><strong>CIFAR-10 (Karmaşık Görsel Bağlam):</strong> Gerçek dünya sahnelerindeki doğrusal olmayan ilişkilerde MLP, çok katmanlı soyutlama kapasitesi sayesinde %47.80 doğruluğa ulaşarak doğrusal SVM ve ağaç tabanlı modelleri geride bırakmıştır.</li>
          <li><strong>KTH-TIPS (Boyut Laneti Rejimi - d = 34.596):</strong> Aşırı yüksek boyutlu doku sınıflandırmasında Linear SVM, marjin optimizasyonu sayesinde %64.81 doğruluk ve %70.89 kesinlik ile açık ara zirvede yer alırken; Öklid uzaklığına dayanan KNN boyut laneti nedeniyle çökerek %23.46 seviyesine gerilemiştir.</li>
        </ul>

        <h2>Hesaplama Karmaşıklığı ve Çıkarım (Test) Hızı</h2>
        <p>Eğitim süresi ve canlı test gecikmeleri kıyaslandığında; Linear SVM'in mikrosaniye düzeyindeki çıkarım hızıyla gerçek zamanlı gömülü sistemler için en optimize algoritma olduğu, KNN'in ise test anındaki yüksek hesaplama maliyeti nedeniyle pratik darboğazlar yarattığı nicel olarak kanıtlanmıştır.</p>
      </>
    )
  },
  {
    id: "contrast-enhancement-analysis",
    title: "Farklı Görüntü Modalitelerinde Uzamsal Alan Kontrast İyileştirme Tekniklerinin Karşılaştırmalı Kantitatif Analizi",
    subtitle: "Global Histogram Eşitleme (HE), Kontrast Sınırlı Uyarlamalı Histogram Eşitleme (CLAHE) ve Parlaklık Korunumlu Uyarlamalı Gama Düzeltme (BPAGC)",
    category: "Dijital Görüntü İşleme Araştırması",
    shortDesc: "8 farklı görüntü modalitesi üzerinde HE, CLAHE ve BPAGC algoritmalarını PSNR, SSIM ve Bileşik Skor ile değerlendirerek 'Görsel Algı vs. Matematiksel Sadakat' paradoksunu kanıtlayan araştırma.",
    status: "Akademik",
    audience: null,
    owner: null,
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Akademik Araştırma & Kantitatif Görüntü Kalite Analizi</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Tamamlandı (Açık Kaynak & Tekrarlanabilir Python Kütüphanesi)</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> Dijital Görüntü İşleme • Uzamsal Alan Algoritmaları • Görüntü Kalite Değerlendirmesi</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Bağımsız Araştırmacı • Matematiksel Formülasyon • Algoritma İmplementasyonu • Raporlama</div>
          <div className="meta-item"><span className="meta-label">Kaynak Kodu:</span> <a href="https://github.com/ersinsandal/Contrast-Enhancement-Analysis" target="_blank" rel="noreferrer">github.com/ersinsandal/Contrast-Enhancement-Analysis</a></div>
          <div className="meta-item" style={{ gridColumn: '1 / -1' }}><span className="meta-label">Teknoloji Yığını:</span> Python 3.10+ • OpenCV 4.8+ • NumPy • SciPy • Matplotlib • Scikit-Image</div>
        </div>

        <h2>Yönetici Özeti ve 'Tek Yöntem Her Şeye Uyar' Yanılgısı</h2>
        <p>Kontrast iyileştirme; bilgisayarlı görü ve hesaplamalı fotoğrafçılıkta en kritik ön işleme adımlarından biridir. Ancak endüstride ve literatürde sıklıkla düşülen en büyük yanılgı, tüm görüntülere tek bir algoritmanın uygulanabileceği (<em>one-size-fits-all</em>) varsayımıdır. Gerçek dünyada uzamsal alan kontrast algoritmalarının davranışı; aydınlatmaya, sensör dinamiğine ve modaliteye göre kökten farklılık gösterir.</p>
        <p>Bu araştırma, açık erişimli akademik veri tabanlarından derlenen <strong>8 farklı görüntü modalitesi</strong> (Doğal Manzara, Düşük Işık/Gece, Aşırı Parlak/Sisli, Medikal Röntgen/BT, Uydu/Hava Fotoğrafçılığı, Belge/Metin, Mikroskopi ve Yüz Görüntüleri) ve 15 temsilci test görüntüsü üzerinde yürütülmüştür.</p>

        <h2>İncelenen Yöntemler ve Renk Uzayı Mimarisi</h2>
        <p>Renkli görüntülerde kroma bozulmasını ve yapay renk kaymalarını önlemek amacıyla tüm algoritmalar <strong>YCrCb renk uzayında yalnızca parlaklık (Y) kanalına</strong> uygulanmıştır:</p>
        <ul>
          <li><strong>Global Histogram Eşitleme (HE):</strong> Kümülatif Dağılım Fonksiyonu (CDF) ile yoğunluk değerlerini dinamik aralığın tamamına yayar. Hızlıdır ancak yerel bağlamdan yoksun olduğu için düz alanlarda şiddetli gürültü patlamasına ve yapay parlamaya neden olur.</li>
          <li><strong>Kontrast Sınırlı Uyarlamalı HE (CLAHE):</strong> Görüntüyü 8x8 yerel bloklara böler, belirlenen eşik (clip limit = 2.0) üzerindeki pikselleri kırparak eşit dağıtır ve blok sınırlarını çift doğrusal enterpolasyonla birleştirir. Gürültüyü sınırlarken olağanüstü yerel detay sunar.</li>
          <li><strong>Parlaklık Korunumlu Uyarlamalı Gama Düzeltme (BPAGC):</strong> Görüntünün ortalama parlaklık istatistiklerinden dinamik gama türeten doğrusal olmayan güç yasası dönüşümüdür. Doğal tonları ve yapısal sadakati en yüksek oranda korur.</li>
        </ul>

        <h2>İki Büyük Bilimsel Keşif ve Bulgular</h2>
        <ul>
          <li><strong>Görsel Algı vs. Matematiksel Sadakat İkilemi:</strong> Global Histogram Eşitleme (HE) insan gözüne ilk bakışta çok çarpıcı ve kontrastı dramatik biçimde artmış gibi görünse de; MSE ve SSIM metriklerinde yapısal bilginin ağır biçimde tahrip edildiğini göstermiştir. Matematiksel sadakat ve yapısal korunumda BPAGC ve CLAHE üstünlük sağlamıştır.</li>
          <li><strong>Medikal Radyografide Klinik Teşhis Paradoksu:</strong> Göğüs röntgeni gibi klinik görüntülerde yüksek kontrast artışı hekimin lezyonu ayırt etmesini kolaylaştırırken, tam referanslı matematiksel metriklerde ceza puanı almaktadır. Çalışma, klinik fayda ile matematiksel metrikler arasındaki bu kritik ödünleşimi ortaya koymuştur.</li>
        </ul>
      </>
    )
  }
];
