import React, { useState } from 'react';
import { User, Mail, Lock, Phone, Eye, EyeOff } from 'lucide-react';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { useAuth } from '../../hooks/UseAuth';
import { useNotification } from '../../context/NotificationContext';

const RegisterForm = ({ onSuccess, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { register } = useAuth();
  const { showNotification } = useNotification();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate
    const newErrors = {};
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showNotification('error', 'Por favor corrige los errores en el formulario');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Registro exitoso
      register({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone
      });
      
      showNotification('success', '¡Cuenta creada exitosamente! Bienvenido a Ecodent 🌱');
      
      setTimeout(() => {
        onSuccess(formData);
      }, 500);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-2">
          Únete a Ecodent
        </h2>
        <p className="text-gray-600">
          Comienza tu viaje sostenible hoy
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Nombre Completo"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          icon={User}
          placeholder="Juan Pérez"
          required
        />

        <Input
          label="Correo Electrónico"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          icon={Mail}
          placeholder="tu@email.com"
          required
        />

        <Input
          label="Teléfono"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          icon={Phone}
          placeholder="+506 8888-8888"
          required
        />

        <div className="relative">
          <Input
            label="Contraseña"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            icon={Lock}
            placeholder="••••••••"
            error={errors.password}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <Input
          label="Confirmar Contraseña"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          icon={Lock}
          placeholder="••••••••"
          error={errors.confirmPassword}
          required
        />

        <label className="flex items-start space-x-2 cursor-pointer">
          <input type="checkbox" className="mt-1 rounded border-gray-300 text-secondary focus:ring-secondary" required />
          <span className="text-sm text-gray-600">
            Acepto los{' '}
            <a href="#" className="text-secondary hover:underline">términos y condiciones</a>
            {' '}y la{' '}
            <a href="#" className="text-secondary hover:underline">política de privacidad</a>
          </span>
        </label>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          loading={isLoading}
        >
          Crear Cuenta
        </Button>
      </form>

      <p className="text-center text-sm text-gray-600">
        ¿Ya tienes cuenta?{' '}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-secondary font-semibold hover:underline"
        >
          Inicia sesión
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;