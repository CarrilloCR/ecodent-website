import React, { useState } from 'react';
import { Leaf, Sparkles, TreePine, Recycle, Heart, Shield } from 'lucide-react';
import AuthModal from '../components/auth/AuthModal';
import Button from '../components/shared/Button';

const Welcome = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const handleOpenAuth = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Biodegradable",
      description: "Se descompone en 6-24 meses"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Planta Vida",
      description: "Cada cabecilla contiene semillas"
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "91% Menos Residuos",
      description: "Reduce tu huella de plástico"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-white/10 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Branding */}
              <div className="text-white space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">Innovación Sostenible</span>
                </div>

                <div>
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <img 
                      src="/images/logo.png" 
                      alt="Ecodent Logo" 
                      className="h-16 w-auto object-contain"
                    />
                    <span className="text-4xl font-bold ml-3">ECODENT</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                    Tu Sonrisa,
                    <span className="block text-secondary">Nuestro Planeta</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                    El primer cepillo dental que no solo limpia tus dientes, 
                    sino que planta vida en el planeta.
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-secondary mx-auto mb-3">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-300">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Auth Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mx-auto mb-4">
                    <Heart className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    Comienza Tu Viaje Verde
                  </h2>
                  <p className="text-gray-600">
                    Únete a miles de personas que ya están haciendo la diferencia
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={() => handleOpenAuth('register')}
                    size="lg"
                    className="w-full"
                  >
                    Crear Cuenta Gratis
                  </Button>
                  
                  <Button
                    onClick={() => handleOpenAuth('login')}
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Ya Tengo Cuenta
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">5K+</div>
                      <div className="text-xs text-gray-600">Usuarios</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">91%</div>
                      <div className="text-xs text-gray-600">Menos Residuos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">15K+</div>
                      <div className="text-xs text-gray-600">Plantas</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Seguro</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Leaf className="w-4 h-4" />
                    <span>Sostenible</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>Garantizado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialMode={authMode}
      />
    </>
  );
};

export default Welcome;