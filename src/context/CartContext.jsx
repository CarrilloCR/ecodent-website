import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1, variant = null) => {
    const productData = product.quantity ? product : { ...product, quantity };
    const existing = cartItems.find(i => i.id === productData.id && i.variant === (variant || productData.variant));
    
    if (existing) {
      setCartItems(cartItems.map(i => 
        i.id === productData.id && i.variant === (variant || productData.variant)
          ? { ...i, quantity: i.quantity + (quantity || productData.quantity) }
          : i
      ));
    } else {
      setCartItems([...cartItems, { ...productData, variant: variant || productData.variant }]);
    }
  };

  const removeFromCart = (productId, variant = null) => {
    setCartItems(cartItems.filter(i => !(i.id === productId && i.variant === variant)));
  };

  const updateQuantity = (productId, quantity, variant = null) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant);
      return;
    }
    setCartItems(cartItems.map(i =>
      i.id === productId && i.variant === variant ? { ...i, quantity } : i
    ));
  };

  const clearCart = () => setCartItems([]);
  const getCartTotal = () => cartItems.reduce((t, i) => t + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };