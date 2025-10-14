import React from 'react';
import { Check, Star, Zap } from 'lucide-react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import Badge from '../shared/Badge';

const PlanCard = ({ plan, onSelect }) => {
  return (
    <Card 
      className={`relative ${
        plan.popular 
          ? 'ring-4 ring-secondary shadow-2xl scale-105' 
          : ''
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge variant="secondary" className="px-6 py-2 shadow-lg">
            <Star className="w-4 h-4 inline mr-1 fill-current" />
            Más Popular
          </Badge>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary mb-2">
          {plan.name}
        </h3>
        <p className="text-gray-600 text-sm">
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold text-primary">
            ₡{plan.price.toLocaleString()}
          </span>
        </div>
        <p className="text-gray-500 text-sm mt-1">
          {plan.period}
        </p>
        {plan.savings && (
          <div className="mt-3">
            <Badge variant="success" className="text-xs">
              Ahorras ₡{plan.savings}
            </Badge>
          </div>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-secondary" />
            </div>
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        onClick={() => onSelect(plan)}
        variant={plan.popular ? 'primary' : 'outline'}
        size="lg"
        className="w-full"
        icon={plan.popular ? Zap : undefined}
      >
        {plan.popular ? 'Comenzar Ahora' : 'Seleccionar Plan'}
      </Button>

      {plan.popular && (
        <p className="text-center text-xs text-gray-500 mt-4">
          Cancela cuando quieras • Sin compromiso
        </p>
      )}
    </Card>
  );
};

export default PlanCard;
