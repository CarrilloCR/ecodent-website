import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Products from './Pages/Products.jsx';
import Subscription from './Pages/Subscription.jsx';
import Impact from './Pages/Impact.jsx';
import Contact from './Pages/Contact.jsx';
import Cart from './Pages/Cart.jsx';
import Dashboard from './Pages/Dashboard.jsx';

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