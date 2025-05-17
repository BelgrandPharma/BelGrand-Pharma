import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 bg-primary rounded-md flex items-center justify-center mr-2">
        <div className="text-white font-bold text-xl">B</div>
      </div>
      <div>
        <h1 className="text-primary font-bold text-lg leading-none">BELGRAND</h1>
        <p className="text-xs text-secondary font-medium tracking-wider">PHARMACEUTICALS</p>
      </div>
    </div>
  );
};

export default Logo;