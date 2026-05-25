import { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import OulfLogo from './OulfLogo';
import './Navbar.css';

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const WA_NUMBER = '213668545371';

export default function Navbar({ onContactOpen }) {
  const { t, toggleLang, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() =>
    document.documentElement.getAttribute('data-theme') === 'dark' ||
    (!document.documentElement.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    setDark(!dark);
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOrder = () => {
    const text = encodeURIComponent(t('wa_general'));
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__brand" aria-label="Oulf accueil">
          <OulfLogo />
        </a>

        {/* Nav links — desktop */}
        <nav className="navbar__nav" aria-label="Navigation principale">
          <button className="navbar__link" onClick={() => scrollTo('hero')}>{t('nav_home')}</button>
          <button className="navbar__link" onClick={() => scrollTo('products')}>{t('nav_products')}</button>
          <button className="navbar__link" onClick={() => scrollTo('about')}>{t('nav_about')}</button>
          <button className="navbar__link" onClick={() => onContactOpen?.()}>{t('nav_contact')}</button>
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          <button className="navbar__icon-btn" onClick={toggleTheme} aria-label={dark ? 'Mode clair' : 'Mode sombre'}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="navbar__lang" onClick={toggleLang} aria-label="Changer de langue">
            {lang === 'fr' ? 'عربي' : 'FR'}
          </button>
          <button className="navbar__order" onClick={handleOrder}>
            {t('nav_order')}
          </button>
        </div>

        {/* Burger — mobile */}
        <button
          className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        <button className="navbar__mobile-link" onClick={() => scrollTo('hero')}>{t('nav_home')}</button>
        <button className="navbar__mobile-link" onClick={() => scrollTo('products')}>{t('nav_products')}</button>
        <button className="navbar__mobile-link" onClick={() => scrollTo('about')}>{t('nav_about')}</button>
        <button className="navbar__mobile-link" onClick={() => { onContactOpen?.(); setMenuOpen(false); }}>{t('nav_contact')}</button>
        <div className="navbar__mobile-row">
          <button className="navbar__icon-btn" onClick={toggleTheme} aria-label="Thème">
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="navbar__lang" onClick={toggleLang}>
            {lang === 'fr' ? 'عربي' : 'FR'}
          </button>
        </div>
        <button className="navbar__mobile-cta" onClick={() => { handleOrder(); setMenuOpen(false); }}>
          {t('nav_order')}
        </button>
      </div>
    </header>
  );
}
