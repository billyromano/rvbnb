import React from 'react';
import { Section } from '../../ui/Section';
import { ScrollReveal } from '../../Interactive/Animations/ScrollReveal';
import { LifestyleGrid } from './Grid/LifestyleGrid';
import { StoryCarousel } from './Stories/StoryCarousel';
import { FeatureHighlight } from './Features/FeatureHighlight';

export const Lifestyle: React.FC = () => {
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
};