import React, { useState, useEffect, useRef } from 'react';
import { Users, Leaf, Sprout, Award } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: <Users className="w-12 h-12" />,
      value: 5000,
      suffix: "+",
      label: "Clientes Satisfechos",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      value: 2100,
      suffix: " kg",
      label: "Plástico Evitado",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Sprout className="w-12 h-12" />,
      value: 15000,
      suffix: "+",
      label: "Plantas Sembradas",
      color: "from-secondary to-green-700"
    },
    {
      icon: <Award className="w-12 h-12" />,
      value: 91,
      suffix: "%",
      label: "Reducción de Residuos",
      color: "from-yellow-400 to-orange-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const Counter = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(end * percentage));

        if (percentage < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title">Nuestro Impacto</h2>
          <p className="section-subtitle">
            Juntos estamos creando un cambio real
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center fade-in-up delay-${index * 100}`}
            >
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-6 shadow-xl transform hover:scale-110 transition-all duration-300`}>
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;