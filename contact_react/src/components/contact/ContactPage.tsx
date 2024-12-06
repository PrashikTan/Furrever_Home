import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

const ContactPage = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about adoption or need support? We're here to help! Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="mb-12">
          <ContactInfo />
        </div>

        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>

        <div className="mt-12">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;