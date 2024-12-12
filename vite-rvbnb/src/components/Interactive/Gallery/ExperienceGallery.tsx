import React from 'react';
import { experiences } from '../../../data/experiences';
import { ImageGallery } from './ImageGallery';

export const ExperienceGallery: React.FC = () => {
  const galleryImages = experiences.map(exp => ({
    url: exp.imageUrl,
    caption: `${exp.title} - ${exp.location}`
  }));

  return (
    <div className="max-w-5xl mx-auto">
      <ImageGallery images={galleryImages} />
    </div>
  );
};