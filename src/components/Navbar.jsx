import { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import OulfLogo from './OulfLogo';
import { buildWA } from '../data/products';
import './Navbar.css';

export default function Navbar() {
  const { lang, t, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { href: '#home', label: t('nav_home') },
    { href: '#products', label: t('nav_products') },
    { href: '#about', label: t('nav_about') },
    { href: '#delivery', label: t('nav_contact') },
  ];

  const SunIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  );
  const MoonIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <nav className="navbar__inner" role="navigation" aria-label="Navigation principale">
        <a href="#home" className="navbar__brand" aria-label="Oulf - Accueil">
          <OulfLogo size={36} />
          <span className="navbar__wordmark">Oulf</span>
          <span className="navbar__arabic">أُلف</span>
        </a>

        <ul role="list" className="navbar__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="navbar__link" onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button
            className="navbar__lang"
            onClick={toggleLang}
            aria-label={`Passer en ${lang === 'fr' ? 'arabe' : 'français'}`}
          >
            {lang === 'fr' ? 'عربي' : 'FR'}
          </button>
          <button
            className="navbar__theme"
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            aria-label="Changer le thème"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href={buildWA(t('wa_general'))}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
          >
            {t('nav_order')}
          </a>
          <button
            className={`navbar__burger${open ? ' navbar__burger--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`navbar__mobile${open ? ' navbar__mobile--open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className="navbar__mobile-link" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href={buildWA(t('wa_general'))}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__mobile-cta"
          onClick={() => setOpen(false)}
        >
          {t('nav_order')}
        </a>
      </div>
    </header>
  );
}
