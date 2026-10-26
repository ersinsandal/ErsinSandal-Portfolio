import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, Radio, Users, ChevronDown, ChevronUp } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { projectsData } from '../data/projectsData';
import './Pages.css';

const Projects = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(() => {
    return typeof window !== 'undefined' && window.location.hash === '#envision-station';
  });

  useEffect(() => {
    if (location.hash === '#envision-station') {
      setIsOpen(true);
    }
  }, [location.hash]);

  const toggleAccordion = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="container page-spacing">
      <PageHeader 
        title="Projeler & Vizyon" 
        subtitle="Sadece yazılım değil; ölçeklenebilir sistemler, topluluklar ve sosyal etki platformları inşa etme vizyonu."
      />

      {/* Envision Station Kompakt / Açılır-Kapanır Ekosistem Çubuğu */}
      <section id="envision-station" className={`envision-accordion-banner glass ${isOpen ? 'is-open' : ''}`}>
        <div 
          className="envision-accordion-bar" 
          onClick={toggleAccordion}
          role="button" 
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleAccordion(); } }}
        >
          <div className="accordion-left">
            <span className="accordion-main-title">ENVISION STATION</span>
            <span className="accordion-sep" aria-hidden="true">—</span>
            <span className="accordion-subtitle">Vizyonun Ortak Merkezi</span>
          </div>

          <div className="accordion-right">
            <button 
              type="button" 
              className="accordion-toggle-btn" 
              onClick={(e) => { e.stopPropagation(); toggleAccordion(); }}
              aria-expanded={isOpen}
            >
              <span>{isOpen ? 'Detayları Kapat' : 'Ekosistem Detayları'}</span>
              <span className="accordion-arrow">
                {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div 
              className="envision-accordion-body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <div className="envision-projects-content">
                <div className="envision-projects-desc">
                  <p>
                    Bu sayfada yer alan her bağımsız girişim, yazılım ürünü, dijital kitle platformu ve sivil inisiyatif; 
                    <strong> Envision Station</strong> çatısı altında birleşen bütünsel bir üretim modelinin somut çıktılarıdır.
                  </p>
                  <p>
                    Buradaki projeler tek başına çalışan izole fikirler değildir. Envision Station; sağlam bir mühendislik omurgasını, 
                    dijital yayıncılık ve medya dinamiklerini ve organik topluluk etkileşimini tek bir stratejik çatı altında buluşturur. 
                    Böylece her yeni girişim, sıfırdan başlamak yerine bu ortak altyapıdan ve sinerjiden beslenerek çok daha hızlı, 
                    güvenli ve sürdürülebilir bir şekilde hayata geçer.
                  </p>
                </div>

                <div className="envision-projects-pillars">
                  <div className="envision-pillar-card">
                    <div className="pillar-icon"><Cpu size={20} /></div>
                    <div className="pillar-info">
                      <h4>Teknoloji & Yazılım Mimarisi</h4>
                      <p>Ölçeklenebilir dijital ürünler, yazılım mühendisliği, sistem altyapısı ve yenilikçi çözümler üreten teknik omurga.</p>
                    </div>
                  </div>

                  <div className="envision-pillar-card">
                    <div className="pillar-icon"><Radio size={20} /></div>
                    <div className="pillar-info">
                      <h4>Medya & Stratejik İletişim</h4>
                      <p>Dijital yayıncılık, teknik prodüksiyon ve kurumsal temsil dinamikleriyle doğrudan görünürlük ve kitle bağı.</p>
                    </div>
                  </div>

                  <div className="envision-pillar-card">
                    <div className="pillar-icon"><Users size={20} /></div>
                    <div className="pillar-info">
                      <h4>Topluluk & Organizasyon Yönetimi</h4>
                      <p>Ortak paydada buluşan kitle ağları, sivil inisiyatifler ve sürdürülebilir yönetim zeminleri.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="projects-grid-section">
        <div className="projects-grid-intro">
          <div className="projects-intro-text">
            <h3 className="projects-intro-title">Ekosistemdeki Girişimler & Projeler</h3>
            <p className="projects-intro-subtitle">Envision Station çatısı altında geliştirilmiş, aktif olarak sürdürülen veya tamamlanmış bağımsız çalışmalar.</p>
          </div>
          <span className="projects-count-badge">{projectsData.length} Proje</span>
        </div>

        <div className="modern-projects-grid">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={project.id} 
              className="modern-project-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
            >
              <div className="modern-card-header">
                <div className="modern-card-title-bar">
                  {project.logo && (
                    <div className="modern-logo-wrapper">
                      <img 
                        src={project.logo} 
                        alt={project.title} 
                        className={`modern-project-logo ${project.blurLogo ? 'blur-logo' : ''}`}
                        onContextMenu={project.blurLogo ? (e) => e.preventDefault() : undefined}
                        draggable={!project.blurLogo}
                      />
                    </div>
                  )}
                  <div className="modern-card-title-group">
                    <h3 className="modern-project-title">{project.title}</h3>
                    <p className="modern-project-category">{project.category}</p>
                  </div>
                </div>
                <div className="modern-card-badges">
                  {project.blurLogo && (
                    <span className="badge badge-secret">GİZLİ</span>
                  )}
                  {project.status && (
                    <span className="badge badge-status">{project.status}</span>
                  )}
                  {project.audience && (
                    <span className="badge badge-audience">Kitle: {project.audience}</span>
                  )}
                </div>
              </div>
              
              <div className="modern-card-body">
                <p className="modern-project-desc">{project.shortDesc}</p>
              </div>

              <div className="modern-card-footer">
                <Link to={`/projeler/${project.id}`} className="btn-modern-link">
                  Proje Detaylarını İncele <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;