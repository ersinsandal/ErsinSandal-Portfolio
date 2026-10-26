import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import './Pages.css';
import './Expertise.css'; // Add a specific CSS for this page

const Expertise = () => {
  const domains = [
    { title: "Proje Yönetimi & Ürün Stratejisi", desc: "Fikir aşamasındaki projelerin analiz edilmesi, ürün kapsamının oluşturulması, gereksinimlerin belirlenmesi, özelliklerin önceliklendirilmesi ve geliştirme süreçlerinin koordine edilmesi." },
    { title: "Teknoloji Girişimciliği", desc: "Teknoloji tabanlı fikirlerin yalnızca teknik proje olarak değil, kullanıcı ihtiyacı, marka, büyüme ve sürdürülebilirlik perspektifleriyle değerlendirilmesi." },
    { title: "Dijital Medya & Yayıncılık", desc: "Dijital haber yayıncılığı, içerik stratejisi, sosyal medya, gündem yönetimi ve dijital medya operasyonları." },
    { title: "Dijital Pazarlama", desc: "Sosyal medya yönetimi, dijital kampanyalar, marka iletişimi, hedef kitle geliştirme ve organik büyüme stratejileri." },
    { title: "Yapay Zekâ ile Verimlilik", desc: "Yapay zekâ araçlarının ürün araştırması, analiz, fikir geliştirme, yazılım üretimi, prototipleme, içerik oluşturma ve operasyon süreçlerinde kullanılması." },
    { title: "Topluluk Yönetimi", desc: "Dijital ve fiziksel toplulukların oluşturulması, büyütülmesi, etkileşim stratejilerinin geliştirilmesi ve organizasyon süreçlerinin yönetilmesi." },
    { title: "Yazılım Proje Koordinasyonu", desc: "Teknik geliştirme süreçleriyle ürün ihtiyaçları arasındaki bağlantının kurulması, gereksinimlerin tanımlanması ve yazılım projelerinin ürün perspektifiyle yönetilmesi." },
    { title: "Liderlik & Organizasyon", desc: "Şirketlerden üniversite topluluklarına, gençlik organizasyonlarından medya ve siyasi yapılara kadar farklı ekip ve organizasyonlarda yönetim deneyimi." },
    { title: "Kamuoyu & Stratejik İletişim", desc: "Medya, gençlik hareketleri ve siyasi organizasyonlardan elde edilen deneyim doğrultusunda farklı hedef kitlelere yönelik iletişim stratejileri geliştirme." },
  ];

  const techSkills = [
    {
      category: "Programming & Development",
      skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"]
    },
    {
      category: "Frameworks & Technologies",
      skills: ["Spring Boot", "React", "Next.js", "REST API", "MySQL"]
    },
    {
      category: "Data & Artificial Intelligence",
      skills: ["Machine Learning Fundamentals", "Computer Vision", "SVM", "HOG", "LBP", "Data Analysis", "Modern Data Systems", "Data Warehousing"]
    },
    {
      category: "Networking & IoT",
      skills: ["Computer Networks", "LoRa", "IoT Fundamentals", "ESP32"]
    },
    {
      category: "Product & Design",
      skills: ["Product Strategy", "Project Planning", "Requirements Analysis", "UI/UX Fundamentals", "Figma", "Adobe XD"]
    },
    {
      category: "AI & Productivity",
      skills: ["AI-Assisted Development", "Prompt Engineering", "AI-Assisted Research", "Rapid Prototyping", "Product Ideation", "Workflow Optimization"]
    }
  ];

  return (
    <div className="container page-spacing">
      <PageHeader 
        title="Uzmanlık & Yetkinlikler" 
        subtitle="Ürün, teknoloji, medya ve iletişimin kesişim noktasında bir yetkinlik profili."
      />

      <section className="expertise-section">
        <h2 className="section-title">Uzmanlık Alanları</h2>
        <div className="expertise-grid">
          {domains.map((domain, idx) => (
            <motion.div 
              key={idx}
              className="expertise-card glass"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <h3 className="expertise-title">{domain.title}</h3>
              <p className="expertise-desc">{domain.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="tech-section" style={{ marginTop: '6rem' }}>
        <h2 className="section-title">Teknik Yetkinlikler</h2>
        <p className="tech-intro">
          Teknik altyapı, bütünsel ürün ve teknoloji geliştirme yetkinliğinin güçlü bir parçası olarak konumlandırılmaktadır.
        </p>
        <div className="tech-grid">
          {techSkills.map((group, idx) => (
            <motion.div 
              key={idx}
              className="tech-category glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="tech-category-title text-gradient">{group.category}</h3>
              <ul className="tech-list">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="tech-item">{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Expertise;
