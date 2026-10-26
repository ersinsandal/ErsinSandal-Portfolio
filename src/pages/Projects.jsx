import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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

      <section className="projects-grid-section">
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
