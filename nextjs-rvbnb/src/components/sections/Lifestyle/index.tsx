'use client';

import { Section } from '@/components/ui/Section';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { LifestyleGrid } from './Grid/LifestyleGrid';
import { StoryCarousel } from './Stories/StoryCarousel';
import { FeatureHighlight } from './Features/FeatureHighlight';

export function Lifestyle() {
  return (
    <>
      <Section 
        title="Experience the RV Lifestyle" 
        className="bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              From weekend getaways to cross-country adventures, discover the freedom 
              of the open road with RVbnb. Create lasting memories with friends and family 
              in the comfort of a home on wheels.
            </p>
          </ScrollReveal>
          <LifestyleGrid />
        </div>
      </Section>

      <Section 
        title="Stories from the Road" 
        className="bg-white"
      >
        <div className="container mx-auto px-4">
          <StoryCarousel />
        </div>
      </Section>

      <FeatureHighlight />
    </>
  );
}