import React, { useState } from 'react';
import { User, Package, CreditCard, MapPin, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/UseAuth';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout, updateUser } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
  };

  const tabs = [
    { id: 'profile', label: 'Mi Perfil', icon: <User className="w-5 h-5" /> },
    { id: 'orders', label: 'Mis Pedidos', icon: <Package className="w-5 h-5" /> },
    { id: 'subscription', label: 'Suscripción', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'addresses', label: 'Direcciones', icon: <MapPin className="w-5 h-5" /> }
  ];

  const orders = [
    {
      id: 'ORD-001',
      date: '2024-10-01',
      status: 'Entregado',
      total: 9000,
      items: 'Kit Inicial Ecodent'
    },
    {
      id: 'ORD-002',
      date: '2024-10-10',
      status: 'En camino',
      total: 2800,
      items: 'Pack 2 Cabecillas'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-cream">
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Mi Cuenta</h1>
          <p className="text-xl">Bienvenido de nuevo, {user?.fullName || 'Usuario'}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-secondary text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {tab.icon}
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 transition-all"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Cerrar Sesión</span>
                </button>
              </Card>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {/* Profile */}
              {activeTab === 'profile' && (
                <Card>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-primary">Mi Perfil</h2>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={Settings}
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {isEditing ? 'Cancelar' : 'Editar'}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <Input
                      label="Nombre Completo"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      disabled={!isEditing}
                    />
                    <Input
                      label="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      disabled={!isEditing}
                    />
                    <Input
                      label="Teléfono"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      disabled={!isEditing}
                    />

                    {isEditing && (
                      <Button onClick={handleSave} className="w-full">
                        Guardar Cambios
                      </Button>
                    )}
                  </div>
                </Card>
              )}

              {/* Orders */}
              {activeTab === 'orders' && (
                <Card>
                  <h2 className="text-2xl font-bold text-primary mb-6">Mis Pedidos</h2>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border-2 border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-bold text-primary">Pedido {order.id}</p>
                            <p className="text-sm text-gray-600">{order.date}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            order.status === 'Entregado' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-2">{order.items}</p>
                        <p className="font-bold text-primary">₡{order.total.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Subscription */}
              {activeTab === 'subscription' && (
                <Card>
                  <h2 className="text-2xl font-bold text-primary mb-6">Mi Suscripción</h2>
                  <div className="bg-accent rounded-lg p-6 mb-6">
                    <p className="text-sm text-gray-600 mb-2">Plan Actual</p>
                    <p className="text-2xl font-bold text-primary mb-4">Plan Personalizada</p>
                    <p className="text-gray-700 mb-4">
                      Próximo envío: 15 de Enero, 2025
                    </p>
                    <div className="flex gap-4">
                      <Button variant="outline">Pausar Suscripción</Button>
                      <Button variant="outline">Cambiar Plan</Button>
                    </div>
                  </div>
                </Card>
              )}

              {/* Addresses */}
              {activeTab === 'addresses' && (
                <Card>
                  <h2 className="text-2xl font-bold text-primary mb-6">Mis Direcciones</h2>
                  <Button icon={MapPin}>Agregar Nueva Dirección</Button>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
