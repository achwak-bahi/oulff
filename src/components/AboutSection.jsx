import { useLang } from '../context/LanguageContext';
import './AboutSection.css';

export default function AboutSection() {
  const { t } = useLang();
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__visual">
          <div className="about__img-frame">
            <img
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&q=80"
              alt="Pâtisserie artisanale Oulf"
              width="500" height="600"
              loading="lazy" decoding="async"
            />
          </div>
          <div className="about__stats-card">
            <div className="about__stat">
              <span className="about__stat-n">{t('about_s1_val')}</span>
              <span>{t('about_s1_label')}</span>
            </div>
            <div className="about__stat-sep" />
            <div className="about__stat">
              <span className="about__stat-n">{t('about_s2_val')}</span>
              <span>{t('about_s2_label')}</span>
            </div>
            <div className="about__stat-sep" />
            <div className="about__stat">
              <span className="about__stat-n">{t('about_s3_val')}</span>
              <span>{t('about_s3_label')}</span>
            </div>
          </div>
        </div>

        <div className="about__content">
          <span className="about__badge">{t('about_badge')}</span>
          <h2 className="about__title">
            {t('about_title')} <em className="about__accent">{t('about_title_accent')}</em>
          </h2>
          <p className="about__p">{t('about_p1')}</p>
          <p className="about__p">{t('about_p2')}</p>
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
