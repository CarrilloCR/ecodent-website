import React from 'react';
import { Leaf, Users, Target, Heart, Recycle, Globe } from 'lucide-react';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Sostenibilidad",
      description: "Cada decisión que tomamos está guiada por el impacto ambiental positivo."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Salud",
      description: "Cuidamos tu salud bucal con materiales naturales y propiedades comprobadas."
    },
    {
      icon: <Recycle className="w-12 h-12" />,
      title: "Economía Circular",
      description: "Diseñamos productos que se reintegran a la naturaleza al final de su vida útil."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Impacto Global",
      description: "Cada cepillo es una acción concreta hacia un planeta más saludable."
    }
  ];

  const team = [
    { name: "Sebastián Aguilar Quesada", role: "Co-fundador" },
    { name: "Fabián Carrillo Méndez", role: "Co-fundador" },
    { name: "Santiago Ureña Muñoz", role: "Co-fundador" },
    { name: "Wendy Zamora Cordero", role: "Co-fundadora" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nuestra Historia
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Nace de la necesidad urgente de reducir el impacto ambiental 
            de los productos de higiene personal sin comprometer la calidad.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Target className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-primary mb-6">
                Nuestra Misión
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Transformar la higiene bucal en un acto de amor por el planeta, 
                ofreciendo productos innovadores que combinen salud, sostenibilidad 
                y economía circular, mientras educamos y construimos una comunidad 
                comprometida con el cambio.
              </p>
            </div>

            <Card className="bg-white">
              <h3 className="text-2xl font-bold text-primary mb-4">El Problema</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Cada año, millones de cepillos dentales convencionales terminan en 
                vertederos y océanos. Una sola persona puede desechar entre 6 y 12 
                cepillos al año, y estos productos de plástico tardan más de 400 años 
                en descomponerse.
              </p>
              <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Nuestra Solución</h3>
              <p className="text-gray-700 leading-relaxed">
                Ecodent ofrece un sistema de cepillado modular con mango reutilizable 
                de bambú y cabecillas biodegradables que contienen semillas. Al terminar 
                su vida útil, puedes plantarlas y ver crecer nueva vida. Reducimos los 
                residuos plásticos en un 91% por persona al año.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <div className="text-secondary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-primary mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estudiantes de Ingeniería de Materiales del Colegio Técnico 
              Profesional Don Bosco, comprometidos con la innovación sostenible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {member.role}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para Unirte al Cambio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Cada cepillado es una oportunidad para hacer la diferencia
          </p>
          <Link to="/productos">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Ver Productos
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;