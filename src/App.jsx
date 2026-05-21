import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import DeliverySection from './components/DeliverySection';
import Footer from './components/Footer';

function AppContent() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const init = () => document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    init();
    const t = setTimeout(init, 300);
    return () => { observer.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <>
      <a href="#main-content" className="sr-only">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <DeliverySection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
