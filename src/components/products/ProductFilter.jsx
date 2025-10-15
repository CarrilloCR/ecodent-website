import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Package } from 'lucide-react';
import Input from '../shared/Input';
import Button from '../shared/Button';

const ProductFilter = ({ onFilterChange, onSearch }) => {
  const [filters, setFilters] = React.useState({
    category: 'all',
    priceRange: 'all',
    sortBy: 'popular'
  });

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'kit', label: 'Kits' },
    { value: 'refill', label: 'Repuestos' },
    { value: 'premium', label: 'Premium' }
  ];

  const priceRanges = [
    { value: 'all', label: 'Todos los precios' },
    { value: 'under-3000', label: 'Menos de ₡3,000' },
    { value: '3000-7000', label: '₡3,000 - ₡7,000' },
    { value: 'over-7000', label: 'Más de ₡7,000' }
  ];

  const sortOptions = [
    { value: 'popular', label: 'Más populares' },
    { value: 'price-low', label: 'Precio: Menor a Mayor' },
    { value: 'price-high', label: 'Precio: Mayor a Menor' },
    { value: 'newest', label: 'Más recientes' }
  ];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-primary flex items-center">
          <SlidersHorizontal className="w-5 h-5 mr-2" />
          Filtros
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setFilters({ category: 'all', priceRange: 'all', sortBy: 'popular' });
            onFilterChange({ category: 'all', priceRange: 'all', sortBy: 'popular' });
          }}
        >
          Limpiar
        </Button>
      </div>

      {/* Search */}
      <div>
        <Input
          icon={Search}
          placeholder="Buscar productos..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Categoría
        </label>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat.value}
                checked={filters.category === cat.value}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="text-secondary focus:ring-secondary"
              />
              <span className="text-gray-700">{cat.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Rango de Precio
        </label>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="priceRange"
                value={range.value}
                checked={filters.priceRange === range.value}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="text-secondary focus:ring-secondary"
              />
              <span className="text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Ordenar Por
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;

