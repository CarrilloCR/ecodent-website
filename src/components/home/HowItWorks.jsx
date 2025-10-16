import React from 'react';
import { ShoppingCart, Package, Smile, Sprout } from 'lucide-react';
import Button from '../shared/Button'; 
import { Link } from 'react-router-dom';
const HowItWorks = () => {
  const steps = [
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "1. Elige tu Kit",
      description: "Selecciona el kit inicial o únete a nuestra suscripción mensual para recibir cabecillas automáticamente.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "2. Recibe en Casa",
      description: "Tu pedido llega en empaque 100% biodegradable directamente a tu puerta en 2-3 días hábiles.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Smile className="w-12 h-12" />,
      title: "3. Cepíllate Feliz",
      description: "Disfruta de 3 meses de higiene bucal superior con materiales naturales y propiedades antibacterianas.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Sprout className="w-12 h-12" />,
      title: "4. Planta Vida",
      description: "Cuando termines, planta la cabecilla en tierra. Las semillas germinarán en 7-15 días creando nueva vida.",
      color: "from-secondary to-green-700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Cuatro simples pasos hacia un futuro más verde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`fade-in-up delay-${index * 100} text-center`}
            >
              {/* Icon */}
              <div className="relative inline-block mb-6">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white mx-auto shadow-2xl transform hover:scale-110 transition-all duration-300`}>
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-white/30"></div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in-up delay-400">
           <Link to="/productos">
           <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Comenzar Ahora
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
