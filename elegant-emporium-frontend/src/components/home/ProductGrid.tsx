// src/components/product/ProductGrid.tsx
import React from 'react';
import './ProductGrid.css'; // Import your custom styles
import { useState } from 'react';

const ProductGrid: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    'Product 1', 'Product 2', 'Product 3', 'Product 4',
    'Product 5', 'Product 6', 'Product 7', 'Product 8',
  ];

  const renderProductCard = (productName: string) => (
    <div className="product-card" key={productName}>
      <img className="product-image" src="https://via.placeholder.com/150" alt={productName} />
      <div className="product-info">
        <h4>{productName}</h4>
        <p>Product description goes here.</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : products.length - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < products.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="product-grid">
      <div className="carousel">
        <div className="carousel-inner">
          <div className={`carousel-item ${currentIndex === 0 ? 'active' : ''}`}>
            <div className="product-row">
              {products.slice(0, 4).map(renderProductCard)}
            </div>
          </div>
          <div className={`carousel-item ${currentIndex === 1 ? 'active' : ''}`}>
            <div className="product-row">
              {products.slice(4, 8).map(renderProductCard)}
            </div>
          </div>
        </div>
        <button className="prev-button" onClick={handlePrevClick}>Previous</button>
        <button className="next-button" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default ProductGrid;
