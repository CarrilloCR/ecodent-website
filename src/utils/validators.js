export const validators = {
  required: (value) => {
    if (!value || value.trim() === '') {
      return 'Este campo es requerido';
    }
    return null;
  },

  email: (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      return 'Correo electrónico inválido';
    }
    return null;
  },

  phone: (value) => {
    const regex = /^[\d\s\-\+\(\)]+$/;
    const digitsOnly = value.replace(/\D/g, '');
    if (!regex.test(value) || digitsOnly.length < 8) {
      return 'Número de teléfono inválido (mínimo 8 dígitos)';
    }
    return null;
  },

  minLength: (min) => (value) => {
    if (value.length < min) {
      return `Debe tener al menos ${min} caracteres`;
    }
    return null;
  },

  maxLength: (max) => (value) => {
    if (value.length > max) {
      return `No debe exceder ${max} caracteres`;
    }
    return null;
  },

  password: (value) => {
    if (value.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres';
    }
    if (!/[A-Z]/.test(value)) {
      return 'Debe contener al menos una mayúscula';
    }
    if (!/[a-z]/.test(value)) {
      return 'Debe contener al menos una minúscula';
    }
    if (!/\d/.test(value)) {
      return 'Debe contener al menos un número';
    }
    return null;
  },

  passwordMatch: (password) => (value) => {
    if (value !== password) {
      return 'Las contraseñas no coinciden';
    }
    return null;
  },

  cardNumber: (value) => {
    const cleaned = value.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cleaned)) {
      return 'Número de tarjeta inválido';
    }
    return null;
  },

  cvv: (value) => {
    if (!/^\d{3,4}$/.test(value)) {
      return 'CVV inválido';
    }
    return null;
  },

  expiryDate: (value) => {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(value)) {
      return 'Formato inválido (MM/AA)';
    }
    const [month, year] = value.split('/');
    const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
    const today = new Date();
    if (expiry < today) {
      return 'Tarjeta vencida';
    }
    return null;
  },

  url: (value) => {
    try {
      new URL(value);
      return null;
    } catch {
      return 'URL inválida';
    }
  },

  positiveNumber: (value) => {
    const num = parseFloat(value);
    if (isNaN(num) || num <= 0) {
      return 'Debe ser un número positivo';
    }
    return null;
  },

  integer: (value) => {
    if (!Number.isInteger(Number(value))) {
      return 'Debe ser un número entero';
    }
    return null;
  },
};

export const validateForm = (formData, rules) => {
  const errors = {};
  
  Object.keys(rules).forEach((field) => {
    const fieldRules = Array.isArray(rules[field]) ? rules[field] : [rules[field]];
    const value = formData[field];
    
    for (const rule of fieldRules) {
      const error = rule(value);
      if (error) {
        errors[field] = error;
        break;
      }
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

