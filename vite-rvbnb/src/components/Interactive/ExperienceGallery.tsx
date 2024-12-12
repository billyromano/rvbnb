import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { experiences } from '../../data/experiences';

export const ExperienceGallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images = galleryRef.current?.querySelectorAll('.gallery-image');
    
    images?.forEach((image) => {
      image.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.1,
          duration: 0.5,
          ease: 'power2.out'
        });
      });

      image.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.5,
          ease: 'power2.out'
        });
      });
    });

    return () => {
      images?.forEach((image) => {
        image.removeEventListener('mouseenter', () => {});
        image.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div 
      ref={galleryRef}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="gallery-image relative overflow-hidden rounded-lg cursor-pointer"
        >
          <img
            src={experience.imageUrl}
            alt={experience.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h4 className="text-lg font-semibold">{experience.title}</h4>
              <p className="text-sm">{experience.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}