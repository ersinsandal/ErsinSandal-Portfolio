import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-clean">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="premium-heading">ES.</h2>
            <p className="footer-slogan">"Beyond the Time, Upon the Throne."</p>
          </div>
          <div className="footer-links-grid">
            <div className="link-group">
              <h3>Keşfet</h3>
              <Link to="/hakkimda" className="hover-underline">Hakkımda</Link>
              <Link to="/deneyim" className="hover-underline">Deneyim</Link>
              <Link to="/projeler" className="hover-underline">Projeler</Link>
            </div>
            <div className="link-group">
              <h3>Bağlantılar</h3>
              <div className="social-icons">
                <a href="https://linkedin.com/in/ersinsandal" target="_blank" rel="noreferrer" className="social-icon">
                  <FaLinkedin className="icon" /> LinkedIn
                </a>
                <a href="https://instagram.com/ersinsandal" target="_blank" rel="noreferrer" className="social-icon">
                  <FaInstagram className="icon" /> Instagram
                </a>
                <a href="mailto:info@ersinsandal.com" className="social-icon">
                  <FaEnvelope className="icon" /> E-mail
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2026 Ersin Sandal. Tüm hakları saklıdır.</p>
          <p className="envision-tag">Part of <strong>Envision Station</strong></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
