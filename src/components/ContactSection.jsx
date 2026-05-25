import { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import './ContactSection.css';

const WA_NUMBER = '213668545371';
const EMAIL = 'oulf.patisserie@gmail.com';

export default function ContactSection() {
  const { t } = useLang();
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `🎂 ${t('contact_wa_intro')}\n👤 ${t('contact_name_label')}: ${name}\n🛍️ ${t('contact_product_label')}: ${product}\n💬 ${t('contact_msg_label')}: ${message}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${t('contact_email_subject')} - ${product}`);
    const body = encodeURIComponent(`${t('contact_name_label')}: ${name}\n${t('contact_product_label')}: ${product}\n\n${message}`);
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">

        <div className="contact__header">
          <span className="contact__badge">{t('contact_badge')}</span>
          <h2 className="contact__title">{t('contact_title')}</h2>
          <p className="contact__subtitle">{t('contact_subtitle')}</p>
        </div>

        <div className="contact__layout">

          {/* ── Info card ── */}
          <div className="contact__info">
            <div className="contact__info-item">
              <span className="contact__info-icon">📍</span>
              <div>
                <p className="contact__info-label">{t('contact_location_label')}</p>
                <p className="contact__info-val">Relizane, Algérie</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📱</span>
              <div>
                <p className="contact__info-label">{t('contact_phone_label')}</p>
                <a className="contact__info-val contact__info-link" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">0668 54 53 71</a>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">✉️</span>
              <div>
                <p className="contact__info-label">{t('contact_email_label')}</p>
                <a className="contact__info-val contact__info-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">🕐</span>
              <div>
                <p className="contact__info-label">{t('contact_hours_label')}</p>
                <p className="contact__info-val">{t('contact_hours_val')}</p>
              </div>
            </div>
          </div>

          {/* ── Form ── */}
          <form className="contact__form" onSubmit={sendWhatsApp}>
            <div className="contact__field">
              <label htmlFor="c-name">{t('contact_name_label')}</label>
              <input
                id="c-name" type="text"
                placeholder={t('contact_name_ph')}
                value={name} onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="c-product">{t('contact_product_label')}</label>
              <input
                id="c-product" type="text"
                placeholder={t('contact_product_ph')}
                value={product} onChange={e => setProduct(e.target.value)}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="c-msg">{t('contact_msg_label')}</label>
              <textarea
                id="c-msg" rows="4"
                placeholder={t('contact_msg_ph')}
                value={message} onChange={e => setMessage(e.target.value)}
              />
            </div>
            <div className="contact__actions">
              <button type="submit" className="contact__btn contact__btn--wa">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t('contact_send_wa')}
              </button>
              <button type="button" className="contact__btn contact__btn--email" onClick={sendEmail}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {t('contact_send_email')}
              </button>
            </div>
            {sent && (
              <p className="contact__sent">{t('contact_sent_msg')}</p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
