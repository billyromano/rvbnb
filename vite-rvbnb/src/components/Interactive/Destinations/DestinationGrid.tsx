import React from 'react';
import { DestinationCard } from './DestinationCard';
import { useAnimation } from '../../../hooks/useAnimation';
import { destinations } from '../../../data/destinations';

export const DestinationGrid: React.FC = () => {
  const gridRef = useAnimation<HTMLDivElement>('fadeIn');

  return (
    <div 
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {destinations.map((destination, index) => (
        <DestinationCard
          key={destination.id}
          {...destination}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
};