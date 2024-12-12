import React from 'react';
import { StoryCard } from './StoryCard';

const stories = [
  {
    title: "Mountain Retreat",
    location: "Yosemite National Park",
    image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=800",
    content: "A family's unforgettable journey through the Sierras..."
  },
  {
    title: "Coastal Adventure",
    location: "Pacific Coast Highway",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800",
    content: "Chasing sunsets along California's iconic coastline..."
  }
];

export const StoryGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {stories.map((story, index) => (
        <StoryCard
          key={index}
          {...story}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
};