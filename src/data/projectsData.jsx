import React from 'react';
import logoSlifersoft from '../assets/slifersoft.png';
import logoAnketest from '../assets/anketest.png';
import logoVetha from '../assets/vetha.png';
import logoFloresan from '../assets/floresan.png';
import logoAte from '../assets/ate.png';
import logoNaviSecret from '../assets/navisecret.svg';
import logoStorySepeti from '../assets/storysepeti.png';
import logoSliferJump from '../assets/sliferjump.png';
import logoLuckyLick from '../assets/lucklick.png';

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
    id: "ate",
    title: "ATE",
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
    id: "b2x",
    title: "B2X",
    subtitle: "LoRa Tabanlı Düşük Güçlü Uzun Mesafe Haberleşme Sistemi",
    category: "LoRa Haberleşme Sistemi",
    shortDesc: "Düşük güçlü, uzun menzilli cihazlar arası veri aktarımına yönelik nesnelerin interneti projesi.",
    status: "Tamamlandı",
    audience: null,
    owner: null,
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Donanım + ağ haberleşme prototipi</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Tamamlandı</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> Nesnelerin İnterneti • Bilgisayar Ağları • Kablosuz Haberleşme</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Araştırma • Sistem Tasarımı • Teknik Geliştirme</div>
        </div>

        <h2>B2X Nedir?</h2>
        <p>B2X, düşük güç tüketimiyle uzun mesafeli veri aktarımı gerçekleştirmek amacıyla LoRa haberleşme teknolojisi üzerine geliştirilen teknik sistemdir. Bu proje web sitesi veya mobil uygulama değildir. Fiziksel cihazlar arasında kablosuz veri aktarımına odaklanan <strong>nesnelerin interneti ve ağ haberleşme projesidir.</strong></p>

        <h2>Haberleşme Mimarisi</h2>
        <p>Temel sistem: <strong>Sensör / Veri Kaynağı → Mikrodenetleyici → LoRa Verici → Kablosuz Kanal → LoRa Alıcı → Veri İşleme</strong> şeklinde uçtan uca iletişim zincirine sahiptir.</p>

        <h2>Neden LoRa?</h2>
        <p>LoRa özellikle düşük güç tüketimi, uzun menzil, küçük veri paketleri ve düşük bant genişliği gereksinimi nedeniyle nesnelerin interneti uygulamalarında kullanılmaktadır. Wi-Fi yüksek veri hızına sahip olsa da güç tüketimi ve kapsama alanı açısından her senaryo için uygun değildir.</p>

        <h2>Kullanım Alanları</h2>
        <p>Akıllı tarım, çevresel sensörler, kırsal veri toplama, uzak ekipman izleme, tesis telemetrisi ve düşük güçlü nesnelerin interneti sistemleri.</p>
      </>
    )
  },
  {
    id: "bilgisayarli-goru",
    title: "Bilgisayarlı Görü Özellik Karşılaştırması",
    subtitle: "Makine Öğrenmesi ve Görüntü Sınıflandırma Araştırması",
    category: "Makine Öğrenmesi Araştırması",
    shortDesc: "Ham piksel, HOG ve LBP özelliklerinin farklı görüntü veri setlerindeki sınıflandırma başarısını karşılaştıran deneysel çalışma.",
    status: "Tamamlandı",
    audience: null,
    owner: null,
    content: (
      <>
        <div className="detail-meta-grid">
          <div className="meta-item"><span className="meta-label">Proje Türü:</span> Deneysel makine öğrenmesi çalışması</div>
          <div className="meta-item"><span className="meta-label">Durum:</span> Tamamlandı</div>
          <div className="meta-item"><span className="meta-label">Alan:</span> Bilgisayarlı Görü • Makine Öğrenmesi • Veri Analizi</div>
          <div className="meta-item"><span className="meta-label">Rolüm:</span> Deney Tasarımı • Modelleme • Sonuç Analizi</div>
        </div>

        <h2>Projenin Amacı</h2>
        <p>Çalışmanın amacı farklı görüntü temsil yöntemlerinin aynı sınıflandırıcı üzerindeki etkisini ölçmektir. Temel soru: <strong>Bir görüntü sınıflandırma sisteminde ham piksel, şekil tabanlı ve doku tabanlı özellikler farklı veri setlerinde nasıl davranır?</strong></p>

        <h2>Veri Setleri ve Özellik Çıkarma Yöntemleri</h2>
        <ul>
          <li><strong>Fashion-MNIST:</strong> Moda ürünlerinden oluşan gri tonlamalı veri seti.</li>
          <li><strong>CIFAR-10:</strong> Deney için gri tonlamalı hale getirilen genel nesne görüntüleri.</li>
          <li><strong>DTD:</strong> Doku özellikleri üzerine oluşturulmuş Describable Textures Dataset.</li>
        </ul>
        <p>Özellik çıkarma yöntemleri olarak Ham Piksel, HOG (kenar yönelimleri) ve LBP (doku karakteristiği) kullanılmıştır.</p>

        <h2>Sınıflandırıcı ve Deney Yapısı</h2>
        <p>Bütün deneylerde ortak olarak <strong>Destek Vektör Makineleri</strong> kullanılmıştır. Böylece özellik çıkarma yöntemlerinin sınıflandırma performansı üzerindeki etkisi daha kontrollü biçimde karşılaştırılmıştır. Eğitim verisi 10.000 örnek, test verisi 2.000 örnektir.</p>

        <h2>Fashion-MNIST Sonuçları</h2>
        <p><strong>Ham Piksel: %83,05</strong> | <strong>HOG: %85,80</strong> | <strong>LBP: %71,55</strong></p>
        <p>Bu veri setinde en yüksek performans HOG ile elde edilmiştir. Sonuç, nesnenin geometrik şeklinin önemli olduğu görüntülerde kenar yönelim bilgisinin güçlü bir temsil sağlayabildiğini göstermektedir.</p>
        <p>Bu çalışma yalnızca yüksek doğruluk elde etmeye değil, <strong>özellik mühendisliği ile veri karakteristiği arasındaki ilişkiyi</strong> anlamaya odaklanmaktadır.</p>
      </>
    )
  },
  {
    id: "ilanzeka",
    title: "İlanZeka",
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
    id: "lucklick",
    title: "LuckyLick",
    logo: logoLuckyLick,
    blurLogo: false,
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

        <h2>LuckyLick Nedir?</h2>
        <p>LuckyLick, internet servis sağlayıcı (ISP) düzeyindeki sansür ve DNS zehirlenmesi mekanizmalarının <strong>üçüncü taraf bir VPN veya tarayıcı eklentisi olmadan</strong> nasıl aşılabileceğini araştıran deneysel bir siber güvenlik projesidir.</p>
        <p>Proje şu temel tezi kanıtlar: <em>Standart bir web tarayıcısından, sıfır harici eklenti ve sıfır VPN ile yalnızca sunucu taraflı DNS tünellemesi ve HTTPS ters vekil yönlendirmesiyle engellenmiş CDN içeriklerine doğrudan erişilebilir.</em></p>

        <h2>Neden Bu Test Alanı Seçildi?</h2>
        <p>Araştırma, ISP'ler tarafından en katı biçimde engellenen ve aynı zamanda çok katmanlı CDN ağları, süre sınırlı imzalı tokenler ve uyarlamalı akış manifestoları barındıran zorlu platformları kıyaslama testi (benchmark) olarak seçmiştir. Amaç, en yüksek sürtünmeli trafik tünelleme senaryosunda algoritmanın başarısını test etmektir.</p>

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
  }
];
