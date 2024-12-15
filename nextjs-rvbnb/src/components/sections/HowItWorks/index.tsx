'use client';

import { Section } from '@/components/ui/Section';
import { StepGrid } from './StepGrid';

export function HowItWorks() {
  return (
    <Section 
      id="how-it-works"
      title="How It Works" 
      className="bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Getting started with RVbnb is easy. Follow these simple steps to begin your adventure.
        </p>
        <StepGrid />
      </div>
    </Section>
  );
}