import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import Subscription from './pages/Subscription.jsx';
import Impact from './pages/Impact.jsx';
import Contact from './pages/Contact.jsx';
import Cart from './pages/Cart.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/suscripcion" element={<Subscription />} />
          <Route path="/impacto" element={<Impact />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/cuenta" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;