import React, { useRef, useEffect } from 'react';
import { ScrollReveal } from '../../../Interactive/Animations/ScrollReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: "Cross-Country Family Adventure",
    content: "Our family of four spent three weeks exploring national parks in our RV. The kids learned so much about nature and we grew closer as a family.",
    image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?w=800",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    }
  },
  {
    id: 2,
    title: "Coastal Highway Journey",
    content: "Driving down the Pacific Coast Highway in our RV was a dream come true. Every stop brought new adventures and breathtaking views.",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800",
    author: {
      name: "Mike Peterson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    }
  },
  {
    id: 3,
    title: "Mountain Retreat",
    content: "Spending a month in the Rockies showed us what true peace feels like. The RV life gave us freedom to chase the perfect spots.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    author: {
      name: "Emily Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    }
  }
];

export const StoryCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {stories.map((story) => (
              <div
                key={story.id}
                className="flex-none w-full"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
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

        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};