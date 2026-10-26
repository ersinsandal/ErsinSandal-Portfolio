import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import './Pages.css';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formspree.io/f/xoeadyjl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormState('success');
        e.target.reset(); // Clear the form
      } else {
        setFormState('idle');
        alert("Mesaj gönderilirken bir hata oluştu. Lütfen doğrudan e-posta gönderin.");
      }
    } catch (error) {
      setFormState('idle');
      alert("Bağlantı hatası oluştu. Lütfen internetinizi kontrol edin.");
    }
  };

  return (
    <div className="container page-spacing">
      <PageHeader 
        title="İletişim" 
        subtitle="Birlikte bir şeyler inşa edelim."
      />

      <div className="contact-intro text-center" style={{ marginBottom: '4rem' }}>
        <p className="about-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Teknoloji projeleri, girişimler, iş birlikleri, medya çalışmaları veya profesyonel bağlantılar için benimle iletişime geçebilirsiniz.
        </p>
      </div>

      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        
        {/* Contact Info */}
        <motion.div 
          className="contact-info glass card-padding"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="premium-heading" style={{ fontSize: '2rem', marginBottom: '2rem' }}>İletişim Bilgileri</h2>
          
          <div className="info-item" style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.3rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>E-mail</h4>
            <a href="mailto:info@ersinsandal.com" style={{ fontSize: '1.2rem', fontWeight: '500' }}>info@ersinsandal.com</a>
          </div>
          
          <div className="info-item" style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.3rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>LinkedIn</h4>
            <a href="https://linkedin.com/in/ersinsandal" target="_blank" rel="noreferrer" style={{ fontSize: '1.2rem', fontWeight: '500' }}>linkedin.com/in/ersinsandal</a>
          </div>
          
          <div className="info-item" style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.3rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Instagram</h4>
            <a href="https://instagram.com/ersinsandal" target="_blank" rel="noreferrer" style={{ fontSize: '1.2rem', fontWeight: '500' }}>instagram.com/ersinsandal</a>
          </div>
          
          <div className="info-item" style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.3rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Website</h4>
            <a href="https://ersinsandal.com" target="_blank" rel="noreferrer" style={{ fontSize: '1.2rem', fontWeight: '500' }}>ersinsandal.com</a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="contact-form-container glass card-padding"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {formState === 'success' ? (
            <motion.div 
              className="success-message text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ padding: '3rem 0' }}
            >
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 2rem' }}>
                ✓
              </div>
              <h2 className="premium-heading" style={{ marginBottom: '1rem' }}>Mesajınız İletildi</h2>
              <p className="about-text">İlginiz için teşekkür ederim. En kısa sürede dönüş yapacağım.</p>
              <button 
                className="btn-primary" 
                style={{ marginTop: '2rem' }}
                onClick={() => setFormState('idle')}
              >
                Yeni Mesaj Gönder
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h2 className="premium-heading" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Mesaj Gönder</h2>
              
              <div className="form-group">
                <label className="form-label" htmlFor="name">Ad Soyad</label>
                <input type="text" id="name" name="name" className="form-control" required placeholder="Adınız Soyadınız" />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="email">E-posta</label>
                <input type="email" id="email" name="email" className="form-control" required placeholder="ornek@email.com" />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Konu</label>
                <input type="text" id="subject" name="subject" className="form-control" required placeholder="Mesajınızın konusu" />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="message">Mesaj</label>
                <textarea id="message" name="message" className="form-control" required placeholder="Mesajınızı buraya yazın..."></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem' }}
                disabled={formState === 'submitting'}
              >
                {formState === 'submitting' ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
