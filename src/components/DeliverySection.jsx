import { useLang } from '../context/LanguageContext';
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
      </div>
    </section>
  );
}
