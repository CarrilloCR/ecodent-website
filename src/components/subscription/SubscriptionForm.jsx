import React, { useState } from 'react';
import { CreditCard, Lock, Calendar, User, Mail, Phone } from 'lucide-react';
import Input from '../shared/Input';
import Button from '../shared/Button';
import Badge from '../shared/Badge';

const SubscriptionForm = ({ selectedPlan, onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    frequency: '3-months'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete(formData);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex items-center flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              step >= num 
                ? 'bg-secondary text-white' 
                : 'bg-gray-200 text-gray-500'
            }`}>
              {num}
            </div>
            {num < 3 && (
              <div className={`flex-1 h-1 mx-2 transition-all ${
                step > num ? 'bg-secondary' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Labels */}
      <div className="flex justify-between mb-8 text-sm">
        <span className={step >= 1 ? 'text-secondary font-semibold' : 'text-gray-500'}>
          Información Personal
        </span>
        <span className={step >= 2 ? 'text-secondary font-semibold' : 'text-gray-500'}>
          Dirección de Envío
        </span>
        <span className={step >= 3 ? 'text-secondary font-semibold' : 'text-gray-500'}>
          Pago
        </span>
      </div>

      {/* Selected Plan Summary */}
      <div className="bg-accent rounded-xl p-6 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-primary text-lg">
              Plan {selectedPlan.name}
            </h3>
            <p className="text-gray-600 text-sm">{selectedPlan.period}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              ₡{selectedPlan.price.toLocaleString()}
            </div>
            {selectedPlan.savings && (
              <Badge variant="success" className="text-xs mt-1">
                Ahorras ₡{selectedPlan.savings}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div className="space-y-4 fade-in-up">
            <Input
              label="Nombre Completo"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              icon={User}
              placeholder="Juan Pérez"
              required
            />
            <Input
              label="Correo Electrónico"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              icon={Mail}
              placeholder="juan@example.com"
              required
            />
            <Input
              label="Teléfono"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              icon={Phone}
              placeholder="+506 8888-8888"
              required
            />
          </div>
        )}

        {/* Step 2: Shipping */}
        {step === 2 && (
          <div className="space-y-4 fade-in-up">
            <Input
              label="Dirección Completa"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Calle, número, referencias"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Provincia"
                name="province"
                placeholder="San José"
                required
              />
              <Input
                label="Cantón"
                name="canton"
                placeholder="Escazú"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Frecuencia de Envío
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleChange({ target: { name: 'frequency', value: '3-months' }})}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.frequency === '3-months'
                      ? 'border-secondary bg-secondary/10'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="font-semibold">Cada 3 meses</div>
                  <div className="text-sm text-gray-600">Recomendado</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleChange({ target: { name: 'frequency', value: '6-months' }})}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.frequency === '6-months'
                      ? 'border-secondary bg-secondary/10'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="font-semibold">Cada 6 meses</div>
                  <div className="text-sm text-gray-600">Mayor ahorro</div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <div className="space-y-4 fade-in-up">
            <Input
              label="Número de Tarjeta"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              icon={CreditCard}
              placeholder="1234 5678 9012 3456"
              maxLength="19"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Fecha de Expiración"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                icon={Calendar}
                placeholder="MM/AA"
                maxLength="5"
                required
              />
              <Input
                label="CVV"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                icon={Lock}
                placeholder="123"
                maxLength="4"
                type="password"
                required
              />
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 flex items-start gap-3">
              <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-1">Pago 100% Seguro</p>
                <p className="text-blue-700">
                  Tus datos están protegidos con encriptación SSL de 256 bits.
                  No almacenamos información de tu tarjeta.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-6">
          {step > 1 && (
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setStep(step - 1)}
              className="flex-1"
            >
              Anterior
            </Button>
          )}
          <Button
            type="submit"
            size="lg"
            className="flex-1"
          >
            {step === 3 ? 'Confirmar Suscripción' : 'Continuar'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;
