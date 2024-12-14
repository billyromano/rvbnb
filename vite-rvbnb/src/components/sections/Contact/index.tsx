import React from 'react';
import { Section } from '../../ui/Section';
import { ContactForm } from '../../Contact/ContactForm';

export const Contact: React.FC = () => {
  return (
    <Section title="Get in Touch" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 mb-8">
          Have questions about RVbnb? We're here to help!
        </p>
        <ContactForm />
      </div>
    </Section>
  );
};