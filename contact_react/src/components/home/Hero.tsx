import React from 'react';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-purple-900/60" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div className="flex items-center justify-center mb-6">
          <Heart className="h-12 w-12 text-purple-300" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Your Perfect Companion
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Give a loving home to a pet in need. Start your journey to find your furrever friend today.
        </p>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200">
          Start Adoption Process
        </button>
      </div>
    </div>
  );
};

export default Hero;