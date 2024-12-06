import React, { useState } from 'react';
import { Menu, X, PawPrint, ShoppingCart, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdoptionMenuOpen, setIsAdoptionMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

  const AdoptionDropdown = () => (
    <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-1 text-gray-700">
      <a href="/adoption/process" className="block px-4 py-2 hover:bg-purple-100">Adoption Process</a>
      <a href="/adoption/form" className="block px-4 py-2 hover:bg-purple-100">Adoption Form</a>
      <a href="/adoption/faqs" className="block px-4 py-2 hover:bg-purple-100">FAQs</a>
    </div>
  );

  const ShopDropdown = () => (
    <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-1 text-gray-700">
      <a href="/shop/food" className="block px-4 py-2 hover:bg-purple-100">Pet Food</a>
      <a href="/shop/accessories" className="block px-4 py-2 hover:bg-purple-100">Accessories</a>
      <a href="/shop/toys" className="block px-4 py-2 hover:bg-purple-100">Toys</a>
    </div>
  );

  return (
    <nav className="bg-purple-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <PawPrint className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">FureverHome</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="hover:bg-purple-600 px-3 py-2 rounded-md">Home</a>
            
            {/* Adoption Dropdown */}
            <div className="relative" onMouseEnter={() => setIsAdoptionMenuOpen(true)} onMouseLeave={() => setIsAdoptionMenuOpen(false)}>
              <button className="flex items-center hover:bg-purple-600 px-3 py-2 rounded-md">
                Adoption
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isAdoptionMenuOpen && <AdoptionDropdown />}
            </div>

            {/* Shop Dropdown */}
            <div className="relative" onMouseEnter={() => setIsShopMenuOpen(true)} onMouseLeave={() => setIsShopMenuOpen(false)}>
              <button className="flex items-center hover:bg-purple-600 px-3 py-2 rounded-md">
                Shop
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isShopMenuOpen && <ShopDropdown />}
            </div>

            {/* Auth & Cart */}
            <div className="flex items-center space-x-2">
              <a href="/auth" className="flex items-center hover:bg-purple-600 px-3 py-2 rounded-md">
                <User className="h-5 w-5 mr-1" />
                Sign In
              </a>
              <a href="/cart" className="flex items-center hover:bg-purple-600 px-3 py-2 rounded-md">
                <ShoppingCart className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-purple-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block hover:bg-purple-600 px-3 py-2 rounded-md">Home</a>
            
            {/* Mobile Adoption Section */}
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-medium">Adoption</div>
              <a href="/adoption/process" className="block hover:bg-purple-600 px-6 py-2 rounded-md text-sm">Adoption Process</a>
              <a href="/adoption/form" className="block hover:bg-purple-600 px-6 py-2 rounded-md text-sm">Adoption Form</a>
              <a href="/adoption/faqs" className="block hover:bg-purple-600 px-6 py-2 rounded-md text-sm">FAQs</a>
            </div>

            {/* Mobile Shop Section */}
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-medium">Shop</div>
              <a href="/shop/food" className="block hover:bg-purple-600 px-6 py-2 rounded-md text-sm">Pet Food</a>
              <a href="/shop/accessories" className="block hover:bg-purple-600 px-6 py-2 rounded-md text-sm">Accessories</a>
              <a href="/shop/toys" className="block hover:bg-purple-600 px-6 py-2 rounded-md text-sm">Toys</a>
            </div>

            {/* Mobile Auth & Cart */}
            <div className="border-t border-purple-600 pt-2">
              <a href="/auth" className="flex items-center hover:bg-purple-600 px-3 py-2 rounded-md">
                <User className="h-5 w-5 mr-2" />
                Sign In
              </a>
              <a href="/cart" className="flex items-center hover:bg-purple-600 px-3 py-2 rounded-md">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;