import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Yashika Singh",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    pet: "Luna",
    quote: "Adopting Luna was the best decision we ever made. The rescue centre made the process so smooth and supportive.",
    petImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1"
  },
  {
    name: "Rohan Agarwal",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    pet: "Rocky",
    quote: "The dedication of the staff here is incredible. They truly care about matching the right pet with the right family.",
    petImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee"
  }
];

const TestimonialSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Success Stories</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-purple-600">Proud parent of {testimonial.pet}</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute text-purple-200 w-8 h-8 -left-2 -top-2" />
                <p className="relative text-gray-600 italic pl-6">{testimonial.quote}</p>
              </div>
              
              <img
                src={testimonial.petImage}
                alt={`${testimonial.pet}`}
                className="w-full h-48 object-cover rounded-lg mt-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;