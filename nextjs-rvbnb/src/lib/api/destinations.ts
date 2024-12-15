import { cache } from 'react';
import type { Destination } from '@/types/destinations';

export const getDestinations = cache(async () => {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const destinations: Destination[] = [
    {
      id: 1,
      title: "Yellowstone Adventure",
      description: "Experience the natural wonders of America's first national park",
      imageUrl: "https://images.unsplash.com/photo-1533167649158-6d508895b680?w=800",
      videoUrl: "https://example.com/yellowstone.mp4",
      location: "Wyoming, USA",
      rating: 4.9,
      reviews: 128,
      bestSeasons: ["Summer", "Fall"],
      activities: ["Hiking", "Wildlife Viewing", "Camping", "Photography"],
      capacity: 6,
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1533167649158-6d508895b680?w=800",
          caption: "Old Faithful Geyser"
        },
        {
          url: "https://images.unsplash.com/photo-1581794236300-acd130b0550c?w=800",
          caption: "Grand Prismatic Spring"
        }
      ]
    },
    // ... other destinations
  ];

  return destinations;
});