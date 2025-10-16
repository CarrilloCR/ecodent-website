import React, { useState } from 'react';
import { Check, Leaf } from 'lucide-react';
import Button from '../shared/Button';
import Badge from '../shared/Badge';

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('kit');

  const products = {
    kit: {
      name: "Kit Inicial Ecodent",
      price: 9000,
      description: "Todo lo que necesitas para comenzar tu viaje sostenible",
      image: "/images/product-main.jpeg",
      features: [
        "Mango de bambú moso duradero y reutilizable",
        "2 cabecillas biodegradables con semillas",
        "Fibras de Miswak para protección natural",
        "Estuche de viaje biodegradable incluido",
        "Guía de uso y plantación",
        "Garantía de satisfacción 100%"
      ],
      savings: "Ahorra ₡1,200 vs comprar por separado"
    },
    refill: {
      name: "Pack 2 Cabecillas",
      price: 2800,
      description: "Reposición perfecta para tu cepillo Ecodent",
      image: "/images/product-details.jpeg",
      features: [
        "2 cabecillas intercambiables",
        "Cerdas de nylon vegetal suave/media",
        "Semillas de albahaca o cilantro",
        "Empaque 100% compostable",
        "Fácil instalación click & clean",
        "Duración: 3 meses por cabecilla"
      ],
      savings: "₡1,400 c/u - Ahorra con suscripción"
    },
    premium: {
      name: "Cabecillas Premium Miswak",
      price: 3500,
      description: "Máxima protección con fibras concentradas",
      image: "/images/miswak.jpg",
      features: [
        "Fibras de Miswak de alta concentración",
        "Efecto blanqueador natural",
        "Protección avanzada de encías",
        "Semillas premium de hierbas aromáticas",
        "Cerdas extra suaves",
        "Perfectas para dientes sensibles"
      ],
      savings: "Tecnología ancestral + innovación moderna"
    }
  };

  const currentProduct = products[activeTab];

  const handleAddToCart = () => {
    alert(`✅ ${currentProduct.name} agregado al carrito`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="section-title">Nuestros Productos</h2>
          <p className="section-subtitle">
            Elige la opción perfecta para ti
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up delay-200">
          <button
            onClick={() => setActiveTab('kit')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'kit'
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Kit Inicial
          </button>
          <button
            onClick={() => setActiveTab('refill')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'refill'
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Cabecillas
          </button>
          <button
            onClick={() => setActiveTab('premium')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'premium'
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Premium
          </button>
        </div>

        {/* Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-accent rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center">
              <img 
                src={currentProduct.image}
                alt={currentProduct.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML += '<div class="text-center"><p class="text-gray-500">Imagen no disponible</p></div>';
                }}
              />
            </div>
            
            {activeTab === 'kit' && (
              <Badge variant="secondary" className="absolute -top-4 -right-4 text-sm px-4 py-2 shadow-lg animate-pulse">
                Más Popular
              </Badge>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6 fade-in-up delay-300">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">
                {currentProduct.name}
              </h3>
              <p className="text-gray-600 text-lg">
                {currentProduct.description}
              </p>
            </div>

            <div className="flex items-baseline space-x-2">
              <span className="text-5xl font-bold text-primary">
                ₡{currentProduct.price.toLocaleString()}
              </span>
              <span className="text-gray-500">/ unidad</span>
            </div>

            <div className="bg-accent rounded-xl p-4">
              <p className="text-secondary font-semibold flex items-center">
                <Leaf className="w-5 h-5 mr-2" />
                {currentProduct.savings}
              </p>
            </div>

            <div className="space-y-3">
              {currentProduct.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="flex-1"
                onClick={handleAddToCart}
              >
                Agregar al Carrito
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Ver Detalles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;