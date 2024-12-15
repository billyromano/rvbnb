import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { TestimonialCard } from './TestimonialCard';
import type { Testimonial } from '@/types/testimonials';

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <ScrollReveal
          key={testimonial.id}
          direction={index % 2 === 0 ? 'left' : 'right'}
          delay={index * 0.2}
        >
          <TestimonialCard {...testimonial} />
        </ScrollReveal>
      ))}
    </div>
  );
}