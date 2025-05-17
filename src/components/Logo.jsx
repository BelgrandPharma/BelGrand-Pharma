import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        src="/src/images/BelGrand Pharma LOGO.png"
        alt="Belgrand Pharmaceuticals Logo"
        className="h-10 w-auto mr-2"
      />
      <div>
        <h1 className="text-primary font-bold text-lg leading-none">BELGRAND</h1>
        {/* <h1 className="text-[#2842d6] font-bold text-lg leading-none">BELGRAND</h1> */}
        <p className="text-xs text-secondary font-medium tracking-wider">PHARMACEUTICALS</p>
        {/* <p className="text-xs text-[#99ff3a] font-medium tracking-wider">PHARMACEUTICALS</p> */}
      </div>
    </div>
  );
};

export default Logo;