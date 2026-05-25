import { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import './FloatingCTA.css';

export default function FloatingCTA({ onContactOpen }) {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`floating-cta${visible ? ' floating-cta--visible' : ''}`} aria-hidden={!visible}>
      <button
        className="floating-cta__btn floating-cta__btn--secondary"
        onClick={() => onContactOpen?.()}
        aria-label={t('nav_contact')}
        title={t('nav_contact')}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
        <span>{t('nav_contact')}</span>
      </button>
    </div>
  );
}
