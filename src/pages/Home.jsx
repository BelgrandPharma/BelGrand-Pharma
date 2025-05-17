import React from 'react';
import HeroSection from '../../../PROJECT 3/src/components/HeroSection';
import FeatureSection from '../../../PROJECT 3/src/components/FeatureSection';
import ProductsSection from '../../../PROJECT 3/src/components/ProductsSection';
import TestimonialsSection from '../../../PROJECT 3/src/components/TestimonialsSection';
import CtaSection from '../../../PROJECT 3/src/components/CtaSection';


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