import { useState } from 'react';
import { createProduct, updateProduct } from '../api/index';
import { useAdminAuth } from '../context/AdminAuthContext';
import './Admin.css';

const EMPTY = { name: '', name_ar: '', description: '', description_ar: '', price: '', badge: '', image_url: '', is_available: true };

export default function ProductForm({ product, onClose, onSaved }) {
  const { token } = useAdminAuth();
  const isNew = !product?.id;
  const [form, setForm] = useState(isNew ? EMPTY : {
    name: product.name || '',
    name_ar: product.name_ar || '',
    description: product.description || '',
    description_ar: product.description_ar || '',
    price: product.price ?? '',
    badge: product.badge || '',
    image_url: product.image_url || '',
    is_available: product.is_available ?? true,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const set = (field) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(f => ({ ...f, [field]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const payload = { ...form, price: form.price === '' ? null : Number(form.price) };
      if (isNew) await createProduct(token, payload);
      else await updateProduct(token, product.id, payload);
      onSaved();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="admin-modal">
        <div className="admin-modal__header">
          <h2>{isNew ? 'Ajouter un produit' : 'Modifier le produit'}</h2>
          <button className="admin-modal__close" onClick={onClose} aria-label="Fermer">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="admin-modal__form">
          <div className="admin-form-grid">
            <div className="admin-field">
              <label>Nom (FR) *</label>
              <input type="text" required value={form.name} onChange={set('name')} placeholder="Ex : Tartelette" />
            </div>
            <div className="admin-field">
              <label>Nom (AR)</label>
              <input type="text" value={form.name_ar} onChange={set('name_ar')} placeholder="مثال: تارتليت" dir="rtl" />
            </div>
            <div className="admin-field admin-field--full">
              <label>Description (FR)</label>
              <textarea rows={2} value={form.description} onChange={set('description')} placeholder="Description en français" />
            </div>
            <div className="admin-field admin-field--full">
              <label>Description (AR)</label>
              <textarea rows={2} value={form.description_ar} onChange={set('description_ar')} placeholder="الوصف بالعربية" dir="rtl" />
            </div>
            <div className="admin-field">
              <label>Prix (DA)</label>
              <input type="number" min="0" step="1" value={form.price} onChange={set('price')} placeholder="Ex : 350" />
            </div>
            <div className="admin-field">
              <label>Badge</label>
              <input type="text" value={form.badge} onChange={set('badge')} placeholder="Ex : Populaire" />
            </div>
            <div className="admin-field admin-field--full">
              <label>URL de l'image</label>
              <input type="url" value={form.image_url} onChange={set('image_url')} placeholder="https://..." />
            </div>
            <div className="admin-field admin-field--checkbox">
              <label>
                <input type="checkbox" checked={form.is_available} onChange={set('is_available')} />
                Produit disponible
              </label>
            </div>
          </div>

          {error && <p className="admin-login__error">{error}</p>}

          <div className="admin-modal__footer">
            <button type="button" className="admin-btn admin-btn--ghost" onClick={onClose}>Annuler</button>
            <button type="submit" className="admin-btn admin-btn--primary" disabled={loading}>
              {loading ? 'Enregistrement...' : isNew ? 'Ajouter' : 'Enregistrer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
