import React from 'react';
import { Section } from '../ui/Section';
import { LifestyleGrid } from './Grid/LifestyleGrid';
import { StoryCarousel } from './Stories/StoryCarousel';
import { FeatureHighlight } from './Features/FeatureHighlight';
import { ParallaxSection } from '../Interactive/Animations/ParallaxSection';

export const Lifestyle: React.FC = () => {
  return (
    <>
      <Section 
        title="Experience the RV Lifestyle" 
        className="bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            From weekend getaways to cross-country adventures, discover the freedom 
            of the open road with RVbnb. Create lasting memories with friends and family 
            in the comfort of a home on wheels.
          </p>
          <LifestyleGrid />
        </div>
      </Section>

      <ParallaxSection className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">
            Your Journey, Your Way
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold">200+</h4>
              <p>Destinations</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold">5000+</h4>
              <p>Happy Travelers</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold">1000+</h4>
              <p>RVs Available</p>
            </div>
          </div>
        </div>
      </ParallaxSection>

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