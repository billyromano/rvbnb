import React from 'react';
import { Section } from '../../ui/Section';
import { ScrollReveal } from '../../Interactive/Animations/ScrollReveal';
import { faqData } from '../../../data/content';

export const FAQ: React.FC = () => {
  return (
    <Section title="Frequently Asked Questions" className="bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <div className="space-y-6">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};