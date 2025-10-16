import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-current text-current hover:bg-current hover:bg-opacity-10',
    ghost: 'text-primary hover:bg-accent',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {Icon && iconPosition === 'left' && !loading && <Icon className="w-5 h-5 mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && !loading && <Icon className="w-5 h-5 ml-2" />}
    </button>
  );
};

export default Button;