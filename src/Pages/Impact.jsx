import React from 'react';
import { Leaf, Droplets, TreePine, Recycle, TrendingDown, Award } from 'lucide-react';
import Card from '../components/shared/Card';

const Impact = () => {
  const impactStats = [
    {
      icon: <Leaf className="w-16 h-16" />,
      value: "2,100 kg",
      label: "Plástico Evitado",
      description: "Equivalente a 42,000 botellas plásticas",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <TreePine className="w-16 h-16" />,
      value: "15,000+",
      label: "Plantas Sembradas",
      description: "Albahaca, cilantro, mostaza y lechugas",
      color: "from-secondary to-green-700"
    },
    {
      icon: <Droplets className="w-16 h-16" />,
      value: "91%",
      label: "Reducción de Residuos",
      description: "Por cliente al año vs cepillos tradicionales",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Recycle className="w-16 h-16" />,
      value: "100%",
      label: "Biodegradable",
      description: "Se descompone en 6-24 meses",
      color: "from-teal-400 to-teal-600"
    }
  ];

  const comparison = [
    {
      aspect: "Tiempo de descomposición",
      traditional: "400+ años",
      ecodent: "6-24 meses",
      icon: <TrendingDown className="w-8 h-8" />
    },
    {
      aspect: "Residuos anuales por persona",
      traditional: "480 gramos",
      ecodent: "45 gramos",
      icon: <Recycle className="w-8 h-8" />
    },
    {
      aspect: "Componentes reutilizables",
      traditional: "0%",
      ecodent: "100% (mango)",
      icon: <Award className="w-8 h-8" />
    },
    {
      aspect: "Impacto positivo adicional",
      traditional: "Ninguno",
      ecodent: "Siembra de plantas",
      icon: <TreePine className="w-8 h-8" />
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-cream">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Nuestro Impacto</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Cada cepillado cuenta. Juntos estamos creando un cambio real y medible.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            El Cambio en Números
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-6`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Ecodent vs Cepillos Tradicionales
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {comparison.map((item, index) => (
              <Card key={index}>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-secondary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary">
                        {item.aspect}
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8 ml-auto">
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">Tradicional</p>
                      <p className="font-semibold text-red-600">{item.traditional}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">Ecodent</p>
                      <p className="font-semibold text-secondary">{item.ecodent}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            El Ciclo de Vida Ecodent
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1. Fabricación Sostenible",
                  description: "Usamos bambú moso de crecimiento rápido y nylon vegetal derivado de plantas. Proceso de manufactura con mínimo impacto ambiental."
                },
                {
                  step: "2. Uso Responsable",
                  description: "Mango duradero que se usa por años. Solo cambias las cabecillas cada 3 meses, reduciendo drasticamente el desperdicio."
                },
                {
                  step: "3. Fin de Vida Regenerativo",
                  description: "La cabecilla usada contiene semillas viables. Al plantarla, se biodegrada completamente mientras germina una nueva planta."
                },
                {
                  step: "4. Impacto Positivo",
                  description: "No solo evitas contaminar, sino que activamente creas vida. Cada cabecilla se convierte en hierbas aromáticas o vegetales."
                }
              ].map((item, index) => (
                <Card key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {item.step}
                    </h3>
                    <p className="text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Sé Parte del Cambio
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Con cada Ecodent que usas, estás contribuyendo directamente a un planeta más limpio
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all">
            Comenzar Ahora
          </button>
        </div>
      </section>
    </div>
  );
};

export default Impact;
