import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AdminAuthProvider, useAdminAuth } from './context/AdminAuthContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import DeliverySection from './components/DeliverySection';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import FloatingCTA from './components/FloatingCTA';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

// ── Route admin : /admin ──────────────────────────────────────
function AdminRoute() {
  const { token } = useAdminAuth();
  const [loggedIn, setLoggedIn] = useState(!!token);

  if (!loggedIn) return <AdminLogin onSuccess={() => setLoggedIn(true)} />;
  return <AdminDashboard onLogout={() => setLoggedIn(false)} />;
}

// ── App principale ────────────────────────────────────────────
function MainApp() {
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

export default function App() {
  const isAdmin = window.location.pathname.startsWith('/admin');
  return (
    <AdminAuthProvider>
      {isAdmin ? <AdminRoute /> : <MainApp />}
    </AdminAuthProvider>
  );
}
