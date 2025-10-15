import React from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../hooks/UseCart';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="pt-20 min-h-screen bg-cream">
        <div className="container mx-auto px-4 py-20">
          <Card className="text-center max-w-md mx-auto py-12">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-primary mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-gray-600 mb-8">
              ¡Agrega algunos productos para comenzar!
            </p>
            <Link to="/productos">
              <Button size="lg">
                Ver Productos
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-cream">
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Tu Carrito</h1>
          <p className="text-xl">
            {cartItems.length} producto{cartItems.length !== 1 ? 's' : ''} en tu carrito
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={`${item.id}-${item.variant}`}>
                  <div className="flex items-center gap-6">
                    {/* Image */}
                    <div className="flex-shrink-0 w-24 h-24 bg-accent rounded-lg flex items-center justify-center">
                      <ShoppingBag className="w-12 h-12 text-primary" />
                    </div>

                    {/* Info */}
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-primary mb-1">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {item.description}
                      </p>
                      {item.variant && (
                        <p className="text-sm text-gray-500">
                          Variante: <span className="capitalize">{item.variant}</span>
                        </p>
                      )}
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                        className="p-2 rounded-lg border-2 border-gray-300 hover:border-secondary transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                        className="p-2 rounded-lg border-2 border-gray-300 hover:border-secondary transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">
                        ₡{(item.price * item.quantity).toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        ₡{item.price.toLocaleString()} c/u
                      </p>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </Card>
              ))}

              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-600 font-semibold"
              >
                Vaciar Carrito
              </button>
            </div>

            {/* Summary */}
            <div>
              <Card className="sticky top-24">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Resumen del Pedido
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">
                      ₡{getCartTotal().toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Envío</span>
                    <span className="font-semibold text-secondary">
                      Gratis
                    </span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-4">
                    <div className="flex justify-between text-xl font-bold text-primary">
                      <span>Total</span>
                      <span>₡{getCartTotal().toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full mb-4"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Proceder al Pago
                </Button>

                <Link to="/productos">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Seguir Comprando
                  </Button>
                </Link>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Pago 100% seguro • Envío gratis • Garantía de satisfacción
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
