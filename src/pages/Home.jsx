import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import esportre from '../assets/esportre.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container container">
      <div className="home-split">
        
        {/* Left Side: Typography & CTA */}
        <div className="home-content">
          <motion.div 
            className="title-wrapper"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <h1 className="hero-title premium-heading">
              <span className="text-gradient">ERSİN</span><br/>
              SANDAL
            </h1>
          </motion.div>
          
          <motion.div
            className="slogan-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="hero-slogan">
              "Beyond the Time, Upon the Throne."
            </p>
          </motion.div>

          <motion.div
            className="hero-roles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Bilgisayar Mühendisi • Teknoloji Girişimcisi • Medya Yöneticisi • Siyasetçi
          </motion.div>

          <motion.div
            className="hero-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p>
              Teknik altyapımı stratejik düşünme ve liderlik deneyimlerimle bir araya getirerek; 
              teknolojiden dijital medyaya, sivil toplumdan siyasete kadar uzanan geniş bir yelpazede, 
              geleceği şekillendiren projeler ve ekosistemler inşa ediyorum.
            </p>
          </motion.div>
          
          <motion.div
            className="cta-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link to="/projeler" className="btn-primary">
              Projelerimi Keşfet
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Visual/Portrait Area */}
        <motion.div 
          className="home-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="portrait-frame glass">
            {/* The mask container for the image */}
            <div className="portrait-mask">
              <img 
                src={esportre}
                alt="Ersin Sandal" 
                className="portrait-image"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="deco-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
