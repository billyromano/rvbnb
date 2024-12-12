import React from 'react';
import { ScrollReveal } from '../../../Interactive/Animations/ScrollReveal';
import { DestinationCard } from './DestinationCard';
import { destinations } from '../../../../data/destinations';

export const DestinationGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {destinations.map((destination, index) => (
        <ScrollReveal
          key={destination.id}
          direction={index % 2 === 0 ? 'left' : 'right'}
          delay={index * 0.2}
        >
          <DestinationCard {...destination} />
        </ScrollReveal>
      ))}
    </div>
  );
};