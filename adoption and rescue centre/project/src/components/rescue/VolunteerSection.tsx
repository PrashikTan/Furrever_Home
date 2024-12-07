import React from 'react';
import { Heart, Users, Calendar, Award } from 'lucide-react';

const opportunities = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Animal Care",
    description: "Help with feeding, grooming, and socializing our rescued pets"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Event Support",
    description: "Assist in organizing and running adoption events"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Foster Program",
    description: "Provide temporary homes for animals awaiting adoption"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Training Assistant",
    description: "Help with basic training and behavioral development"
  }
];

const VolunteerSection = () => {
  return (
    <div className="bg-purple-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Volunteer With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our community of dedicated volunteers and make a difference in the lives of rescued pets.
            We offer various opportunities to contribute based on your skills and availability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-purple-600 mb-4">{opportunity.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{opportunity.title}</h3>
              <p className="text-gray-600">{opportunity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Volunteer Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerSection;