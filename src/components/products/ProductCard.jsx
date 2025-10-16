import React from 'react';
import { ShoppingCart, Heart, Eye, Package } from 'lucide-react';
import Card from '../shared/Card';
import Badge from '../shared/Badge';
import Button from '../shared/Button';

const ProductCard = ({ product, onAddToCart, onQuickView }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <Card className="group relative overflow-hidden">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.popular && (
          <Badge variant="secondary">Más Vendido</Badge>
        )}
        {!product.inStock && (
          <Badge variant="danger">Agotado</Badge>
        )}
      </div>

      {/* Favorite Button */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white shadow-lg hover:scale-110 transition-transform"
      >
        <Heart 
          className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
        />
      </button>

      {/* Image */}
      <div className="relative h-64 bg-accent rounded-xl mb-4 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Package className="w-24 h-24 text-primary mx-auto" />
            <p className="text-sm text-gray-500 mt-2">{product.image}</p>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            onClick={() => onQuickView(product)}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary"
            icon={Eye}
          >
            Vista Rápida
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <Badge variant="outline" className="text-xs">
          {product.category === 'kit' ? 'Kit Completo' : product.category === 'refill' ? 'Repuesto' : 'Premium'}
        </Badge>
        
        <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <span className="text-3xl font-bold text-primary">
              ₡{product.price.toLocaleString()}
            </span>
          </div>
          
          <Button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            icon={ShoppingCart}
            size="sm"
          >
            Agregar
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;

