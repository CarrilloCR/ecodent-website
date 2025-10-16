import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../shared/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-white/10 rounded-full animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Innovación Sostenible</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Tu Sonrisa,
              <span className="block text-secondary">Nuestro Planeta</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              El primer cepillo dental que no solo limpia tus dientes, 
              sino que planta vida en el planeta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/productos">
                <Button size="lg" icon={ArrowRight} iconPosition="right">
                  Comprar Ahora
                </Button>
              </Link>
              <Link to="/nosotros">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Conocer Más
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">91%</div>
                <div className="text-sm text-gray-300 mt-1">Menos Plástico</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm text-gray-300 mt-1">Biodegradable</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">+5K</div>
                <div className="text-sm text-gray-300 mt-1">Clientes Felices</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative fade-in-up delay-300">
            <div className="relative z-10 animate-float w-full h-[650px]">
              {/* Product Image Container */}
              <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border-2 border-white/20 overflow-hidden shadow-2xl">
                <img 
                  src="/images/product-main.jpeg" 
                  alt="Cepillo Ecodent - Producto Principal" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;