import React from 'react';
import { PlusCircle } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="card overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
          {product.isNew && (
            <span className="bg-secondary text-white text-xs font-medium px-2.5 py-1 rounded">NEW</span>
          )}
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.categories.map((category, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded"
            >
              {category}
            </span>
          ))}
        </div>
        <button className="flex items-center text-primary hover:text-primary-dark transition-colors">
          <PlusCircle size={18} className="mr-2" />
          <span className="fontecia-medium">Learn More About Belgrand Product</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;