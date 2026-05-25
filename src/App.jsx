import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import DeliverySection from './components/DeliverySection';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <LanguageProvider>
      <Navbar onContactOpen={() => setContactOpen(true)} />
      <main>
        <HeroSection onContactOpen={() => setContactOpen(true)} />
        <ProductsSection />
        <AboutSection />
        <DeliverySection />
      </main>
      <Footer />
      <FloatingCTA onContactOpen={() => setContactOpen(true)} />
      {contactOpen && <ContactPage onClose={() => setContactOpen(false)} />}
    </LanguageProvider>
  );
}
