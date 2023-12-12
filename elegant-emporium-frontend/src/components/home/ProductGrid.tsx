import React, { useState } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard'; 

const ProductGrid: React.FC = () => {

const sampleProducts = [
    {
        id: 1,
        name: "Product 1",
        price: 10.99,
        image: "product1.jpg",
    },
    {
        id: 2,
        name: "Product 2",
        price: 19.99,
        image: "product2.jpg",
    },
    {
        id: 3,
        name: "Product 3",
        price: 14.99,
        image: "product3.jpg",
    },
    {
        id: 4,
        name: "Product 4",
        price: 8.99,
        image: "product4.jpg",
    },
    {
        id: 5,
        name: "Product 5",
        price: 12.99,
        image: "product5.jpg",
    },
    {
        id: 6,
        name: "Product 6",
        price: 9.99,
        image: "product6.jpg",
    },
    {
        id: 7,
        name: "Product 7",
        price: 16.99,
        image: "product7.jpg",
    },
    {
        id: 8,
        name: "Product 8",
        price: 11.99,
        image: "product8.jpg",
    },
];
  const [products, setProducts] = useState(sampleProducts); // Replace with your products data
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant='dark' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Row md='2'>
          {products.slice(0, 3).map((product, i) => (
            <Col key={i}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          {products.slice(3, 6).map((product, i) => (
            <Col key={i}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          {products.slice(6, 8).map((product, i) => (
            <Col key={i}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductGrid;