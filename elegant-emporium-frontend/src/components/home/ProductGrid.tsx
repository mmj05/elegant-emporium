// src/components/home/ProductGrid.tsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductGrid: React.FC = () => {
  // Dummy product data for illustration
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'product2.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <Card>
            <Card.Img variant="top" src={`/images/${product.image}`} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
