import React from 'react';
import { Heart } from 'lucide-react';

const IntroSection = () => {
  return (
    <div className="relative">
      <div className="h-[400px] w-full relative">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
          alt="Rescued pets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/60"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <Heart className="mx-auto mb-6 w-16 h-16" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Rescue Centre</h1>
          <p className="text-xl">
            Where every tail tells a story of hope, and every bark echoes a second chance at happiness.
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 -mt-20 relative z-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            At Furrever Home Rescue Centre, we're dedicated to providing shelter, care, and love to animals in need. 
            Our mission is to rescue, rehabilitate, and rehome pets while educating our community about responsible pet ownership.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <ValueCard title="Compassion" description="Every animal deserves love and care" />
            <ValueCard title="Dedication" description="Committed to finding the perfect home" />
            <ValueCard title="Community" description="Building a network of pet lovers" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ title, description }: { title: string; description: string }) => (
  <div className="text-center p-4">
    <h3 className="text-lg font-semibold text-purple-700 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default IntroSection;