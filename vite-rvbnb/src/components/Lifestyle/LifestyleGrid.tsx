import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { createScrollTrigger } from '../../utils/scrollAnimation';

const lifestyleImages = [
  {
    url: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800",
    caption: "Mountain Escapes"
  },
  {
    url: "https://images.unsplash.com/photo-1517672651691-24622a91b550?w=800",
    caption: "Beach Adventures"
  },
  {
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800",
    caption: "Sunset Camping"
  },
  {
    url: "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=800",
    caption: "Family Moments"
  }
];

export const LifestyleGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images = gridRef.current?.querySelectorAll('.lifestyle-image');
    
    images?.forEach((image, index) => {
      const tl = gsap.timeline({ paused: true });
      tl.from(image, {
        opacity: 0,
        y: 50,
        rotation: 5,
        duration: 0.8,
        delay: index * 0.2
      });

      createScrollTrigger(image, tl);
    });
  }, []);

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
      {lifestyleImages.map((image, index) => (
        <div 
          key={index} 
          className="lifestyle-image relative overflow-hidden rounded-lg shadow-xl"
        >
          <img
            src={image.url}
            alt={image.caption}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white text-xl font-semibold">{image.caption}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};