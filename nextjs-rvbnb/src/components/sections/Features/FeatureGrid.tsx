'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { FeatureCard } from './FeatureCard';
import { features } from '@/data/features';

export function FeatureGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <ScrollReveal
          key={feature.id}
          direction={index % 2 === 0 ? 'left' : 'right'}
          delay={index * 0.2}
        >
          <FeatureCard {...feature} />
        </ScrollReveal>
      ))}
    </div>
  );
}