import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import DeliverySection from './components/DeliverySection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <LanguageProvider>
      <CartProvider>
        <Navbar onCartOpen={() => setCartOpen(true)} />
        <main>
          <HeroSection />
          <ProductsSection />
          <AboutSection />
          <DeliverySection />
        </main>
        <Footer />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </CartProvider>
    </LanguageProvider>
  );
}
