import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 mix-blend-multiply"></div>
        <img
          src="https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg"
          alt="Belgrand Pharmaceuticals laboratory"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in">
            Pioneering Health with <span className="text-secondary">Innovative Pharmaceuticals</span>
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl animate-slide-in" style={{animationDelay: '0.1s'}}>
            At Belgrand Pharmaceuticals, we are dedicated to transforming lives by delivering high-quality tablets and medications, such as Bel Vit, Oacal, and Bel Nerve Tablet. Through cutting-edge research, robust marketing, and a global distribution network, we ensure accessible healthcare solutions for millions.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-slide-in" style={{animationDelay: '0.2s'}}>
            <Link to="/products" className="btn btn-secondary">
              Discover Belgrand Medicines
            </Link>
            <Link to="/appointment" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
              Connect With Belgrand <ChevronRight className="ml-1" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;