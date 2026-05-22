import { useLang } from '../context/LanguageContext';
import { buildWA } from '../data/products';
import './DeliverySection.css';

const OrderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
    <rect x="9" y="3" width="6" height="4" rx="1"/>
    <path d="M9 12h6M9 16h4"/>
  </svg>
);
const ChatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
  </svg>
);
const TruckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/>
    <rect x="9" y="11" width="14" height="10" rx="1"/>
    <circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
  </svg>
);

export default function DeliverySection() {
  const { t } = useLang();
  const steps = [
    { icon: <OrderIcon />, titleKey: 'step1_title', descKey: 'step1_desc' },
    { icon: <ChatIcon />,  titleKey: 'step2_title', descKey: 'step2_desc' },
    { icon: <TruckIcon />, titleKey: 'step3_title', descKey: 'step3_desc' },
  ];

  return (
    <section id="delivery" className="delivery">
      <div className="delivery__container">
        <div className="delivery__header">
          <span className="about__badge">{t('delivery_title')}</span>
          <p className="delivery__subtitle">{t('delivery_subtitle')}</p>
        </div>

        <div className="delivery__steps">
          {steps.map((s, i) => (
            <div key={i} className="delivery__step">
              <div className="delivery__step-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="delivery__step-icon">{s.icon}</div>
              <h3 className="delivery__step-title">{t(s.titleKey)}</h3>
              <p className="delivery__step-desc">{t(s.descKey)}</p>
            </div>
          ))}
        </div>

        <div className="delivery__cta-box">
          <div className="delivery__info">
            <div className="delivery__info-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <circle cx="12" cy="11" r="3"/>
              </svg>
              <span>{t('delivery_location')}</span>
            </div>
            <div className="delivery__info-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3"/>
                <rect x="9" y="11" width="14" height="10" rx="1"/>
              </svg>
              <span>{t('delivery_fee_label')} : <strong>{t('delivery_fee')}</strong></span>
            </div>
          </div>
          <a
            href={buildWA(t('wa_general'))}
            target="_blank"
            rel="noopener noreferrer"
            className="delivery__cta"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t('delivery_cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
