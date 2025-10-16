import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/UseAuth';
import Layout from './components/layout/layout';
import Welcome from './Pages/Welcome';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Subscription from './Pages/Subscription';
import Impact from './Pages/Impact';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Dashboard from './Pages/Dashboard';

// Componente para proteger rutas
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/welcome" replace />;
  }
  
  return children;
};

function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto"></div>
          <p className="mt-4 text-white text-lg">Cargando Ecodent...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Ruta de bienvenida - solo accesible si NO está autenticado */}
          <Route 
            path="/welcome" 
            element={
              isAuthenticated ? <Navigate to="/" replace /> : <Welcome />
            } 
          />

          {/* Rutas protegidas - solo accesibles si está autenticado */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/nosotros" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/productos" element={<ProtectedRoute><Products /></ProtectedRoute>} />
          <Route path="/suscripcion" element={<ProtectedRoute><Subscription /></ProtectedRoute>} />
          <Route path="/impacto" element={<ProtectedRoute><Impact /></ProtectedRoute>} />
          <Route path="/contacto" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/carrito" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/cuenta" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

          {/* Redirigir cualquier ruta no encontrada */}
          <Route 
            path="*" 
            element={
              <Navigate to={isAuthenticated ? "/" : "/welcome"} replace />
            } 
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;