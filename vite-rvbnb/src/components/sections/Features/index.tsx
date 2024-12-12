import React from 'react';
import { Section } from '../../ui/Section';
import { ScrollReveal } from '../../Interactive/Animations/ScrollReveal';
import { Shield, Users, Clock, Star, MapPin, HeartHandshake } from 'lucide-react';
import { FeatureGrid } from './FeatureGrid';
import { StatsBar } from './StatsBar';

export const Features: React.FC = () => {
  return (
    <Section title="Why Choose RVbnb?" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Experience the perfect blend of adventure and comfort with our premium RV rental platform.
          </p>
        </ScrollReveal>

        <FeatureGrid />
        <StatsBar />
      </div>
    </Section>
  );
};