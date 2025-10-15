import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('ecodent_cart') || '[]');
    setCartItems(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('ecodent_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1, variant = null) => {
    const existing = cartItems.find(i => i.id === product.id && i.variant === variant);
    if (existing) {
      setCartItems(cartItems.map(i => 
        i.id === product.id && i.variant === variant 
          ? { ...i, quantity: i.quantity + quantity }
          : i
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity, variant }]);
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
  const getCartItemsCount = () => cartItems.reduce((c, i) => c + i.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartItemsCount }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
