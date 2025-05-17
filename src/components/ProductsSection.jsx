import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: "Bel Nerve Tablet",
    description: "Supports nerve health with Methylcobalamin, Alpha Lipoic Acid, Folic Acid, Pyridoxine, and Vitamin D3.",
    categories: ["Neurological Health", "Supplement"],
    image: "https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isNew: true
  },
  {
    id: 2,
    name: "Oacal Tablet",
    description: "Promotes bone health with Calcium Carbonate, L-Methylfolate, Methylcobalamin, and Vitamin D3.",
    categories: ["Bone Health", "Supplement"],
    image: "https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isNew: false
  },
  {
    id: 3,
    name: "Rabe Bel DSR Capsule",
    description: "Manages acid reflux with Rabeprazole and Domperidone for effective gastrointestinal relief.",
    categories: ["Gastrointestinal Health", "Prescription"],
    image: "https://images.pexels.com/photos/3683088/pexels-photo-3683088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isNew: false
  }
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Belgrand Pharmaceuticals Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore Belgrand Pharmaceuticals’ high-quality tablets and capsules, crafted to enhance health and well-being through innovative formulations.
            </p>
          </div>
          <Link 
            to="/products" 
            className="mt-6 md:mt-0 flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            <span className="font-medium">View All Belgrand Products</span>
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;