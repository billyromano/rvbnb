import React from 'react';
import { ScrollReveal } from '../../Interactive/Animations/ScrollReveal';
import { lifestyleImages } from '../../../data/lifestyle';

export const LifestyleGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {lifestyleImages.map((image, index) => (
        <ScrollReveal
          key={image.id}
          direction={index % 2 === 0 ? 'left' : 'right'}
          delay={index * 0.2}
        >
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                <p className="text-white/80">{image.caption}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};