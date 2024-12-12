import React from 'react';
import { useAnimation } from '../../../hooks/useAnimation';

interface StoryCardProps {
  title: string;
  location: string;
  image: string;
  content: string;
  delay?: number;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  title,
  location,
  image,
  content,
  delay = 0
}) => {
  const cardRef = useAnimation<HTMLDivElement>('fadeInUp', delay);

  return (
    <div
      ref={cardRef}
      className="story-card bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
    >
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-blue-600 mb-4">{location}</p>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};