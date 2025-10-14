import React from 'react';

const FloatingElement = ({ 
  children, 
  duration = 3,
  delay = 0,
  distance = 20,
  className = ''
}) => {
  const style = {
    animation: `float ${duration}s ease-in-out infinite`,
    animationDelay: `${delay}s`,
    '--float-distance': `${distance}px`
  };

  return (
    <div className={`animate-float ${className}`} style={style}>
      {children}
    </div>
  );
};

export default FloatingElement;
