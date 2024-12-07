import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LogIn, PawPrint, MessageCircle, UserCircle } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-purple-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl">
              <PawPrint />
              <span>Furrever Home</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <NavLink 
              to="/" 
              icon={<Home size={18} />} 
              text="Home" 
              active={location.pathname === '/'} 
            />
            <NavLink 
              to="/" 
              icon={<PawPrint size={18} />} 
              text="Adoption Process" 
              active={location.pathname === '/'} 
            />
            <NavLink 
              to="/rescue" 
              icon={<MessageCircle size={18} />} 
              text="Rescue Centre" 
              active={location.pathname === '/rescue'} 
            />
            <NavLink 
              to="/dashboard" 
              icon={<UserCircle size={18} />} 
              text="Dashboard" 
              active={location.pathname === '/dashboard'} 
            />
            <NavLink 
              to="/login" 
              icon={<LogIn size={18} />} 
              text="Sign In" 
              active={location.pathname === '/login'} 
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ 
  to, 
  icon, 
  text, 
  active = false 
}: { 
  to: string; 
  icon: React.ReactNode; 
  text: string; 
  active?: boolean;
}) => (
  <Link
    to={to}
    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
      active
        ? 'text-white bg-purple-600'
        : 'text-purple-100 hover:text-white hover:bg-purple-600'
    }`}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;