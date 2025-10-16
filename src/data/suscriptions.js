// ============================================
// 📁 src/data/subscriptions.js
// ============================================

export const subscriptionPlans = [
  {
    id: "basic",
    name: "Básica",
    price: 2500,
    originalPrice: 2800,
    period: "cada 3 meses",
    frequency: "quarterly",
    description: "Perfecta para comenzar tu viaje sostenible",
    longDescription: "El plan ideal para quienes desean iniciarse en el mundo de la higiene bucal sostenible sin comprometer la calidad.",
    features: [
      "2 cabecillas biodegradables de alta calidad",
      "Semillas variadas incluidas (albahaca, cilantro, mostaza)",
      "Empaque 100% sostenible y compostable",
      "Envío gratis a toda Costa Rica",
      "Cancela cuando quieras sin penalización",
      "Acceso a guías de plantación digitales"
    ],
    highlights: [
      "Reduce tu huella de plástico en un 85%",
      "Ahorra ₡300 al año vs compra individual",
      "Flexibilidad total de cancelación"
    ],
    popular: false,
    savings: 300,
    savingsPercentage: 11,
    color: "blue",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    icon: "🌱",
    deliveryItems: 2,
    deliveryFrequency: "3 meses",
    recommended: false,
    maxOrderValue: 2500,
    minOrderValue: 2500,
    setupFee: 0,
    cancellationPolicy: "Cancelación sin penalización",
    benefits: [
      "Reduce tu huella de plástico en un 85%",
      "Ahorra ₡300 al año vs compra individual",
      "Flexibilidad total de cancelación",
      "Envío gratis garantizado"
    ],
    badge: null,
    isFeatured: false
  },
  {
    id: "personalized",
    name: "Personalizada",
    price: 4000,
    originalPrice: 4600,
    period: "cada 3 meses",
    frequency: "quarterly",
    description: "Adaptada a tus necesidades específicas",
    longDescription: "Nuestro plan más popular. Personaliza cada detalle de tu experiencia Ecodent según tus preferencias.",
    features: [
      "3 cabecillas biodegradables personalizables",
      "Elige tu tipo de semillas favoritas",
      "Firmeza de cerdas a tu elección (suave, media, dura)",
      "Contenido educativo exclusivo mensual",
      "Envío prioritario en 24-48 horas",
      "Acceso a comunidad privada Ecodent",
      "Descuento 10% en productos adicionales",
      "Tips personalizados de higiene bucal",
      "Atención prioritaria al cliente"
    ],
    highlights: [
      "Reduce tu huella de plástico en un 90%",
      "Ahorra ₡600 al año vs compra individual",
      "Personalización total según tus preferencias",
      "Comunidad exclusiva de usuarios conscientes"
    ],
    popular: true,
    savings: 600,
    savingsPercentage: 13,
    color: "green",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    icon: "⭐",
    deliveryItems: 3,
    deliveryFrequency: "3 meses",
    recommended: true,
    maxOrderValue: 4000,
    minOrderValue: 4000,
    setupFee: 0,
    cancellationPolicy: "Cancelación sin penalización después del primer mes",
    benefits: [
      "Reduce tu huella de plástico en un 90%",
      "Ahorra ₡600 al año vs compra individual",
      "Personalización total según tus preferencias",
      "Comunidad exclusiva de usuarios conscientes",
      "Envío más rápido"
    ],
    badge: "Más Popular",
    isFeatured: true
  },
  {
    id: "premium",
    name: "Premium",
    price: 7500,
    originalPrice: 9000,
    period: "cada 6 meses",
    frequency: "biannual",
    description: "La experiencia completa Ecodent",
    longDescription: "Nuestro plan premium con todos los beneficios y características exclusivas para quienes quieren lo mejor.",
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
    highlights: [
      "Reduce tu huella de plástico en un 95%",
      "Ahorra ₡1,500 al año vs compra individual",
      "Experiencia premium completa",
      "Beneficios de salud bucal comprobados con Miswak",
      "Valor agregado de ₡3,000 en beneficios extra"
    ],
    popular: false,
    savings: 1500,
    savingsPercentage: 17,
    color: "purple",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    icon: "👑",
    deliveryItems: 6,
    deliveryFrequency: "6 meses",
    recommended: false,
    maxOrderValue: 7500,
    minOrderValue: 7500,
    setupFee: 0,
    cancellationPolicy: "Cancelación con 30 días de anticipación",
    benefits: [
      "Reduce tu huella de plástico en un 95%",
      "Ahorra ₡1,500 al año vs compra individual",
      "Experiencia premium completa",
      "Beneficios de salud bucal comprobados",
      "Valor agregado de ₡3,000 en beneficios"
    ],
    badge: "Valor Premium",
    isFeatured: false
  }
];

export const subscriptionFrequencies = {
  monthly: {
    label: "Mensual",
    value: "monthly",
    discount: 0,
    description: "Recibe tu envío cada mes"
  },
  quarterly: {
    label: "Cada 3 meses",
    value: "quarterly",
    discount: 10,
    description: "Recibe tu envío cada trimestre"
  },
  biannual: {
    label: "Cada 6 meses",
    value: "biannual",
    discount: 15,
    description: "Recibe tu envío cada semestre"
  },
  annual: {
    label: "Anual",
    value: "annual",
    discount: 20,
    description: "Recibe tu envío una vez al año"
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
  ],
  basic: [
    "Envío gratis",
    "Cancela cuando quieras",
    "Acceso a guías de plantación"
  ],
  personalized: [
    "Todo de Básica",
    "Envío prioritario",
    "Comunidad exclusiva",
    "Descuento 10% en productos",
    "Atención prioritaria"
  ],
  premium: [
    "Todo de Personalizada",
    "Estuche de bambú gratis",
    "Descuento 15% permanente",
    "Envío express 24h",
    "Webinars mensuales",
    "Consulta dental online"
  ]
};

export const subscriptionComparison = [
  {
    feature: "Cabecillas por envío",
    basic: "2",
    personalized: "3",
    premium: "6"
  },
  {
    feature: "Personalización de semillas",
    basic: "Variadas",
    personalized: "A tu elección",
    premium: "Premium seleccionadas"
  },
  {
    feature: "Firmeza de cerdas",
    basic: "Estándar",
    personalized: "A tu elección",
    premium: "A tu elección"
  },
  {
    feature: "Envío",
    basic: "Gratis",
    personalized: "Prioritario 24-48h",
    premium: "Express 24h"
  },
  {
    feature: "Contenido educativo",
    basic: "Guías básicas",
    personalized: "Mensual exclusivo",
    premium: "Premium + Webinars"
  },
  {
    feature: "Comunidad",
    basic: "No",
    personalized: "Privada",
    premium: "Privada Premium"
  },
  {
    feature: "Descuento productos",
    basic: "No",
    personalized: "10%",
    premium: "15%"
  },
  {
    feature: "Estuche de regalo",
    basic: "No",
    personalized: "No",
    premium: "Sí (₡1,500)"
  },
  {
    feature: "Miswak en cabecillas",
    basic: "No",
    personalized: "Opcional",
    premium: "Sí, Premium"
  },
  {
    feature: "Soporte prioritario",
    basic: "Email",
    personalized: "Email/Chat",
    premium: "WhatsApp 24/7"
  }
];

export const getSubscriptionById = (id) => {
  return subscriptionPlans.find(plan => plan.id === id);
};

export const getSubscriptionByName = (name) => {
  return subscriptionPlans.find(plan => plan.name.toLowerCase() === name.toLowerCase());
};

export const calculateSubscriptionSavings = (planId, months = 12) => {
  const plan = getSubscriptionById(planId);
  if (!plan) return 0;
  
  const frequency = plan.frequency === 'quarterly' ? 4 : plan.frequency === 'biannual' ? 2 : 1;
  const yearlySubscriptionCost = plan.price * frequency;
  const yearlyRegularCost = plan.originalPrice * frequency;
  
  return yearlyRegularCost - yearlySubscriptionCost;
};

export const calculateMonthlySubscriptionCost = (planId) => {
  const plan = getSubscriptionById(planId);
  if (!plan) return 0;
  
  const frequency = plan.frequency === 'quarterly' ? 4 : plan.frequency === 'biannual' ? 2 : 1;
  const monthlyPrice = plan.price / (12 / frequency);
  
  return monthlyPrice;
};

export const getFeaturedPlans = () => {
  return subscriptionPlans.filter(plan => plan.isFeatured);
};

export const getMostPopularPlan = () => {
  return subscriptionPlans.find(plan => plan.popular);
};

export const getAllPlans = () => {
  return subscriptionPlans;
};

export const getPlansByPopularity = () => {
  return [...subscriptionPlans].sort((a, b) => {
    if (a.popular) return -1;
    if (b.popular) return 1;
    return 0;
  });
};

export const getPlansByPrice = (ascending = true) => {
  return [...subscriptionPlans].sort((a, b) => {
    return ascending ? a.price - b.price : b.price - a.price;
  });
};

export const calculateTotalValue = (planId, months = 12) => {
  const plan = getSubscriptionById(planId);
  if (!plan) return 0;
  
  const frequency = plan.frequency === 'quarterly' ? 4 : plan.frequency === 'biannual' ? 2 : 1;
  const cycles = months / (12 / frequency);
  const totalCost = plan.price * cycles;
  const totalValue = plan.originalPrice * cycles;
  
  return {
    subscriptionCost: totalCost,
    regularCost: totalValue,
    savings: totalValue - totalCost,
    savingsPercentage: Math.round(((totalValue - totalCost) / totalValue) * 100)
  };
};

export const getSubscriptionDetails = (planId) => {
  const plan = getSubscriptionById(planId);
  if (!plan) return null;
  
  return {
    ...plan,
    yearSavings: calculateSubscriptionSavings(planId),
    monthlyCost: calculateMonthlySubscriptionCost(planId),
    annualValue: calculateTotalValue(planId, 12)
  };
};

export const filterPlansByPrice = (minPrice, maxPrice) => {
  return subscriptionPlans.filter(plan => 
    plan.price >= minPrice && plan.price <= maxPrice
  );
};

export const filterPlansByFeature = (feature) => {
  return subscriptionPlans.filter(plan => 
    plan.features.some(f => f.toLowerCase().includes(feature.toLowerCase()))
  );
};

export default {
  subscriptionPlans,
  subscriptionFrequencies,
  subscriptionBenefits,
  subscriptionComparison,
  getSubscriptionById,
  getSubscriptionByName,
  calculateSubscriptionSavings,
  calculateMonthlySubscriptionCost,
  getFeaturedPlans,
  getMostPopularPlan,
  getAllPlans,
  getPlansByPopularity,
  getPlansByPrice,
  calculateTotalValue,
  getSubscriptionDetails,
  filterPlansByPrice,
  filterPlansByFeature
};