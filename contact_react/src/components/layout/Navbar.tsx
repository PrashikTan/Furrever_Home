import React from 'react';
import { Home, PawPrint, LogIn, Phone, UserCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-purple-700 text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8" />
            <span className="text-xl font-bold">Furrever Home</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavLink icon={<Home className="h-5 w-5" />} text="Home" />
            <NavLink icon={<PawPrint className="h-5 w-5" />} text="Adoption Process" />
            <NavLink icon={<Phone className="h-5 w-5" />} text="Contact Us" />
            <NavLink icon={<LogIn className="h-5 w-5" />} text="Sign In" />
            <NavLink icon={<UserCircle className="h-5 w-5" />} text="Dashboard" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <a
    href="#"
    className="flex items-center space-x-1 hover:text-purple-200 transition-colors duration-200"
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default Navbar;