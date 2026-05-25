import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import './CartDrawer.css';

export default function CartDrawer({ open, onClose }) {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice, submitOrder, orderLoading } = useCart();
  const { lang } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const isAr = lang === 'ar';

  const handleOrder = () => {
    submitOrder({ name, phone, address });
    onClose();
  };

  return (
    <>
      {open && <div className="cart-overlay" onClick={onClose} />}
      <div className={`cart-drawer ${open ? 'open' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
        <div className="cart-header">
          <h3>{isAr ? `السلة (${totalItems})` : `Panier (${totalItems})`}</h3>
          <button className="cart-close" onClick={onClose} aria-label="Fermer">✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <span>🛒</span>
            <p>{isAr ? 'السلة فارغة' : 'Votre panier est vide'}</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <span className="cart-item-name">
                      {isAr ? item.name_ar : item.name_fr}
                    </span>
                    <span className="cart-item-price">
                      {(item.price * item.quantity).toLocaleString()} DA
                    </span>
                  </div>
                  <div className="cart-item-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button className="cart-remove" onClick={() => removeFromCart(item.id)}>🗑</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-total">
                <span>{isAr ? 'المجموع:' : 'Sous-total:'}</span>
                <span>{totalPrice.toLocaleString()} DA</span>
              </div>
              <div className="cart-delivery">
                <span>{isAr ? 'التوصيل:' : 'Livraison:'}</span>
                <span>400 DA</span>
              </div>
              <div className="cart-grand">
                <span>{isAr ? 'الإجمالي:' : 'Total:'}</span>
                <strong>{(totalPrice + 400).toLocaleString()} DA</strong>
              </div>
            </div>

            <div className="cart-form">
              <input
                placeholder={isAr ? 'اسمك' : 'Votre nom'}
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                placeholder={isAr ? 'رقم الهاتف' : 'Téléphone'}
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
              <input
                placeholder={isAr ? 'العنوان (غليزان)' : 'Adresse (Relizane)'}
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </div>

            <button
              className="cart-order-btn"
              onClick={handleOrder}
              disabled={orderLoading || cart.length === 0}
            >
              {orderLoading
                ? (isAr ? 'جاري الإرسال...' : 'Envoi...')
                : (
                  <>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {isAr ? 'اطلب عبر واتساب' : 'Commander via WhatsApp'}
                  </>
                )
              }
            </button>
          </>
        )}
      </div>
    </>
  );
}
