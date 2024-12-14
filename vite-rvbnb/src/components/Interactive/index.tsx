import React from 'react';
import { Section } from '../ui/Section';
import { DestinationGrid } from './Destinations/DestinationGrid';
import { RVScene } from './RVExplorer/RVScene';
import { ExperienceGallery } from './Gallery/ExperienceGallery';

export const Interactive: React.FC = () => {
  return (
    <>
      <Section 
        title="Explore Your Next RV" 
        className="bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <p className="text-center text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Take a 360° tour of our most popular RV models. 
            Interact with the viewer to explore every detail.
          </p>
          <RVScene />
        </div>
      </Section>

      <Section 
        title="Popular Destinations" 
        className="bg-white"
      >
        <div className="container mx-auto px-4">
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover the most breathtaking RV destinations across America. 
            From coastal drives to mountain retreats, your next adventure awaits.
          </p>
          <DestinationGrid />
        </div>
      </Section>

      <Section 
        title="RV Life Experiences" 
        className="bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Immerse yourself in the RV lifestyle. Browse through real experiences 
            from our community of adventurers.
          </p>
          <ExperienceGallery />
        </div>
      </Section>
    </>
  );
};