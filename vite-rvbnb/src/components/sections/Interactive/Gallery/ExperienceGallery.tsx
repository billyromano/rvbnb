import React from 'react';
import { ScrollReveal } from '../../../Interactive/Animations/ScrollReveal';
import { experiences } from '../../../../data/experiences';
import { MapPin, Calendar } from 'lucide-react';

export const ExperienceGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {experiences.map((experience, index) => (
        <ScrollReveal
          key={experience.id}
          direction={index % 2 === 0 ? 'left' : 'right'}
          delay={index * 0.2}
        >
          <div className="group relative overflow-hidden rounded-xl shadow-lg bg-white">
            <div className="aspect-video overflow-hidden">
              <img
                src={experience.imageUrl}
                alt={experience.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {experience.title}
              </h3>
              
              <div className="flex items-center justify-between mt-4">
                <span className="inline-flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  Available Year-round
                </span>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};