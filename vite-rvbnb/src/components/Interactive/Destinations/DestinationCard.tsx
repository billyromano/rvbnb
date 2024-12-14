import React from 'react';
import { useAnimation } from '../../../hooks/useAnimation';
import { Play, MapPin } from 'lucide-react';

interface DestinationCardProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  location: string;
  delay?: number;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  title,
  description,
  imageUrl,
  videoUrl,
  location,
  delay = 0
}) => {
  const cardRef = useAnimation<HTMLDivElement>('fadeInUp', delay);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <div className="relative aspect-video">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Play className="h-16 w-16 text-white" />
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
        <h3 className="mb-2 text-2xl font-bold">{title}</h3>
        <p className="mb-2 text-sm opacity-90">{description}</p>
        <span className="inline-flex items-center text-sm">
          <MapPin className="mr-1 h-4 w-4" />
          {location}
        </span>
      </div>
    </div>
  );
};