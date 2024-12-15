'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ExperienceCard } from './ExperienceCard';
import { experiences } from '@/data/experiences';

export function ExperienceGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {experiences.map((experience, index) => (
        <ScrollReveal
          key={experience.id}
          direction={index % 2 === 0 ? 'left' : 'right'}
          delay={index * 0.2}
        >
          <ExperienceCard {...experience} />
        </ScrollReveal>
      ))}
    </div>
  );
}