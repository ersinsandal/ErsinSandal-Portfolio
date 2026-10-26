import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import './Pages.css';

const Media = () => {
  const [activeTab, setActiveTab] = useState('news');

  const achievements = [
    { title: "36.000+ Kişilik Dijital Topluluk", desc: "Geliştirilen dijital projelerden birinin 36.000’in üzerinde aktif kullanıcı/topluluk ölçeğine ulaştırılması." },
    { title: "SliferSoft’un Kuruluşu", desc: "Yazılım ve teknoloji ürünleri geliştirmeye odaklanan SliferSoft’un 2025 yılında kurulması ve şirketin ürün ekosisteminin geliştirilmeye başlanması." },
    { title: "Site Defteri", desc: "Gerçek bir sektör problemini hedefleyen kapsamlı site ve apartman yönetim sisteminin tasarlanması, geliştirilmesi ve üniversite kapsamında başarıyla sunulması." },
    { title: "ALKÜ E-Sports’un Kuruluşu", desc: "Alanya Alaaddin Keykubat Üniversitesi bünyesinde e-spor topluluğunun sıfırdan kurulması ve üniversite çapında büyük organizasyonların gerçekleştirilmesi." },
    { title: "Şehir Çapında Organizasyon Deneyimi", desc: "Üniversite organizasyonlarının yanında Alanya Belediyesi Gençlik Festivali gibi şehir ölçeğindeki etkinliklerde liderlik ve operasyon sorumluluğu." },
    { title: "Medya Yönetimi", desc: "Manşet Alanya’da Yayın Yönetmeni olarak profesyonel medya ve dijital yayıncılık deneyimi." },
    { title: "Yerel Basında Görünürlük", desc: "Gençlik çalışmaları, üniversite sorunları ve e-spor organizasyonları kapsamında birçok farklı yerel medya kuruluşunda haber ve içeriklere konu olunması." },
    { title: "Çok Disiplinli Deneyim", desc: "Teknoloji, yazılım, dijital medya, pazarlama, girişimcilik, topluluk yönetimi ve siyasi çalışmaların aynı kariyer yolculuğunda bir araya getirilmesi." }
  ];

  const news = [
    {
      title: "Alanya’da Üniversitelilerin Sesi: Ersin Sandal’dan Sorunlara Çözüm Çağrısı",
      source: "Manşet Alanya",
      link: "https://www.mansetalanya.com/alanyada-universitelilerin-sesi-ersin-sandaldan-sorunlara-cozum-cagrisi",
      image: "news1.jpg"
    },
    {
      title: "Alanya’da E-Spor Çılgınlığı",
      source: "Manşet Alanya",
      link: "https://www.mansetalanya.com/alanyada-e-spor-cilginligi",
      image: "news2.jpg"
    },
    {
      title: "Alanya E-Spor’un Merkezi Oluyor: ALKÜ Büyük Turnuva ile Dikkat Çekti",
      source: "Alanya Postası",
      link: "https://www.alanyapostasi.com.tr/alanya-e-sporun-merkezi-oluyor-alku-buyuk-turnuva-ile-dikkat-cekti",
      image: "news3.jpg"
    },
    {
      title: "Alanya E-Spor’un Nabzını Tutuyor: Şampiyonluk İçin Kıyasıya Mücadele",
      source: "Yedigün Haber",
      link: "https://www.yedigunhaber.com/alanya-e-sporun-nabzini-tutuyor-sampiyonluk-icin-kiyasiya-mucadele",
      image: "news4.jpg"
    },
    {
      title: "Alanya’da E-Spor Çılgınlığı",
      source: "Alanya Time Haber",
      link: "https://www.alanyatimehaber.com/alanya-da-e-spor-cilginligi/57767/",
      image: "news5.jpg"
    },
    {
      title: "Alanya’da E-Spor: Kıyasıya Mücadele Ettiler",
      source: "Gazete Alanya",
      link: "https://www.gazetealanya.com/alanyada-e-spor-kiyasiya-mucadele-ettiler/amp",
      image: "news6.jpg"
    },
    {
      title: "Alanya’da E-Spor Çılgınlığı",
      source: "Büyük Alanya",
      link: "https://www.buyukalanya.com/alanyada-e-spor-cilginligi/250052/",
      image: "news7.jpg"
    }
  ];

  const certificates = [
    { title: "Adobe XD ile UI-UX Tasarımı", org: "BTK Akademi", date: "Nisan 2023" },
    { title: "İnovasyon", org: "Bilgeİş", date: "Nisan 2023" },
    { title: "Academic Writing: How to Get Your Research Published", org: "Çanakkale Onsekiz Mart Üniversitesi", date: "Mart 2023" },
    { title: "Dijital Çağda Stratejik Düşünme Teknikleri Eğitimi", org: "Boensittü", date: "Mart 2023" },
    { title: "Proje Yönetimi", org: "BTK Akademi", date: "Mart 2023" },
    { title: "Sosyal Medya Uzmanlığına Giriş", org: "BTK Akademi", date: "Mart 2023" }
  ];

  return (
    <div className="container page-spacing">
      <PageHeader 
        title="Medya & Başarılar" 
        subtitle="Medyada yer alan haberler, öne çıkan projeler ve sertifikalar."
      />

      <div className="experience-tabs">
        <button 
          className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`}
          onClick={() => setActiveTab('news')}
        >
          Medyada Ersin Sandal
        </button>
        <button 
          className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          Öne Çıkan Başarılar
        </button>
        <button 
          className={`tab-btn ${activeTab === 'certificates' ? 'active' : ''}`}
          onClick={() => setActiveTab('certificates')}
        >
          Lisans & Sertifikalar
        </button>
      </div>

      <div className="tab-content">
        <AnimatePresence mode="wait">
          {activeTab === 'news' && (
            <motion.section 
              key="news"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="media-section"
            >
              <h2 className="section-title sr-only">Medyada Ersin Sandal</h2>
              <div className="media-grid">
                {news.map((item, idx) => {
                  const hostname = new URL(item.link).hostname;
                  const faviconUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`;
                  return (
                    <motion.div 
                      key={idx} 
                      className="news-card glass"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                    >
                      <div className="news-card-header">
                        <img src={faviconUrl} alt={item.source} className="news-source-icon" />
                        <span className="news-source-name">{item.source}</span>
                      </div>
                      <div className="news-card-body">
                        <h3 className="news-title">{item.title}</h3>
                      </div>
                      <div className="news-card-footer">
                        <a href={item.link} target="_blank" rel="noreferrer" className="news-read-link">
                          Haberi Oku →
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          )}

          {activeTab === 'achievements' && (
            <motion.section 
              key="achievements"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="achievements-section"
            >
              <h2 className="section-title sr-only">Öne Çıkan Başarılar</h2>
              <div className="stats-grid">
                {achievements.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="stat-card glass"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx % 4) * 0.1 }}
                    style={{ padding: '2rem 1.5rem' }}
                  >
                    <h4 className="stat-label" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>{item.title}</h4>
                    <p className="stat-desc">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === 'certificates' && (
            <motion.section 
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="certificates-section"
            >
              <h2 className="section-title sr-only">Lisans & Sertifikalar</h2>
              <div className="timeline" style={{ marginTop: '1rem' }}>
                {certificates.map((cert, idx) => (
                  <motion.div 
                    key={idx} 
                    className="timeline-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    style={{ marginBottom: '1.5rem' }}
                  >
                    <div className="timeline-dot" style={{ width: '14px', height: '14px', left: '24px', top: '5px' }}></div>
                    <div className="timeline-content glass" style={{ padding: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{cert.title}</h3>
                      <div style={{ color: 'var(--color-primary)', fontWeight: '500', marginBottom: '0.5rem' }}>{cert.org}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{cert.date}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Media;
