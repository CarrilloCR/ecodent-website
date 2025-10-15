import React, { useState } from 'react';
import PlanCard from '../components/subscription/PlanCard';
import PlanComparison from '../components/subscription/PlanComparison';
import SubscriptionForm from '../components/subscription/SubscriptionForm';
import Modal from '../components/shared/Modal';
import { subscriptionPlans } from '../data/subscriptions';
import { Check } from 'lucide-react';

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setIsFormOpen(true);
  };

  const handleCompleteSubscription = (formData) => {
    console.log('Subscription completed:', { plan: selectedPlan, ...formData });
    setIsFormOpen(false);
    // Here you would send data to your backend
    alert('¡Suscripción completada! Recibirás un correo de confirmación.');
  };

  const benefits = [
    "Nunca te quedarás sin cabecillas",
    "Ahorro automático en cada envío",
    "Cancela o pausa cuando quieras",
    "Envío gratis en todas tus entregas",
    "Acceso a productos exclusivos",
    "Soporte prioritario"
  ];

  return (
    <div className="pt-20 min-h-screen bg-cream">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Plan de Suscripción</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Recibe tus cabecillas automáticamente y ahorra en cada envío
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Beneficios de Suscribirte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Elige Tu Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {subscriptionPlans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onSelect={handleSelectPlan}
              />
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="text-secondary font-semibold hover:underline"
            >
              {showComparison ? 'Ocultar' : 'Ver'} Comparación Detallada
            </button>
          </div>

          {showComparison && (
            <div className="mt-12 max-w-6xl mx-auto">
              <PlanComparison />
            </div>
          )}
        </div>
      </section>

      {/* Subscription Form Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="Completa tu Suscripción"
        size="lg"
      >
        {selectedPlan && (
          <SubscriptionForm
            selectedPlan={selectedPlan}
            onComplete={handleCompleteSubscription}
          />
        )}
      </Modal>
    </div>
  );
};

export default Subscription;