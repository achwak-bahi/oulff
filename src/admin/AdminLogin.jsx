import { useState } from 'react';
import { loginAdmin } from '../api/index';
import { useAdminAuth } from '../context/AdminAuthContext';
import './Admin.css';

export default function AdminLogin({ onSuccess }) {
  const { login } = useAdminAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await loginAdmin(email, password);
      login(data.access_token);
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login__card">
        <div className="admin-login__logo">
          <img src="/logo.jpg" alt="Oulf" height="48" style={{ width: 'auto', objectFit: 'contain' }} />
        </div>
        <h1 className="admin-login__title">Espace Admin</h1>
        <p className="admin-login__sub">Connectez-vous pour gérer vos produits</p>

        <form onSubmit={handleSubmit} className="admin-login__form">
          <div className="admin-field">
            <label htmlFor="email">Email</label>
            <input
              id="email" type="email" required
              value={email} onChange={e => setEmail(e.target.value)}
              placeholder="admin@oulff.dz"
              autoComplete="email"
            />
          </div>
          <div className="admin-field">
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password" type="password" required
              value={password} onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
          {error && <p className="admin-login__error">{error}</p>}
          <button type="submit" className="admin-btn admin-btn--primary" disabled={loading}>
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
}
