import React from 'react';
import { PawPrint } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-purple-700 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1920"
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <PawPrint className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Companion
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Give a loving home to a pet in need. Browse our available pets and start your journey to finding your new best friend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/adoption/pets"
              className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Find a Pet
            </a>
            <a
              href="/adoption"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;