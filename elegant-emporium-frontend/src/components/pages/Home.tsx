// src/views/Home.tsx
import React from 'react';
import HeroSection from '../home/HeroSection';
import ProductGrid from '../home/ProductGrid';
import PromotionalSection from '../home/PromotionalSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ProductGrid />
      <PromotionalSection />
    </div>
  );
};

export default Home;
