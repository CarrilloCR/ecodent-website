import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Subscription from './Pages/Subscription';
import Impact from './Pages/Impact';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Dashboard from './Pages/Dashboard';

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