import { cache } from 'react';
import type { Experience } from '@/types/experiences';

export const getExperiences = cache(async () => {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Beachside Camping",
      location: "Oregon Coast",
      imageUrl: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800",
      category: "coastal",
      rating: 4.8,
      reviews: 95
    },
    // ... other experiences
  ];

  return experiences;
});