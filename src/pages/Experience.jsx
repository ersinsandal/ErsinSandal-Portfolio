import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import slifersoftLogo from '../assets/slifersoft.png';
import './Pages.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('career');

  const education = [
    {
      title: "Bilgisayar Mühendisliği",
      institution: "Alanya Alaaddin Keykubat Üniversitesi",
      date: "Eylül 2021 – Günümüz",
      meta: "GPA: 3.54 / 4.00",
      desc: "Bilgisayar mühendisliği eğitimim boyunca yalnızca teorik derslere değil, gerçek problemleri çözmeye yönelik ürün ve proje geliştirme süreçlerine de yoğunlaştım. Yazılım geliştirme, veri tabanları, modern veri sistemleri, bilgisayar ağları, makine öğrenmesi, bilgisayarlı görü ve ürün geliştirme gibi farklı alanlarda projeler gerçekleştirdim. Özellikle Site Defteri, B2X LoRa ve bilgisayarlı görü üzerine gerçekleştirdiğim deneysel çalışma bu dönemde öne çıkan teknik projelerim arasında yer aldı.",
      link: "https://www.alanya.edu.tr/"
    },
    {
      title: "Bilgisayar Mühendisliği",
      institution: "Aydın Adnan Menderes Üniversitesi",
      date: "Eylül 2020 – Haziran 2021",
      meta: "",
      desc: "Bilgisayar mühendisliği eğitimime Aydın Adnan Menderes Üniversitesi’nde başladım. Bir yıllık eğitimin ardından öğrenimime Alanya Alaaddin Keykubat Üniversitesi Bilgisayar Mühendisliği bölümünde devam ettim.",
      link: "https://www.adu.edu.tr/"
    },
    {
      title: "Lise Eğitimi",
      institution: "Hasan Çolak Anadolu Lisesi",
      date: "Eylül 2016 – Haziran 2020",
      meta: "OBP: 89.85 / 100",
      desc: "Ortaöğretim eğitimimi Hasan Çolak Anadolu Lisesi’nde tamamladım.",
      link: "https://hasancolakal.meb.k12.tr/"
    }
  ];

  const career = [
    {
      title: "Kurucu & CEO",
      institution: "SliferSoft",
      date: "Nisan 2025 – Günümüz",
      desc: "SliferSoft, modern yazılım ürünleri ve teknoloji tabanlı dijital çözümler geliştirmek amacıyla kurduğum teknoloji girişimidir. Şirket içerisinde ürün vizyonu, proje stratejisi, yeni ürün fikirlerinin değerlendirilmesi, ekip koordinasyonu, ürün konumlandırması ve geliştirme süreçlerinin yönetiminde aktif rol alıyorum. SliferSoft aynı zamanda Envision Station içerisindeki teknoloji projelerinin üretim merkezidir.",
      link: "https://www.slifersoft.com",
      localLogo: slifersoftLogo
    },
    {
      title: "Yazılım Geliştirme Stajyeri",
      institution: "ARGEYA",
      date: "Haziran 2025 – Günümüz",
      desc: "ARGEYA bünyesinde profesyonel yazılım geliştirme süreçleri, kurumsal proje yapıları ve gerçek dünya yazılım ürünleri üzerinde çalışma deneyimi kazanıyorum. Bu süreçte üzerinde çalıştığım projelerden biri İlanZeka oldu.",
      link: "https://www.argeya.com"
    },
    {
      title: "Yayın Yönetmeni",
      institution: "Manşet Alanya",
      date: "Kasım 2024 – Günümüz",
      desc: "Alanya merkezli dijital haber platformu Manşet Alanya’da Yayın Yönetmeni olarak görev yapıyorum. Dijital yayın süreçlerinin yönetimi, haber akışının koordinasyonu, dijital içerik stratejileri ve medya operasyonları görev alanlarım arasında bulunuyor.",
      link: "https://www.mansetalanya.com"
    },
    {
      title: "Digital & Social Media Marketing Manager",
      institution: "RE/MAX Confidence",
      date: "Aralık 2021 – Mart 2025",
      desc: "RE/MAX Confidence bünyesinde üç yılı aşkın süre boyunca sosyal medya, dijital pazarlama, içerik stratejisi ve marka iletişimi alanlarında görev aldım. Dijital kampanyaların planlanması ve sosyal medya hesaplarının yönetilmesi üzerine çalışmalar gerçekleştirdim.",
      link: "https://www.remax.com.tr/ofis/detay/confidence"
    },
    {
      title: "Bilgi İşlem Teknik Destek Stajyeri",
      institution: "Alanya Belediyesi",
      date: "Temmuz 2024",
      desc: "Alanya Belediyesi Bilgi İşlem biriminde gerçekleştirdiğim staj boyunca kurumsal bilgi teknolojileri altyapısı, kullanıcı sistemleri, bilgisayar donanımları ve teknik destek operasyonları konusunda deneyim kazandım.",
      link: "https://www.alanya.bel.tr/"
    }
  ];

  const leadership = [
    { title: "Genel Direktör", institution: "Akdeniz Gençlik Derneği", date: "Ocak 2025 – Günümüz", desc: "Gençlik çalışmalarına odaklanan organizasyon içerisinde yönetim, proje koordinasyonu ve organizasyon süreçlerinde görev alıyorum." },
    { title: "Proje Yasal Temsilcisi & İletişim Koordinatörü", institution: "ALBUS: Alanya Gençlik Rotası", date: "Kasım 2024 – Eylül 2025", desc: "Gençlik odaklı organizasyonun kurumsal yapılanması, iletişimi ve proje süreçleri içerisinde aktif sorumluluk aldım." },
    { title: "İlçe Yönetim Kurulu Üyesi", institution: "Cumhuriyet Halk Partisi — Gençlik Kolları", date: "Ağustos 2024 – Günümüz", desc: "Gençlerin yerel karar alma süreçlerine katılımının artırılması, gençlik politikaları, saha çalışmaları ve kamuoyu iletişimi kapsamında aktif olarak görev alıyorum." },
    { title: "Kurucu", institution: "ALKÜ E-Sports", date: "Ekim 2023 – Günümüz", desc: "Alanya Alaaddin Keykubat Üniversitesi bünyesinde üniversite öğrencilerini e-spor kültürü etrafında bir araya getirmek amacıyla topluluğu kurdum ve büyük e-spor organizasyonları gerçekleştirdim." },
    { title: "Gönüllü Lideri", institution: "Alanya Belediyesi Gençlik Festivali", date: "2–3 Mayıs 2025", desc: "Festival boyunca dijital altyapıyla ilgili operasyonlar ve gönüllü süreçlerinin koordinasyonunda sorumluluk aldım." },
    { title: "Yönetim Kurulu Üyesi", institution: "Social Coding Topluluğu — ALKÜ", date: "Eylül 2023 – Ekim 2023", desc: "Teknoloji ve yazılım odaklı öğrenci topluluğunun yönetim kurulunda görev aldım." }
  ];

  const renderTimeline = (data) => (
    <div className="timeline">
      {data.map((item, idx) => {
        let logoUrl = null;
        if (item.localLogo) {
          logoUrl = item.localLogo;
        } else if (item.link) {
          try {
            const hostname = new URL(item.link).hostname;
            logoUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`;
          } catch(e) {}
        }

        return (
          <motion.div 
            key={idx} 
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass">
              <div className="timeline-header">
                <div className="timeline-title">
                  <h3>{item.title}</h3>
                  <h4>{item.institution}</h4>
                </div>
                <div className="timeline-meta">
                  <div className="timeline-date">{item.date}</div>
                  {item.meta && <div className="timeline-badge">{item.meta}</div>}
                </div>
              </div>
              <div className="timeline-body">
                <p>{item.desc}</p>
              </div>
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="timeline-logo-placeholder">
                  {logoUrl ? (
                    <img src={logoUrl} alt={item.institution} className="timeline-dynamic-logo" />
                  ) : (
                    <>Logo<br/>(Tıkla)</>
                  )}
                </a>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <div className="container page-spacing">
      <PageHeader 
        title="Kariyer ve Eğitim" 
        subtitle="Teknoloji, medya ve topluluk yönetimi odaklı çok disiplinli deneyim."
      />

      <div className="experience-tabs">
        <button 
          className={`tab-btn ${activeTab === 'career' ? 'active' : ''}`}
          onClick={() => setActiveTab('career')}
        >
          Kariyer
        </button>
        <button 
          className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Eğitim
        </button>
        <button 
          className={`tab-btn ${activeTab === 'leadership' ? 'active' : ''}`}
          onClick={() => setActiveTab('leadership')}
        >
          Liderlik & Topluluk
        </button>
      </div>

      <div className="tab-content">
        <AnimatePresence mode="wait">
          {activeTab === 'career' && (
            <motion.section 
              key="career"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="timeline-section"
            >
              <h2 className="section-title sr-only">Kariyer</h2>
              {renderTimeline(career)}
            </motion.section>
          )}

          {activeTab === 'education' && (
            <motion.section 
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="timeline-section"
            >
              <h2 className="section-title sr-only">Eğitim</h2>
              {renderTimeline(education)}
            </motion.section>
          )}

          {activeTab === 'leadership' && (
            <motion.section 
              key="leadership"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="timeline-section"
            >
              <h2 className="section-title sr-only">Liderlik & Topluluk Deneyimleri</h2>
              {renderTimeline(leadership)}
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Experience;
