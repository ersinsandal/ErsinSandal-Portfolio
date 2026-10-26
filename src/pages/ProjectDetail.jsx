import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container page-spacing not-found-container">
        <h2>Proje Bulunamadı</h2>
        <p>Aradığınız proje mevcut değil veya kaldırılmış olabilir.</p>
        <Link to="/projeler" className="btn-primary">Projeler'e Dön</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-wrapper">
      <div className="container project-detail-container">
        <motion.div 
          className="detail-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/projeler" className="back-link">← Projelere Dön</Link>
          <div className="detail-title-row">
            {project.logo && (
              <div className="detail-logo-wrapper">
                <img 
                  src={project.logo} 
                  alt={project.title} 
                  className={`detail-project-logo ${project.blurLogo ? 'blur-logo' : ''}`}
                  onContextMenu={project.blurLogo ? (e) => e.preventDefault() : undefined}
                  draggable={!project.blurLogo}
                />
              </div>
            )}
            <div>
              <h1 className="detail-title premium-heading">{project.title}</h1>
              <p className="detail-subtitle">{project.subtitle}</p>
            </div>
          </div>
        </motion.div>

        <motion.article 
          className="detail-content glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {project.content}
        </motion.article>
      </div>
    </div>
  );
};

export default ProjectDetail;
