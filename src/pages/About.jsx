import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import './Pages.css'; // Shared CSS for standard pages

const About = () => {
  const stats = [
    { title: "10+", label: "Proje ve Girişim", desc: "Teknoloji, yazılım, sosyal platformlar, dijital medya, yapay zekâ, e-spor ve sosyal etki alanlarında." },
    { title: "36.000+", label: "Dijital Kitle", desc: "Envision Station ekosistemindeki projeler aracılığıyla ulaşılan aktif dijital topluluk." },
    { title: "5+ Yıl", label: "Dijital Deneyim", desc: "Dijital medya, teknoloji, pazarlama ve topluluk yönetimi alanlarında aktif deneyim." },
    { title: "Liderlik", label: "Girişim & Organizasyon", desc: "Şirket, medya, gençlik hareketleri ve siyasi organizasyonlarda kurucu ve yönetici roller." },
  ];

  return (
    <div className="container page-spacing">
      <PageHeader 
        title="Merhaba, ben Ersin Sandal." 
        subtitle="Bilgisayar mühendisliği öğrencisi, teknoloji odaklı girişimci, ürün geliştirici ve dijital medya profesyoneliyim."
      />
      
      <div className="about-content glass card-padding">
        <div className="about-text">
          <p>Teknik altyapımı; stratejik düşünme, ürün geliştirme, proje yönetimi, dijital iletişim, topluluk oluşturma ve liderlik deneyimlerimle bir araya getirerek fikirleri gerçek ve sürdürülebilir yapılara dönüştürmeye odaklanıyorum.</p>
          <p>Benim için teknoloji yalnızca kod yazmak veya çalışan bir yazılım geliştirmek anlamına gelmiyor. Bir ürünün arkasındaki problemi doğru anlamanın, kullanıcı deneyimini tasarlamanın, doğru stratejiyi oluşturmanın, güçlü bir marka yaratmanın ve o ürünü insanlarla buluşturmanın en az teknik geliştirme kadar önemli olduğuna inanıyorum.</p>
          <p>Bu yaklaşım doğrultusunda geliştirdiğim projeleri <strong className="text-highlight">Envision Station</strong> isimli vizyon ve üretim merkezi altında bir araya getiriyorum.</p>
          <p>Envision Station; teknoloji girişimlerinden sosyal platformlara, dijital medya projelerinden topluluk hareketlerine kadar farklı alanlarda geliştirdiğim çalışmaların ortak stratejik merkezini oluşturuyor.</p>
          <p>Teknoloji ve yazılım alanındaki çalışmalarımı ağırlıklı olarak kurucusu olduğum <strong className="text-highlight">SliferSoft</strong> üzerinden yürütürken; medya, gençlik, topluluk ve sosyal etki alanlarında da aktif olarak çalışmalar gerçekleştiriyorum.</p>
          <p>Aynı zamanda <strong className="text-highlight">Manşet Alanya’da Yayın Yönetmeni</strong> olarak dijital yayıncılık ve medya yönetimi alanında görev yapıyor; gençlik organizasyonları ve yerel siyasi çalışmalar içerisinde aktif sorumluluklar üstleniyorum.</p>
          <p>Farklı disiplinlerde yürüttüğüm bütün çalışmaların ortak noktası aynı:</p>
          <blockquote className="premium-quote">
            "Bir fikri yalnızca hayal etmek değil; onu planlamak, geliştirmek, insanlarla buluşturmak ve gerçek bir yapıya dönüştürmek."
          </blockquote>
          <p>Hedefim; teknoloji, strateji, medya ve topluluk gücünü bir araya getirerek yalnızca dijital ürünler değil, zaman içerisinde kendi ekosistemlerini oluşturabilecek güçlü ve sürdürülebilir platformlar geliştirmek.</p>
        </div>
        
        <div className="cta-container">
          <Link to="/projeler" className="btn-primary">Envision Station Hakkında Daha Fazla Bilgi</Link>
        </div>
      </div>

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
