import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const rescueCentres = [
  {
    name: "Paws & Love Rescue",
    address: "123 Rescue Lane, Pet Haven, NY 10001",
    phone: "(555) 123-4567",
    email: "rescue@pawsandlove.com",
    hours: {
      weekday: "Mon-Sat: 10:00 AM - 6:00 PM",
      weekend: "Sun: 12:00 PM - 4:00 PM"
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763931327!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645883772876!5m2!1sen!2s"
  },
  {
    name: "Happy Tails Haven",
    address: "456 Pet Street, Animal City, CA 90210",
    phone: "(555) 987-6543",
    email: "care@happytails.com",
    hours: {
      weekday: "Mon-Fri: 9:00 AM - 7:00 PM",
      weekend: "Sat-Sun: 10:00 AM - 5:00 PM"
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192113701854!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1645883821876!5m2!1sen!2s"
  },
  {
    name: "Furry Friends Sanctuary",
    address: "789 Adoption Drive, Pawsville, TX 75001",
    phone: "(555) 246-8135",
    email: "help@furryfriends.com",
    hours: {
      weekday: "Mon-Thu: 11:00 AM - 8:00 PM",
      weekend: "Fri-Sun: 9:00 AM - 6:00 PM"
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.14300773583!2d-96.87301493701857!3d32.82066130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1645883871876!5m2!1sen!2s"
  }
];

const RescueCentreList = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Rescue Centres</h2>
        
        <div className="grid md:grid-cols-1 gap-8">
          {rescueCentres.map((centre, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-6">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">{centre.name}</h3>
                  <div className="space-y-4">
                    <ContactInfo 
                      icon={<MapPin />}
                      title="Address"
                      info={centre.address}
                    />
                    <ContactInfo 
                      icon={<Phone />}
                      title="Phone"
                      info={centre.phone}
                    />
                    <ContactInfo 
                      icon={<Mail />}
                      title="Email"
                      info={centre.email}
                    />
                    <ContactInfo 
                      icon={<Clock />}
                      title="Visiting Hours"
                      info={centre.hours.weekday}
                      subInfo={centre.hours.weekend}
                    />
                  </div>
                  
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                    Schedule a Visit
                  </button>
                </div>
                
                <div className="h-[400px] rounded-lg overflow-hidden">
                  <iframe
                    src={centre.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
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

export default RescueCentreList;