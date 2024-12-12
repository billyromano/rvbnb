import React, { useEffect, useRef } from 'react';
import { DestinationCard } from './DestinationCard';
import gsap from 'gsap';
import { createScrollTrigger } from '../../utils/scrollAnimation';
import { destinations } from '../../data/destinations';

export const DestinationGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.destination-card');
    
    cards?.forEach((card, index) => {
      const tl = gsap.timeline({ paused: true });
      tl.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power3.out'
      });

      createScrollTrigger(card, tl);
    });
  }, []);

  return (
    <div 
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {destinations.map((destination) => (
        <div key={destination.id} className="destination-card">
          <DestinationCard {...destination} />
        </div>
      ))}
    </div>
  );
}