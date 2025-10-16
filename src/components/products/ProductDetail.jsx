import React, { useState } from 'react';
import { X, Minus, Plus, Check, Truck, Shield, Recycle, Package } from 'lucide-react';
import Button from '../shared/Button';
import Badge from '../shared/Badge';

const ProductDetail = ({ product, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('suave');

  const variants = ['suave', 'media', 'con miswak'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
     {/* Image Section */}
      <div className="space-y-4">
        <div className="relative h-96 bg-accent rounded-2xl overflow-hidden">
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              const placeholder = document.createElement('div');
              placeholder.className = 'absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50';
              placeholder.innerHTML = '<div class="text-center"><p class="text-gray-500 font-medium">Imagen no disponible</p></div>';
              e.target.parentElement.appendChild(placeholder);
            }}
          />
        </div>
        
        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 bg-accent rounded-lg flex items-center justify-center cursor-pointer hover:ring-2 ring-secondary transition-all overflow-hidden">
              <img 
                src={product.image}
                alt={`${product.name} vista ${i}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML += '<span class="text-xs text-gray-500">Vista ' + i + '</span>';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="space-y-6">
        <div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600">
                {product.description}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="success">En Stock</Badge>
            <Badge variant="outline">Envío Gratis</Badge>
          </div>
        </div>

        <div className="text-4xl font-bold text-primary">
          ₡{product.price.toLocaleString()}
        </div>

        {/* Variants */}
        {product.category !== 'kit' && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Firmeza de Cerdas
            </label>
            <div className="flex gap-3">
              {variants.map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
                    selectedVariant === variant
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Cantidad
          </label>
          <div className="flex items-center gap-4">
            <div className="flex items-center border-2 border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-gray-100 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-6 font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <span className="text-gray-600">
              Total: ₡{(product.price * quantity).toLocaleString()}
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3 bg-accent rounded-xl p-6">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            onClick={() => onAddToCart({ ...product, quantity, variant: selectedVariant })}
            size="lg"
            className="w-full"
          >
            Agregar al Carrito - ₡{(product.price * quantity).toLocaleString()}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full"
          >
            Comprar Ahora
          </Button>
        </div>

        {/* Info */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
          <div className="text-center">
            <Truck className="w-8 h-8 text-secondary mx-auto mb-2" />
            <p className="text-xs text-gray-600">Envío Gratis</p>
          </div>
          <div className="text-center">
            <Shield className="w-8 h-8 text-secondary mx-auto mb-2" />
            <p className="text-xs text-gray-600">Garantía 100%</p>
          </div>
          <div className="text-center">
            <Recycle className="w-8 h-8 text-secondary mx-auto mb-2" />
            <p className="text-xs text-gray-600">Biodegradable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
