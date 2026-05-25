import { useEffect, useState } from 'react';
import { getAllProducts, deleteProduct } from '../api/index';
import { useAdminAuth } from '../context/AdminAuthContext';
import ProductForm from './ProductForm';
import './Admin.css';

export default function AdminDashboard({ onLogout }) {
  const { token, logout } = useAdminAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(null);   // null = fermé, {} = nouveau, {...} = existant

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getAllProducts(token);
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Supprimer ce produit ?')) return;
    try {
      await deleteProduct(token, id);
      setProducts(p => p.filter(x => x.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogout = () => {
    logout();
    onLogout();
  };

  return (
    <div className="admin-dash">
      <header className="admin-dash__header">
        <div className="admin-dash__brand">
          <img src="/logo.jpg" alt="Oulf" height="36" style={{ width: 'auto', objectFit: 'contain' }} />
          <span>Tableau de bord</span>
        </div>
        <div className="admin-dash__actions">
          <button className="admin-btn admin-btn--primary" onClick={() => setEditing({})}>
            + Ajouter un produit
          </button>
          <button className="admin-btn admin-btn--ghost" onClick={handleLogout}>
            Déconnexion
          </button>
        </div>
      </header>

      <main className="admin-dash__main">
        {loading && <p className="admin-status">Chargement...</p>}
        {error && <p className="admin-status admin-status--error">{error}</p>}

        {!loading && !error && (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom</th>
                  <th>Prix</th>
                  <th>Badge</th>
                  <th>Disponible</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 && (
                  <tr><td colSpan={6} className="admin-table__empty">Aucun produit</td></tr>
                )}
                {products.map(p => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.price ? `${p.price} DA` : '—'}</td>
                    <td>{p.badge || '—'}</td>
                    <td>
                      <span className={`admin-badge ${p.is_available ? 'admin-badge--green' : 'admin-badge--red'}`}>
                        {p.is_available ? 'Oui' : 'Non'}
                      </span>
                    </td>
                    <td className="admin-table__btns">
                      <button className="admin-btn admin-btn--sm" onClick={() => setEditing(p)}>Modifier</button>
                      <button className="admin-btn admin-btn--sm admin-btn--danger" onClick={() => handleDelete(p.id)}>Supprimer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {editing !== null && (
        <ProductForm
          product={editing}
          onClose={() => setEditing(null)}
          onSaved={() => { setEditing(null); fetchProducts(); }}
        />
      )}
    </div>
  );
}
