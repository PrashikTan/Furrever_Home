import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              FurrEver Home is dedicated to finding loving homes for pets in need.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/adoption" className="text-gray-300 hover:text-white">Adoption</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="/signin" className="text-gray-300 hover:text-white">Sign In</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@furreverhome.com</li>
              <li>Phone: 1234567890</li>
              <li>Address: 123 Pet Street, New Delhi</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by FurrEver Home © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;