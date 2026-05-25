import { createContext, useContext, useState } from 'react';

const AdminAuthContext = createContext();

export function AdminAuthProvider({ children }) {
  const [token, setToken] = useState(sessionStorage.getItem('admin_token') || null);

  const login = (t) => {
    setToken(t);
    sessionStorage.setItem('admin_token', t);
  };

  const logout = () => {
    setToken(null);
    sessionStorage.removeItem('admin_token');
  };

  return (
    <AdminAuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export const useAdminAuth = () => useContext(AdminAuthContext);
