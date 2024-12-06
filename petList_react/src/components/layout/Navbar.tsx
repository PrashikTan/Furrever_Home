import React from 'react';
import { Home, PawPrint, LogIn, Phone, UserCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-purple-600">FurrEver Home</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink icon={<Home size={18} />} text="Home" href="/" />
            <NavLink icon={<PawPrint size={18} />} text="Adoption Process" href="/adoption" />
            <NavLink icon={<Phone size={18} />} text="Contact Us" href="/contact" />
            <NavLink icon={<LogIn size={18} />} text="Sign In" href="/signin" />
            <NavLink icon={<UserCircle size={18} />} text="Dashboard" href="/dashboard" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) => (
  <a
    href={href}
    className="flex items-center space-x-1 text-gray-600 hover:text-purple-600 transition-colors duration-200"
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default Navbar;