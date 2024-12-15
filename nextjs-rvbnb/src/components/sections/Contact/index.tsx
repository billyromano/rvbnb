'use client';

import { Section } from '@/components/ui/Section';
import { ContactForm } from './ContactForm';

export function Contact() {
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
}