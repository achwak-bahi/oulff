import { useLang } from '../context/LanguageContext';
import './AboutSection.css';

const VALUES = [
  { icon: '🌿', key: 'about_val1' },
  { icon: '✨', key: 'about_val2' },
  { icon: '🏡', key: 'about_val3' },
];

export default function AboutSection() {
  const { t } = useLang();
  return (
    <section id="about" className="about">
      <div className="about__container">

        <div className="about__visual">
          <div className="about__img-frame">
            <img
              src="/about.jpg"
              alt="Pâtisserie artisanale Oulf"
              width="500" height="600"
              loading="lazy" decoding="async"
            />
          </div>
        </div>

        <div className="about__content">
          <span className="about__badge">{t('about_badge')}</span>
          <h2 className="about__title">
            {t('about_title')} <em className="about__accent">{t('about_title_accent')}</em>
          </h2>
          <p className="about__p">{t('about_p1')}</p>
          <p className="about__p">{t('about_p2')}</p>

          <div className="about__values">
            {VALUES.map(v => (
              <div key={v.key} className="about__value">
                <span className="about__value-icon">{v.icon}</span>
                <span className="about__value-text">{t(v.key)}</span>
              </div>
            ))}
          </div>

          <div className="about__signature">
            <span className="about__sig-text">Oulf · أُلف</span>
            <div className="about__sig-line" />
            <span className="about__sig-sub">Relizane</span>
          </div>
        </div>

      </div>
    </section>
  );
}
