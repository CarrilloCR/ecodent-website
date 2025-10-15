import React, { useState } from 'react';
import ProductCard from '../components/products/ProductCard';
import ProductDetail from '../components/products/ProductDetail';
import ProductFilter from '../components/products/ProductFilter';
import Modal from '../components/shared/Modal';
import { useCart } from '../hooks/UseCart';
import { products } from '../data/products';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const { addToCart } = useCart();

  const handleFilterChange = (filters) => {
    let filtered = [...products];

    // Filter by category
    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    // Filter by price range
    if (filters.priceRange !== 'all') {
      if (filters.priceRange === 'under-3000') {
        filtered = filtered.filter(p => p.price < 3000);
      } else if (filters.priceRange === '3000-7000') {
        filtered = filtered.filter(p => p.price >= 3000 && p.price <= 7000);
      } else if (filters.priceRange === 'over-7000') {
        filtered = filtered.filter(p => p.price > 7000);
      }
    }

    // Sort
    if (filters.sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredProducts(products);
      return;
    }
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="pt-20 min-h-screen bg-cream">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Nuestros Productos</h1>
          <p className="text-xl">
            Descubre nuestra línea completa de cepillos sostenibles
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1">
              <ProductFilter
                onFilterChange={handleFilterChange}
                onSearch={handleSearch}
              />
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <p className="text-gray-600">
                  Mostrando {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onQuickView={handleQuickView}
                  />
                ))}
              </div>
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-600 text-lg">
                    No se encontraron productos con los filtros seleccionados
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <Modal
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        title=""
        size="xl"
      >
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setIsDetailOpen(false)}
            onAddToCart={handleAddToCart}
          />
        )}
      </Modal>
    </div>
  );
};

export default Products;

