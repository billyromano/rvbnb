import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { stories } from '../../../data/stories';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const StoryCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!carouselRef.current) return;

    const slides = slideRefs.current.filter(Boolean);
    
    gsap.fromTo(slides,
      { 
        opacity: 0,
        x: 100 
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top center+=100',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <div ref={carouselRef} className="relative">
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 hide-scrollbar">
        {stories.map((story, index) => (
          <div
            key={story.id}
            ref={el => slideRefs.current[index] = el}
            className="flex-none w-full md:w-1/2 lg:w-1/3 snap-center"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.content}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <img
                    src={story.author.avatar}
                    alt={story.author.name}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <span>{story.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};