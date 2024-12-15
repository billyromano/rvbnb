import { Suspense } from 'react';
import { Section } from '@/components/ui/Section';
import { TestimonialGrid } from './TestimonialGrid';
import { RatingStats } from './RatingStats';
import { getTestimonials } from '@/lib/api/testimonials';
import { AsyncBoundary } from '@/components/error/AsyncBoundary';
import { ErrorMessage } from '@/components/error/ErrorMessage';

export async function TestimonialsContainer() {
  const testimonials = await getTestimonials();

  return (
    <Section title="What Our Users Say" className="bg-white">
      <div className="container mx-auto px-4">
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our community has to say about their RVbnb experience.
        </p>
        <AsyncBoundary
          fallback={<div className="h-96 flex items-center justify-center">Loading testimonials...</div>}
          errorFallback={<ErrorMessage title="Failed to load testimonials" />}
        >
          <TestimonialGrid testimonials={testimonials} />
        </AsyncBoundary>
        <Suspense>
          <RatingStats />
        </Suspense>
      </div>
    </Section>
  );
}