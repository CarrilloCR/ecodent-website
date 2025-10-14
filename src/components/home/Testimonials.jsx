import React from 'react';
import { Star, Quote } from 'lucide-react';
import Card from '../shared/Card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      age: 32,
      location: "San José",
      rating: 5,
      text: "Ecodent cambió completamente mi rutina dental. Es increíble plantar las cabecillas usadas y ver cómo crecen. Mis hijos están fascinados con el proceso y ahora todos en casa usamos Ecodent.",
      image: "testimonial-1.jpg"
    },
    {
      name: "Andrea Jiménez",
      age: 28,
      location: "Heredia",
      rating: 5,
      text: "Finalmente un producto que refleja mis valores ambientales. La calidad es excepcional, el diseño es hermoso y saber que estoy reduciendo mi huella plástica me hace sentir muy bien. Lo recomiendo 100%.",
      image: "testimonial-2.jpg"
    },
    {
      name: "Carolina Rojas",
      age: 35,
      location: "Cartago",
      rating: 5,
      text: "La suscripción es súper conveniente. No tengo que preocuparme por comprar cepillos nuevos y estoy contribuyendo al planeta. El efecto del Miswak es notable, mis dientes están más blancos.",
      image: "testimonial-3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
          <p className="section-subtitle">
            Miles de personas ya transformaron su higiene bucal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`fade-in-up delay-${index * 100} relative`}
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-accent opacity-50" />
              
              <div className="relative">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {testimonial.name.charAt(0)}
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.age} años • {testimonial.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
