import { createContext, useContext, useState } from 'react';
import { createOrder } from '../api/index.js';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orderLoading, setOrderLoading] = useState(false);

  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) return removeFromCart(productId);
    setCart(prev =>
      prev.map(item => item.id === productId ? { ...item, quantity } : item)
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Générer le message WhatsApp
  const buildWhatsAppMessage = (customerName = '') => {
    const lines = cart.map(
      item => `• ${item.name_fr} x${item.quantity} = ${(item.price * item.quantity).toLocaleString()} DA`
    );
    const total = `\nTotal: ${totalPrice.toLocaleString()} DA`;
    const delivery = `\nLivraison: 400 DA`;
    const grand = `\nTotal final: ${(totalPrice + 400).toLocaleString()} DA`;
    const name = customerName ? `\nNom: ${customerName}` : '';
    return encodeURIComponent(
      `🎂 Nouvelle commande Oulf (أُلف)\n\n${lines.join('\n')}${total}${delivery}${grand}${name}`
    );
  };

  const orderViaWhatsApp = (customerName = '') => {
    if (cart.length === 0) return;
    const message = buildWhatsAppMessage(customerName);
    window.open(`https://wa.me/213668545371?text=${message}`, '_blank');
  };

  // Enregistrer la commande dans la base de données
  const submitOrder = async (customerInfo) => {
    if (cart.length === 0) return;
    setOrderLoading(true);
    try {
      const orderData = {
        customer_name: customerInfo.name || 'Client',
        customer_phone: customerInfo.phone || '',
        customer_address: customerInfo.address || 'Relizane',
        notes: customerInfo.notes || '',
        items: cart.map(item => ({
          product_id: item.id,
          quantity: item.quantity,
          unit_price: item.price,
        })),
      };
      await createOrder(orderData);
      orderViaWhatsApp(customerInfo.name);
      clearCart();
    } catch (err) {
      console.error('Erreur commande:', err);
      orderViaWhatsApp(customerInfo.name);
    } finally {
      setOrderLoading(false);
    }
  };

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, clearCart,
      totalItems, totalPrice, orderViaWhatsApp, submitOrder, orderLoading
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
