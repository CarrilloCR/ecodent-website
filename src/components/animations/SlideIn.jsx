import React, { useEffect, useState, useRef } from 'react';

const SlideIn = ({ 
  children, 
  delay = 0, 
  duration = 600,
  from = 'left',
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const getTransform = () => {
    if (!isVisible) {
      switch (from) {
        case 'left':
          return 'translateX(-100%)';
        case 'right':
          return 'translateX(100%)';
        case 'top':
          return 'translateY(-100%)';
        case 'bottom':
          return 'translateY(100%)';
        default:
          return 'translateX(-100%)';
      }
    }
    return 'translate(0)';
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}ms ease-out`
      }}
    >
      {children}
    </div>
  );
};

export default SlideIn;

