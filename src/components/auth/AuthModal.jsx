import React, { useState } from 'react';
import Modal from '../shared/Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode);

  // Actualizar el modo cuando cambie initialMode
  React.useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const handleSuccess = (userData) => {
    console.log('Auth success:', userData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title=""
      size="md"
    >
      {mode === 'login' ? (
        <LoginForm
          onSuccess={handleSuccess}
          onSwitchToRegister={() => setMode('register')}
        />
      ) : (
        <RegisterForm
          onSuccess={handleSuccess}
          onSwitchToLogin={() => setMode('login')}
        />
      )}
    </Modal>
  );
};

export default AuthModal;