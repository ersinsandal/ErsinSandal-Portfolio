import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackgroundParticles from './components/BackgroundParticles';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Expertise from './pages/Expertise';
import Media from './pages/Media';
import Contact from './pages/Contact';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/hakkimda" element={<PageTransition><About /></PageTransition>} />
        <Route path="/deneyim" element={<PageTransition><Experience /></PageTransition>} />
        <Route path="/projeler" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/projeler/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
        <Route path="/uzmanlik" element={<PageTransition><Expertise /></PageTransition>} />
        <Route path="/medya" element={<PageTransition><Media /></PageTransition>} />
        <Route path="/iletisim" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const AppContent = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <ScrollToTop />
      
      <div className="ambient-bg">
        <BackgroundParticles />
      </div>
      
      <div className="page-container">
        <Navbar />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
