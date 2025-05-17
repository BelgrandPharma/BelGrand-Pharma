import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import ProductsSection from '../components/ProductsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <ProductsSection />
      {/* <TestimonialsSection /> */}
      <CtaSection />
    </div>
  );
};

export default Home;