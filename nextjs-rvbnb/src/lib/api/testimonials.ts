import { cache } from 'react';
import type { Testimonial } from '@/types/testimonials';

export const getTestimonials = cache(async () => {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "First-time RVer",
      content: "RVbnb made our first RV trip so easy! The booking process was simple, and the owner was incredibly helpful.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      rating: 5
    },
    // ... other testimonials
  ];

  return testimonials;
});