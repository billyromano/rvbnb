import React from 'react';
import { FAQItem } from './FAQItem';
import { Section } from '../ui/Section';
import { faqData } from '../../data/content';

export const FAQ: React.FC = () => {
  return (
    <Section title="Frequently Asked Questions" className="bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        {faqData.map((item) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </Section>
  );
};