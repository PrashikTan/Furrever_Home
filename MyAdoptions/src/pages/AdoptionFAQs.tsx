import React from 'react';
import FAQItem from '../components/FAQItem';
import { MessageCircle } from 'lucide-react';

const AdoptionFAQs = () => {
  const faqs = [
    {
      question: "How does the adoption process work?",
      answer: "Our adoption process involves filling out an application, home visit, meeting the pet, and finalizing paperwork. We ensure each pet finds their perfect forever home through careful matching."
    },
    {
      question: "What are the adoption fees?",
      answer: "Adoption fees typically range from $50-$300 depending on the animal's age, species, and medical needs. All pets are spayed/neutered, vaccinated, and microchipped."
    },
    {
      question: "What if I can't continue with adoption?",
      answer: "We understand circumstances change. If you need to return a pet, contact us within 30 days for our return policy. We're here to support both you and the pet."
    }
  ];

  return (
    <div className="min-h-screen bg-purple-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-purple-900 mb-8">Adoption FAQs</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="bg-purple-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-purple-900 mb-4">Need More Help?</h2>
          <p className="text-purple-700 mb-4">
            Can't find the answer you're looking for? Our support team is here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdoptionFAQs;