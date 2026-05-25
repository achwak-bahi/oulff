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
