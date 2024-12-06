import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      info: "1234567890",
      subInfo: "Mon-Fri 9:00 AM - 6:00 PM"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      info: "support@furreverhome.com",
      subInfo: "24/7 Online Support"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      info: "123 Pet Street",
      subInfo: "New Delhi, India"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      info: "Mon-Fri: 9:00 AM - 6:00 PM",
      subInfo: "Sat-Sun: 10:00 AM - 4:00 PM"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactDetails.map((detail, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-full text-purple-600">
              {detail.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-purple-800">{detail.title}</h3>
              <p className="text-gray-700">{detail.info}</p>
              <p className="text-sm text-gray-500">{detail.subInfo}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;