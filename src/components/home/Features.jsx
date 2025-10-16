import React from 'react';
import { Leaf, Recycle, Shield, Heart, Sparkles, Droplets } from 'lucide-react';
import Card from '../shared/Card';

const Features = () => {
  const features = [
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "100% Biodegradable",
      description: "Materiales naturales que se descomponen en 6-24 meses, no en 400 años como los cepillos convencionales.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Recycle className="w-12 h-12" />,
      title: "Semillas Incluidas",
      description: "Cada cabecilla contiene semillas de rápida germinación. Al desecharla, plántala y da vida a una nueva planta.",
      color: "from-secondary to-green-700"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Miswak Natural",
      description: "Fibras ancestrales de Salvadora persica con propiedades antibacterianas y blanqueadoras comprobadas.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Diseño Ergonómico",
      description: "Mango de bambú moso diseñado para máxima comodidad y control, incluso en condiciones húmedas.",
      color: "from-red-400 to-pink-600"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Cerdas Vegetales",
      description: "Nylon vegetal derivado de ricino y caña de azúcar. Efectivas, suaves y completamente biodegradables.",
      color: "from-yellow-400 to-orange-600"
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "91% Menos Residuos",
      description: "Reduce tu huella plástica de 480g a solo 45g anuales con nuestro sistema de cabecillas intercambiables.",
      color: "from-cyan-400 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title">¿Por Qué Elegir Ecodent?</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Cada detalle está pensado para ofrecer la mejor experiencia 
            de higiene bucal mientras cuidas el planeta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
            <Card 
              key={index}
              className={`fade-in-up delay-${(index + 1) * 100} group cursor-pointer`}
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;