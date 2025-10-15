import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Leaf } from 'lucide-react';
import { useCart } from '../../hooks/UseCart';
import { useAuth } from '../../hooks/UseAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/productos', label: 'Productos' },
    { path: '/suscripcion', label: 'Suscripción' },
    { path: '/impacto', label: 'Impacto' },
    { path: '/contacto', label: 'Contacto' },
  ];

  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Leaf className={`w-8 h-8 transition-colors ${
                isScrolled ? 'text-secondary' : 'text-white'
              } group-hover:rotate-12 transition-transform`} />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            </div>
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              ECODENT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all hover:text-secondary relative group ${
                  location.pathname === link.path
                    ? 'text-secondary'
                    : isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link
              to="/carrito"
              className={`relative p-2 rounded-full transition-all hover:bg-accent ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            <Link
              to={isAuthenticated ? '/cuenta' : '/login'}
              className={`p-2 rounded-full transition-all hover:bg-accent ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              <User className="w-6 h-6" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors hover:text-secondary ${
                  location.pathname === link.path
                    ? 'text-secondary'
                    : isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;