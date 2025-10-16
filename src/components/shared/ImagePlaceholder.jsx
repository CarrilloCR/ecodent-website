import React from 'react';
import { Package, Leaf } from 'lucide-react';

const ImagePlaceholder = ({ productName, type = 'default', className = '' }) => {
  const icons = {
    kit: <Package className="w-32 h-32 text-primary" />,
    refill: <Leaf className="w-32 h-32 text-secondary" />,
    premium: <Package className="w-32 h-32 text-yellow-500" />,
    default: <Package className="w-32 h-32 text-primary" />
  };

  const backgrounds = {
    kit: 'from-blue-100 to-blue-50',
    refill: 'from-green-100 to-green-50',
    premium: 'from-yellow-100 to-yellow-50',
    default: 'from-gray-100 to-gray-50'
  };

  return (
    <div className={`w-full h-full bg-gradient-to-br ${backgrounds[type]} flex flex-col items-center justify-center rounded-3xl ${className}`}>
      {icons[type]}
      <p className="text-gray-600 font-medium text-center mt-4 px-4 text-sm">
        {productName}
      </p>
    </div>
  );
};

export default ImagePlaceholder;