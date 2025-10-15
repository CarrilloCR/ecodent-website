export const subscriptionPlans = [
  {
    id: "basic",
    name: "Básica",
    price: 2500,
    originalPrice: 2800,
    period: "cada 3 meses",
    frequency: "quarterly",
    description: "Perfecta para comenzar tu viaje sostenible",
    features: [
      "2 cabecillas biodegradables de alta calidad",
      "Semillas variadas incluidas (albahaca, cilantro, mostaza)",
      "Empaque 100% sostenible y compostable",
      "Envío gratis a toda Costa Rica",
      "Cancela cuando quieras sin penalización",
      "Acceso a guías de plantación digitales"
    ],
    popular: false,
    savings: 300,
    savingsPercentage: 11,
    color: "blue",
    icon: "🌱",
    deliveryItems: 2,
    deliveryFrequency: "3 meses",
    recommended: false,
    benefits: [
      "Reduce tu huella de plástico en un 85%",
      "Ahorra ₡300 al año vs compra individual",
      "Flexibilidad total de cancelación"
    ]
  },
  {
    id: "personalized",
    name: "Personalizada",
    price: 4000,
    originalPrice: 4600,
    period: "cada 3 meses",
    frequency: "quarterly",
    description: "Adaptada a tus necesidades específicas",
    features: [
      "3 cabecillas biodegradables personalizables",
      "Elige tu tipo de semillas favoritas",
      "Firmeza de cerdas a tu elección (suave, media, dura)",
      "Contenido educativo exclusivo mensual",
      "Envío prioritario en 24-48 horas",
      "Acceso a comunidad privada Ecodent",
      "Descuento 10% en productos adicionales",
      "Tips personalizados de higiene bucal"
    ],
    popular: true,
    savings: 600,
    savingsPercentage: 13,
    color: "green",
    icon: "⭐",
    deliveryItems: 3,
    deliveryFrequency: "3 meses",
    recommended: true,
    benefits: [
      "Reduce tu huella de plástico en un 90%",
      "Ahorra ₡600 al año vs compra individual",
      "Personalización total según tus preferencias",
      "Comunidad exclusiva de usuarios conscientes"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    price: 7500,
    originalPrice: 9000,
    period: "cada 6 meses",
    frequency: "biannual",
    description: "La experiencia completa Ecodent",
    features: [
      "6 cabecillas premium con fibras de Miswak",
      "Semillas premium cuidadosamente seleccionadas",
      "Estuche de bambú de lujo de regalo (₡1,500)",
      "Comunidad exclusiva de miembros premium",
      "15% descuento permanente en todos los productos",
      "Envío express en 24 horas garantizado",
      "Contenido educativo premium y webinars mensuales",
      "Soporte prioritario vía WhatsApp",
      "Acceso anticipado a productos nuevos",
      "Consulta dental online trimestral gratis"
    ],
    popular: false,
    savings: 1500,
    savingsPercentage: 17,
    color: "purple",
    icon: "👑",
    deliveryItems: 6,
    deliveryFrequency: "6 meses",
    recommended: false,
    benefits: [
      "Reduce tu huella de plástico en un 95%",
      "Ahorra ₡1,500 al año vs compra individual",
      "Experiencia premium completa",
      "Beneficios de salud bucal comprobados con Miswak",
      "Valor agregado de ₡3,000 en beneficios extra"
    ]
  }
];

export const subscriptionFrequencies = {
  monthly: {
    label: "Mensual",
    value: "monthly",
    discount: 0
  },
  quarterly: {
    label: "Cada 3 meses",
    value: "quarterly",
    discount: 10
  },
  biannual: {
    label: "Cada 6 meses",
    value: "biannual",
    discount: 15
  },
  annual: {
    label: "Anual",
    value: "annual",
    discount: 20
  }
};

export const subscriptionBenefits = {
  all: [
    {
      title: "Envío Gratis Siempre",
      description: "Todos los envíos incluidos sin costo adicional",
      icon: "🚚"
    },
    {
      title: "Sin Compromiso",
      description: "Cancela, pausa o modifica cuando quieras",
      icon: "✅"
    },
    {
      title: "Ahorro Garantizado",
      description: "Precios más bajos que compra individual",
      icon: "💰"
    },
    {
      title: "Impacto Medible",
      description: "Recibe reportes de tu impacto ambiental",
      icon: "🌍"
    },
    {
      title: "Prioridad en Lanzamientos",
      description: "Sé el primero en probar nuevos productos",
      icon: "🎁"
    },
    {
      title: "Comunidad Exclusiva",
      description: "Únete a una red de personas conscientes",
      icon: "👥"
    }
  ]
};

export const getSubscriptionById = (id) => {
  return subscriptionPlans.find(plan => plan.id === id);
};

export const calculateSubscriptionSavings = (planId, months = 12) => {
  const plan = getSubscriptionById(planId);
  if (!plan) return 0;
  
  const yearlySubscriptionCost = plan.frequency === 'quarterly' 
    ? plan.price * 4 
    : plan.price * 2;
    
  const yearlyRegularCost = plan.originalPrice * (plan.frequency === 'quarterly' ? 4 : 2);
  
  return yearlyRegularCost - yearlySubscriptionCost;
};

