import React from 'react';
import { useAuth } from '../../hooks/UseAuth';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // Si no está autenticado, mostrar solo el contenido sin header/footer
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        {children}
      </div>
    );
  }

  // Si está autenticado, mostrar con header y footer
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;