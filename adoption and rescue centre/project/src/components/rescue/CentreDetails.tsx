import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const CentreDetails = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Visit Us</h2>
            <div className="space-y-4">
              <ContactInfo 
                icon={<MapPin />}
                title="Address"
                info="123 Rescue Lane, Pet Haven, NY 10001"
              />
              <ContactInfo 
                icon={<Phone />}
                title="Phone"
                info="(555) 123-4567"
              />
              <ContactInfo 
                icon={<Mail />}
                title="Email"
                info="rescue@furreverhome.com"
              />
              <ContactInfo 
                icon={<Clock />}
                title="Visiting Hours"
                info="Mon-Sat: 10:00 AM - 6:00 PM"
                subInfo="Sun: 12:00 PM - 4:00 PM"
              />
            </div>
            
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Schedule a Visit
            </button>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763931327!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645883772876!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ 
  icon, 
  title, 
  info, 
  subInfo 
}: { 
  icon: React.ReactNode; 
  title: string; 
  info: string; 
  subInfo?: string;
}) => (
  <div className="flex items-start space-x-3">
    <div className="text-purple-600">{icon}</div>
    <div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{info}</p>
      {subInfo && <p className="text-gray-600">{subInfo}</p>}
    </div>
  </div>
);

export default CentreDetails;