import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  User, 
  GraduationCap, 
  Rocket, 
  Compass, 
  Target, 
  Globe, 
  Cpu, 
  Radio, 
  Users 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import './Pages.css';

const About = () => {
  const stats = [
    { title: "10+", label: "Proje ve Girişim", desc: "Teknoloji, yazılım, sosyal platformlar, dijital medya, yapay zekâ, e-spor ve sosyal etki alanlarında." },
    { title: "36.000+", label: "Dijital Kitle", desc: "Envision Station ekosistemindeki projeler aracılığıyla ulaşılan aktif dijital topluluk." },
    { title: "5+ Yıl", label: "Dijital Deneyim", desc: "Dijital medya, teknoloji, pazarlama ve topluluk yönetimi alanlarında aktif deneyim." },
    { title: "Liderlik", label: "Girişim & Organizasyon", desc: "Şirket, medya, gençlik hareketleri ve siyasi organizasyonlarda kurucu ve yönetici roller." },
  ];

  // Kişisel Biyografi Bölümleri
  const personalNav = [
    { id: "hakkimda-bolumu", label: "Hakkımda", icon: <User size={15} /> },
    { id: "egitim-ve-yolculuk", label: "Eğitim & Kariyer", icon: <GraduationCap size={15} /> },
    { id: "girisimcilik-ve-teknoloji", label: "Girişimcilik & Teknoloji", icon: <Rocket size={15} /> },
    { id: "yonetim-ve-felsefem", label: "Yönetim & Felsefem", icon: <Compass size={15} /> },
    { id: "gelecek-vizyonum", label: "Gelecek Vizyonum", icon: <Target size={15} /> },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="container page-spacing">
      <PageHeader 
        title="Merhaba, ben Ersin Sandal." 
        subtitle="Bilgisayar mühendisliği, teknoloji girişimciliği, stratejik yönetim, dijital medya ve organizasyon alanlarında faaliyet gösteren; fikirleri sürdürülebilir yapılara dönüştürmeyi amaçlayan bir girişimci ve ürün geliştiriciyim."
      />
      
      {/* Quick Navigation Shortcut Buttons */}
      <div className="about-quick-nav-wrapper">
        <span className="about-quick-nav-title">Bölümlere Hızlı Geçiş</span>
        <div className="about-quick-nav">
          {/* Kişisel Bölümler */}
          {personalNav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="quick-nav-btn"
              type="button"
            >
              <span className="quick-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}

          {/* Dikey Ayırıcı */}
          <div className="quick-nav-divider" aria-hidden="true"></div>

          {/* Özel Vurgulu Envision Station Butonu */}
          <button
            onClick={() => scrollToSection("envision-station-showcase")}
            className="quick-nav-btn envision-special-btn"
            type="button"
          >
            <span className="quick-nav-icon"><Globe size={16} /></span>
            <span>ENVISION STATION</span>
          </button>
        </div>
      </div>

      {/* 1. PENCERE: KİŞİSEL BİYOGRAFİ & VİZYON KARTI */}
      <div className="about-content glass card-padding">
        <div className="about-text">
          
          {/* Bölüm 1: Hakkımda */}
          <section id="hakkimda-bolumu" className="about-section">
            <div className="about-section-header">
              <span className="about-section-icon"><User size={22} /></span>
              <h2 className="about-section-title">Hakkımda</h2>
            </div>
            <p>
              <strong>14 Eylül 2002</strong> tarihinde dünyaya geldim. Yaşamımı ve çalışmalarımın önemli bir bölümünü Antalya'nın Alanya ilçesinde sürdürüyorum. Eğitim hayatım boyunca edindiğim teknik bilgi birikimini girişimcilik, stratejik planlama, kurumsal iletişim ve organizasyon yönetimiyle birleştirerek kendime çok yönlü bir çalışma alanı oluşturdum.
            </p>
            <p>
              Kendimi hiçbir zaman yalnızca bir mesleğin veya uzmanlık alanının sınırları içerisinde değerlendirmedim. Bilgisayar mühendisliği benim için yalnızca teknik bir disiplin değil; sistemleri anlamanın, sorunları analiz etmenin ve karmaşık süreçlere uygulanabilir çözümler geliştirmenin temelini oluşturuyor. Bununla birlikte, bir fikrin başarılı olabilmesi için teknik yeterliliğin tek başına yeterli olmadığına inanıyorum. Doğru stratejinin belirlenmesi, kaynakların etkin yönetilmesi, insan ilişkilerinin geliştirilmesi ve oluşturulan değerin doğru kitlelerle buluşturulması da en az üretim süreci kadar önem taşıyor.
            </p>
            <p>
              Bu anlayış doğrultusunda, üniversite yıllarımdan itibaren kendimi yalnızca akademik çalışmalarla sınırlandırmak yerine farklı disiplinlerde sorumluluk üstlenmeye yöneldim. Yazılım geliştirme, teknoloji projeleri, medya yönetimi, öğrenci organizasyonları, e-spor toplulukları ve dijital girişimler; zaman içerisinde birbirinden bağımsız uğraşlar olmaktan çıkarak profesyonel kimliğimin birbirini tamamlayan parçalarına dönüştü.
            </p>
            <p>
              Çalışmalarımın merkezinde daima aynı düşünce yer aldı: Bir fikrin değerini belirleyen unsur, yalnızca ne kadar yenilikçi olduğu değil; ne ölçüde hayata geçirilebildiği, insanlara ulaşabildiği ve zaman içerisinde varlığını sürdürebildiğidir.
            </p>
          </section>

          {/* Bölüm 2: Eğitim Hayatım ve Profesyonel Yolculuğum */}
          <section id="egitim-ve-yolculuk" className="about-section">
            <div className="about-section-header">
              <span className="about-section-icon"><GraduationCap size={22} /></span>
              <h2 className="about-section-title">Eğitim Hayatım ve Profesyonel Yolculuğum</h2>
            </div>
            <p>
              Lise eğitimimi 2016-2020 yılları arasında Hasan Çolak Anadolu Lisesi'nde tamamladım. 2020 yılında Aydın Adnan Menderes Üniversitesi Bilgisayar Mühendisliği Bölümünde yükseköğrenim hayatıma başladım. 2021 yılında eğitimime Alanya Alaaddin Keykubat Üniversitesinde devam etme kararı aldım. Burada yazılım mühendisliği, veri tabanı sistemleri, bilgisayar ağları, yapay zekâ, bilgisayarlı görü ve sistem tasarımı gibi alanlarda akademik bilgi ve deneyim kazandım. Not ortalamamı her zaman 3.50'nin üzerinde tutma isteğim ve hırsım, beni <strong className="text-highlight">3.54 ortalama</strong> ile ödüllendirdi.
            </p>
            <p>
              Ancak üniversite hayatımı şekillendiren en önemli unsurlardan biri, teorik eğitimin yanında gerçek projeler geliştirme ve sorumluluk üstlenme konusundaki kararlılığım oldu. Bir mühendislik öğrencisinin yalnızca teknik problemleri çözebilmesinin değil, aynı zamanda bir projeyi yönetebilmesinin, ekip içerisindeki farklı yetkinlikleri koordine edebilmesinin ve geliştirilen çözümü gerçek dünyanın ihtiyaçlarıyla ilişkilendirebilmesinin önemli olduğuna inanarak hareket ettim.
            </p>
            <p>
              Bu yaklaşım beni üniversite yıllarımda topluluk oluşturma ve organizasyon yönetimi alanlarına da yönlendirdi. Alanya Alaaddin Keykubat Üniversitesi bünyesinde e-spor topluluğunun kuruluşunda öncü rol üstlenerek farklı ilgi alanlarına sahip öğrencilerin ortak bir organizasyon çatısı altında buluşmasına yönelik çalışmalar yürüttüm. Bu süreç, topluluk yönetimi, etkinlik planlama, temsil, ekip koordinasyonu ve liderlik konularında edindiğim deneyimlerin önemli bir bölümünü oluşturdu. Ayrıca üniversite içinde farklı alanlardaki diğer iki topluluğun da kurulmasında bizzat anahtar rol üstlendim.
            </p>
            <p>
              Zaman içerisinde bu deneyimlerimi yalnızca öğrenci faaliyetleriyle sınırlı tutmayarak bağımsız girişim ve organizasyonlara taşımaya başladım. E-spor alanındaki çalışmalarımı <strong className="text-highlight">Alanya Taudra E-Sports (ATE)</strong> gibi marka ve topluluk projeleriyle geliştirirken, dijital dünyada insanların ortak ilgi alanları etrafında bir araya gelebildiği sürdürülebilir yapılar oluşturma düşüncesine odaklandım.
            </p>
            <p>
              Profesyonel kariyerimdeki önemli dönüm noktalarından biri, Kasım 2024'te <strong className="text-highlight">Manşet Alanya'da Yayın Yönetmeni</strong> olarak görev almaya başlamam oldu. Bu görev, teknoloji alanında edindiğim analitik yaklaşımı medya sektörünün operasyonel, yönetsel ve iletişim odaklı dinamikleriyle birleştirmeme olanak sağladı.
            </p>
            <p>
              Yayın yönetimi kapsamında dijital içeriklerin planlanması, canlı yayın süreçlerinin koordinasyonu, yayın organizasyonları, teknik prodüksiyon ve medya operasyonlarının yürütülmesi gibi farklı alanlarda sorumluluk üstlendim. Yerel gündemden eğitime, iş dünyasından toplumsal konulara uzanan yayın çalışmalarında, bilginin doğru biçimde sunulmasının yanında yayınların teknik ve organizasyonel bütünlüğünün sağlanmasına da odaklandım.
            </p>
            <p>
              Medya sektöründeki çalışmalarım bana önemli bir bakış açısı kazandırdı: Başarılı bir organizasyonun arkasında yalnızca görünen yüzler değil, doğru planlanmış süreçler, güçlü bir koordinasyon ve birbirini tamamlayan sorumluluk alanları bulunur. Bugün proje yönetimine yaklaşımımda bu deneyimlerin önemli bir yeri vardır.
            </p>
            <p>
              2025 yılında yazılım alanındaki mesleki gelişimimi <strong>ARGEYA</strong> bünyesinde gerçekleştirdiğim stajla destekledim. Akademik çalışmalarımın yanında profesyonel yazılım geliştirme süreçlerini gözlemleme ve uygulama fırsatı bulduğum bu dönem, teknik bilgi birikimimi iş dünyasının çalışma prensipleriyle ilişkilendirmeme katkı sağladı.
            </p>
          </section>

          {/* Bölüm 3: Girişimcilik ve Teknoloji Çalışmalarım */}
          <section id="girisimcilik-ve-teknoloji" className="about-section">
            <div className="about-section-header">
              <span className="about-section-icon"><Rocket size={22} /></span>
              <h2 className="about-section-title">Girişimcilik ve Teknoloji Çalışmalarım</h2>
            </div>
            <p>
              <strong>15 Nisan 2025</strong> tarihinde, yazılım ve teknoloji alanındaki girişimlerimi ortak bir yapı altında geliştirmek amacıyla <strong className="text-highlight">SliferSoft'u</strong> kurdum.
            </p>
            <p>
              SliferSoft'u oluştururken hedefim yalnızca yazılım üreten bir yapı meydana getirmek değildi. Farklı ihtiyaçlara çözüm sunabilecek dijital ürünlerin tasarlanabildiği, geliştirilebildiği ve zaman içerisinde kendi kullanıcı topluluklarına ulaşabildiği bir teknoloji girişimi oluşturmaktı.
            </p>
            <p>
              Bu doğrultuda web tabanlı platformlar, yönetim sistemleri, dijital topluluk uygulamaları ve farklı sektörlere yönelik yazılım çözümleri üzerinde çalışmaya başladım. Geliştirdiğim projelerde teknik mimarinin yanı sıra kullanıcı deneyimi, uygulanabilirlik, operasyonel sürdürülebilirlik ve ürünün gelecekteki gelişim potansiyelini de ön planda tuttum.
            </p>
            <p>
              Farklı kullanıcı ihtiyaçlarına, sosyal etkileşim biçimlerine ve dijital topluluk modellerine yönelik girişim fikirleri üzerinde çalışmayı sürdürüyorum. Her projeyi yalnızca teknik bir üretim süreci olarak değil; ihtiyaç analizi, stratejik konumlandırma, ürün tasarımı, geliştirme ve operasyon aşamalarından oluşan bütünsel bir girişim olarak değerlendiriyorum.
            </p>
            <p>
              SliferSoft benim için tek bir ürünün veya yazılım projesinin adı değil; zaman içerisinde farklı dijital ürünlerin geliştirilebileceği, bağımsız kimlikler kazanabileceği ve ortak bir teknolojik altyapı ile yönetim anlayışından yararlanabileceği bir girişim çatısıdır.
            </p>
          </section>

          {/* Bölüm 4: Yönetim Anlayışım ve Kişisel Felsefem */}
          <section id="yonetim-ve-felsefem" className="about-section">
            <div className="about-section-header">
              <span className="about-section-icon"><Compass size={22} /></span>
              <h2 className="about-section-title">Yönetim Anlayışım ve Kişisel Felsefem</h2>
            </div>
            <p>
              Kişisel ve profesyonel hayatımda stratejik düşünmeye, bağımsız karar verebilmeye ve uzun vadeli hedefler doğrultusunda hareket etmeye önem veriyorum.
            </p>
            <p>
              Bir projeyle karşılaştığımda öncelikle onun teknik olarak nasıl gerçekleştirilebileceğinden ziyade neden gerekli olduğunu, hangi ihtiyaca karşılık geldiğini, kimlere hitap ettiğini ve zaman içerisinde nasıl gelişebileceğini anlamaya çalışıyorum. Çünkü doğru tanımlanmamış bir soruna getirilen teknik açıdan başarılı bir çözümün dahi gerçek anlamda değer üretmeyebileceğine inanıyorum.
            </p>
            <p>
              Bu nedenle çalışmalarımda ürün geliştirme, iş analizi, proje yönetimi, organizasyon ve strateji oluşturma süreçlerine özel bir ilgi duyuyorum. Teknik ayrıntıları anlayabilmenin sağladığı avantajı, bütünü görebilen bir yönetim yaklaşımıyla birleştirmeyi hedefliyorum.
            </p>
            <p>
              İnsan ilişkilerini ve iletişimi de bu yaklaşımın ayrılmaz bir parçası olarak görüyorum. Farklı düşüncelere sahip insanları bir araya getirmek, ortak hedefler belirlemek, sorumlulukları organize etmek ve bir ekibin ortaya koyduğu çalışmayı somut sonuçlara dönüştürmek benim için üretmenin önemli boyutlarından biridir.
            </p>
            <p>
              Liderliği yalnızca karar veren kişi olmakla değil; sorumluluk üstlenmek, belirsizlik karşısında yön belirlemek ve birlikte çalışılan insanların yetkinliklerinden doğru biçimde yararlanabilmekle ilişkilendiriyorum.
            </p>
            <p>
              Kendimi tamamlanmış bir başarı hikâyesinin sahibi olarak değil, hedeflerini bilinçli biçimde büyüten ve bu hedefler doğrultusunda sürekli gelişmeye çalışan bir girişimci olarak değerlendiriyorum. Öğrenmenin, değişime uyum sağlamanın ve gerektiğinde mevcut yaklaşımları yeniden sorgulayabilmenin kalıcı başarının temel koşullarından olduğuna inanıyorum.
            </p>
            <p>
              Benim için önemli olan yalnızca fırsatları değerlendirmek değil, gerektiğinde yeni fırsatların ortaya çıkabileceği sistemleri ve organizasyonları da inşa edebilmektir.
            </p>
          </section>

          {/* Bölüm 5: Gelecek Vizyonum */}
          <section id="gelecek-vizyonum" className="about-section">
            <div className="about-section-header">
              <span className="about-section-icon"><Target size={22} /></span>
              <h2 className="about-section-title">Gelecek Vizyonum</h2>
            </div>
            <p>
              Uzun vadeli hedefim; teknoloji, strateji, medya ve organizasyon alanlarında edindiğim bilgi ve deneyimleri bir araya getirerek kalıcı değer üretebilen şirketler, dijital platformlar ve güçlü topluluklar oluşturmaktır.
            </p>
            <p>
              Bu doğrultuda yalnızca mevcut teknolojileri takip eden değil, yeni ihtiyaçları öngörebilen; yalnızca ürün geliştiren değil, bu ürünlerin etrafında sürdürülebilir iş modelleri ve organizasyonlar oluşturabilen bir girişimcilik anlayışını benimsiyorum.
            </p>
            <p>
              Benim için başarı, tek bir projenin tamamlanmasıyla veya belirli bir unvana ulaşılmasıyla sınırlı değildir. Asıl başarı, ortaya konulan çalışmaların zaman içerisinde gelişebilmesi, kendi ayakları üzerinde durabilmesi ve onları başlatan kişinin ötesinde de değer üretmeye devam edebilmesidir.
            </p>
            <p>
              Bugün attığım her adımı, yalnızca mevcut hedeflerimin değil, gelecekte üstlenmek istediğim daha büyük sorumlulukların da bir hazırlığı olarak görüyorum.
            </p>
          </section>

        </div>
      </div>

      {/* 2. PENCERE: ÖZEL VE AYRI ENVISION STATION VİTRİNİ */}
      <div id="envision-station-showcase" className="envision-showcase-window glass">
        <div className="envision-window-glow" aria-hidden="true"></div>

        <div className="envision-header-group">
          <h2 className="envision-main-title">
            ENVISION STATION
          </h2>
          <span className="envision-subtitle-tag">Vizyonun Ortak Merkezi</span>
        </div>

        <div className="envision-body-text">
          <p>
            Zaman içerisinde teknoloji, medya, topluluk yönetimi ve girişimcilik alanlarında yürüttüğüm çalışmaların birbirinden farklı görünmesine rağmen aynı düşünsel temelde birleştiğini fark ettim.
          </p>
          <p>
            Bu bütünlüğü ifade etmek amacıyla <strong className="text-highlight">Envision Station</strong> vizyonunu oluşturdum.
          </p>
          <p>
            Envision Station, farklı disiplinlerde geliştirdiğim fikirlerin, projelerin, girişimlerin ve organizasyonların ortak stratejik merkezini temsil ediyor. Tek bir şirketi, ürünü veya sektörü tanımlamaktan ziyade, üretim anlayışımın ve uzun vadeli hedeflerimin bir araya geldiği daha geniş bir yapıyı ifade ediyor.
          </p>

          {/* 3 Sütunlu Stratejik Yapı Mimarisi Görsel Kartları */}
          <div className="envision-ecosystem-grid">
            <div className="envision-eco-card">
              <div className="envision-eco-icon"><Cpu size={24} /></div>
              <h4>Teknoloji & Yazılım Mimarisi</h4>
              <p>Ölçeklenebilir dijital ürünler, yazılım mühendisliği, sistem altyapısı ve yenilikçi çözümler üreten teknik omurga.</p>
            </div>
            <div className="envision-eco-card">
              <div className="envision-eco-icon"><Radio size={24} /></div>
              <h4>Medya & Stratejik İletişim</h4>
              <p>Dijital yayıncılık, teknik prodüksiyon, kurumsal temsil ve üretilen değerin kitlelere ulaştırılmasını sağlayan operasyonel dinamikler.</p>
            </div>
            <div className="envision-eco-card">
              <div className="envision-eco-icon"><Users size={24} /></div>
              <h4>Topluluk & Organizasyon Yönetimi</h4>
              <p>Ortak paydada buluşan kitle ağları, sivil inisiyatifler, sosyal etkileşim ve sürdürülebilir yönetim zeminleri.</p>
            </div>
          </div>

          <p>
            Bu yapıda teknoloji ve yazılım odaklı üretimler işin teknik ve operasyonel merkezinde konumlanırken; dijital medya, topluluk yönetimi ve stratejik organizasyonlar birbirini besleyen bağımsız eksenler olarak gelişimlerini sürdürüyor.
          </p>
          <p>
            Envision Station'ın temelinde, birbirinden bağımsız görünen çalışmalar arasında stratejik bağlar kurabilme düşüncesi bulunuyor. Teknolojik bir ürünün güçlü bir iletişim stratejisine, bir topluluğun sürdürülebilir bir dijital altyapıya, bir medya organizasyonunun ise etkin bir yönetim sistemine ihtiyaç duyabileceğine inanıyorum.
          </p>
          <p>
            Farklı alanlarda edindiğim deneyimleri birbirinden kopuk faaliyetler olarak değerlendirmek yerine, birbirini besleyen yetkinlikler ve gelişim fırsatları olarak görüyorum.
          </p>
          <p>
            Bu nedenle Envision Station benim için yalnızca bugünkü çalışmalarımı tanımlayan bir kavram değil; gelecekte inşa etmek istediğim girişimcilik ekosisteminin de düşünsel temelidir.
          </p>
        </div>

        {/* Özel Ekosistem Alıntısı */}
        <blockquote className="premium-quote envision-quote">
          "Bir fikri yalnızca hayal etmek değil; onu planlamak, geliştirmek, insanlarla buluşturmak ve gerçek bir yapıya dönüştürmek."
        </blockquote>

        <div className="cta-container">
          <Link to="/projeler" className="btn-primary envision-cta-btn">
            ENVISION STATION HAKKINDA DAHA FAZLA BİLGİ
          </Link>
        </div>
      </div>

      {/* 3. PENCERE: HIZLI BİLGİLER */}
      <div className="fast-facts-section">
        <h2 className="section-title">Hızlı Bilgiler</h2>
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="stat-card glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="stat-title text-gradient">{stat.title}</h3>
              <h4 className="stat-label">{stat.label}</h4>
              <p className="stat-desc">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
