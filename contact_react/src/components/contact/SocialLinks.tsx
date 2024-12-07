import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const socialMedia = [
    {
      icon: <Facebook className="h-6 w-6" />,
      name: 'Facebook',
      url: '#',
      color: 'bg-blue-600'
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: 'Twitter',
      url: '#',
      color: 'bg-sky-500'
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      name: 'Instagram',
      url: '#',
      color: 'bg-pink-600'
    },
    {
      icon: <Youtube className="h-6 w-6" />,
      name: 'YouTube',
      url: '#',
      color: 'bg-red-600'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: 'LinkedIn',
      url: '#',
      color: 'bg-blue-700'
    }
  ];

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-purple-800 mb-6">Connect With Us</h2>
      <div className="flex justify-center space-x-4">
        {socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className={`${social.color} p-3 rounded-full text-white hover:opacity-90 transition-opacity duration-200`}
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;