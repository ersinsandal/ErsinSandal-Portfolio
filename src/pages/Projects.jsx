import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Radio, Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { projectsData } from '../data/projectsData';
import './Pages.css';

const Projects = () => {
  return (
    <div className="container page-spacing">
      <PageHeader 
        title="Projeler & Vizyon" 
        subtitle="Sadece yazılım değil; ölçeklenebilir sistemler, topluluklar ve sosyal etki platformları inşa etme vizyonu."
      />

      {/* Envision Station Mimari & Ekosistem Detayı */}
      <motion.section 
        id="envision-station"
        className="envision-projects-banner glass"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="envision-projects-glow" aria-hidden="true"></div>
        
        <div className="envision-projects-content">
          <div className="envision-projects-header">
            <h2 className="envision-projects-title">ENVISION STATION</h2>
            <p className="envision-projects-lead">
              Ekosistem ve Çok Disiplinli Üretim Mimarisi
            </p>
          </div>

          <div className="envision-projects-desc">
            <p>
              Bu sayfada yer alan her bağımsız girişim, yazılım ürünü, dijital kitle platformu ve sivil inisiyatif; 
              <strong> Envision Station</strong> çatısı altında birleşen bütünsel bir üretim modelinin somut çıktılarıdır.
            </p>
            <p>
              Buradaki projeler tek başına çalışan izole fikirler değildir. Envision Station; sağlam bir mühendislik omurgasını, 
              dijital yayıncılık ve medya gücünü ve organik topluluk etkileşimini tek bir stratejik çatı altında buluşturur. 
              Böylece her yeni girişim, sıfırdan başlamak yerine bu ortak altyapıdan ve sinerjiden beslenerek çok daha hızlı, 
              güvenli ve sürdürülebilir bir şekilde hayata geçer.
            </p>
          </div>

          <div className="envision-projects-pillars">
            <div className="envision-pillar-card">
              <div className="pillar-icon"><Cpu size={22} /></div>
              <div className="pillar-info">
                <h4>Ortak Mühendislik Altyapısı</h4>
                <p>Geliştirilen çekirdek sistemler, yazılım mimarileri ve standartlar, ekosistemdeki tüm ürünlerin teknik kalitesini ve geliştirme hızını artırır.</p>
              </div>
            </div>

            <div className="envision-pillar-card">
              <div className="pillar-icon"><Radio size={22} /></div>
              <div className="pillar-info">
                <h4>Çapraz Medya & İletişim Gücü</h4>
                <p>Projeler; dijital yayıncılık, teknik prodüksiyon ve kurumsal temsil dinamikleriyle doğrudan görünürlük ve kitle bağı kazanır.</p>
              </div>
            </div>

            <div className="envision-pillar-card">
              <div className="pillar-icon"><Users size={22} /></div>
              <div className="pillar-info">
                <h4>Organik Topluluk Sinerjisi</h4>
                <p>36.000'i aşkın aktif dijital kitle ölçeği ve kullanıcı geri bildirimleri, ürünlerin gerçek ihtiyaçlara göre evrilmesini ve benimsenmesini sağlar.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

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