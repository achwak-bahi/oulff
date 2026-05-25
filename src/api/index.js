// API base URL — pointe vers le backend FastAPI
const API_BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

// ─── Produits ───────────────────────────────────────────────
export async function getProducts() {
  const res = await fetch(`${API_BASE}/api/products/`);
  if (!res.ok) throw new Error('Erreur lors du chargement des produits');
  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(`${API_BASE}/api/products/${id}`);
  if (!res.ok) throw new Error('Produit introuvable');
  return res.json();
}

export async function getAllProducts(token) {
  const res = await fetch(`${API_BASE}/api/products/all`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Erreur lors du chargement des produits');
  return res.json();
}

export async function createProduct(token, data) {
  const res = await fetch(`${API_BASE}/api/products/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Erreur lors de la création du produit');
  return res.json();
}

export async function updateProduct(token, id, data) {
  const res = await fetch(`${API_BASE}/api/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Erreur lors de la modification du produit');
  return res.json();
}

export async function deleteProduct(token, id) {
  const res = await fetch(`${API_BASE}/api/products/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Erreur lors de la suppression du produit');
}

// ─── Commandes ──────────────────────────────────────────────
export async function createOrder(orderData) {
  const res = await fetch(`${API_BASE}/api/orders/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData),
  });
  if (!res.ok) throw new Error('Erreur lors de la création de la commande');
  return res.json();
}

// ─── Auth Admin ─────────────────────────────────────────────
export async function loginAdmin(email, password) {
  const formData = new FormData();
  formData.append('username', email);
  formData.append('password', password);
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error('Email ou mot de passe incorrect');
  return res.json();
}

export async function getMe(token) {
  const res = await fetch(`${API_BASE}/api/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Non autorisé');
  return res.json();
}
