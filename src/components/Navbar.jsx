import { useLang } from '../context/LanguageContext';
import OulfLogo from './OulfLogo';
import './Navbar.css';

const WA_NUMBER = '213668545371';

export default function Navbar() {
  const { t, toggleLang, lang } = useLang();

  const handleOrder = () => {
    const text = encodeURIComponent(t('wa_general'));
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#" className="navbar__brand" aria-label="Oulf accueil">
          <OulfLogo />
        </a>
        <nav className="navbar__nav" aria-label="Navigation principale">
          <button className="navbar__link" onClick={() => scrollTo('hero')}>{t('nav_home')}</button>
          <button className="navbar__link" onClick={() => scrollTo('products')}>{t('nav_products')}</button>
          <button className="navbar__link" onClick={() => scrollTo('about')}>{t('nav_about')}</button>
          <button className="navbar__link" onClick={() => scrollTo('contact')}>{t('nav_contact')}</button>
        </nav>
        <div className="navbar__actions">
          <button className="navbar__lang" onClick={toggleLang} aria-label="Changer de langue">
            {lang === 'fr' ? 'عربي' : 'FR'}
          </button>
          <button className="navbar__order" onClick={handleOrder}>
            {t('nav_order')}
          </button>
        </div>
      </div>
    </header>
  );
}
