import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Furrever Home</h3>
            <p className="text-purple-100">
              Finding loving homes for pets in need.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-200">Home</a></li>
              <li><a href="#" className="hover:text-purple-200">Adoption Process</a></li>
              <li><a href="#" className="hover:text-purple-200">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook />} />
              <SocialIcon icon={<Twitter />} />
              <SocialIcon icon={<Instagram />} />
              <SocialIcon icon={<Mail />} />
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-600 mt-8 pt-4 text-center">
          <p className="text-purple-100">
            © {new Date().getFullYear()} Furrever Home. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a
    href="#"
    className="p-2 hover:bg-purple-600 rounded-full transition-colors duration-200"
  >
    {icon}
  </a>
);

export default Footer;