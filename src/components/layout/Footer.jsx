import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { label: 'Nosotros', path: '/nosotros' },
      { label: 'Nuestro Impacto', path: '/impacto' },
      { label: 'Contacto', path: '/contacto' },
    ],
    productos: [
      { label: 'Catálogo', path: '/productos' },
      { label: 'Suscripción', path: '/suscripcion' },
      { label: 'Preguntas Frecuentes', path: '/faq' },
    ],
    legal: [
      { label: 'Términos y Condiciones', path: '/terminos' },
      { label: 'Política de Privacidad', path: '/privacidad' },
      { label: 'Política de Envíos', path: '/envios' },
    ],
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2 group hover:opacity-80 transition-opacity">
              <img 
                src="/images/logo.png" 
                alt="Ecodent Logo" 
                className="h-10 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-2xl font-bold">ECODENT</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Transformando la higiene bucal en un acto de amor por el planeta. 
              Cada cepillado es una semilla de cambio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/ecodent" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook Ecodent"
                className="p-2 rounded-full bg-white/10 hover:bg-secondary transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/ecodent" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram Ecodent"
                className="p-2 rounded-full bg-white/10 hover:bg-secondary transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-secondary transition-colors text-sm hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Productos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Productos</h3>
            <ul className="space-y-2">
              {footerLinks.productos.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-secondary transition-colors text-sm hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-gray-300 hover:text-secondary transition-colors cursor-default">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>San José, Costa Rica</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a 
                  href="tel:+50622223333"
                  className="hover:text-secondary transition-colors"
                >
                  +506 2222-3333
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a 
                  href="mailto:info@ecodent.cr"
                  className="hover:text-secondary transition-colors"
                >
                  info@ecodent.cr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-300">
            © {currentYear} Ecodent. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-1 text-sm text-gray-300">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
            <span>para el planeta</span>
          </div>
          <div className="flex space-x-6">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-sm text-gray-300 hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;