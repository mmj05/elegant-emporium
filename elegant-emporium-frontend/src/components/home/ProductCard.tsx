import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface Product {
  name: string;
  price: number;
  gender: string;
  category: string;
  description: string;
  image: string;
  quantity: number;
  _links: {
    self: {
      href: string;
    };
    product: {
      href: string;
    };
  };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;