import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { createScrollTrigger } from '../../utils/scrollAnimation';

const stories = [
  {
    title: "Mountain Retreat",
    location: "Yosemite National Park",
    image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=800",
    story: "A family's unforgettable journey through the Sierras..."
  },
  {
    title: "Coastal Adventure",
    location: "Pacific Coast Highway",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800",
    story: "Chasing sunsets along California's iconic coastline..."
  }
];

export const AdventureStories: React.FC = () => {
  const storiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = storiesRef.current?.querySelectorAll('.story-card');
    
    elements?.forEach((element, index) => {
      const tl = gsap.timeline({ paused: true });
      tl.from(element, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

      createScrollTrigger(element, tl);
    });
  }, []);

  return (
    <div ref={storiesRef} className="space-y-12">
      {stories.map((story, index) => (
        <div
          key={index}
          className="story-card flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-xl shadow-lg"
        >
          <img
            src={story.image}
            alt={story.title}
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
            <p className="text-blue-600 mb-4">{story.location}</p>
            <p className="text-gray-600">{story.story}</p>
          </div>
        </div>
      ))}
    </div>
  );
};