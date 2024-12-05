import React from 'react';
import { PawPrint, Heart, Bell, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <PawPrint className="h-8 w-8 text-soft-blue" />
            <span className="ml-2 text-xl font-semibold text-charcoal">PetPal</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center text-warm-grey hover:text-soft-blue">
              <Heart className="h-5 w-5 mr-1" />
              <span>Favorites</span>
            </a>
            <a href="#" className="flex items-center text-warm-grey hover:text-soft-blue">
              <Bell className="h-5 w-5 mr-1" />
              <span>Notifications</span>
            </a>
            <div className="flex items-center text-warm-grey hover:text-soft-blue cursor-pointer">
              <User className="h-5 w-5 mr-1" />
              <span>Profile</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};