import { Section } from '@/components/ui/Section';
import { TestimonialGrid } from './TestimonialGrid';
import { RatingStats } from './RatingStats';

export function Testimonials() {
  return (
    <Section title="What Our Users Say" className="bg-white">
      <div className="container mx-auto px-4">
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our community has to say about their RVbnb experience.
        </p>
        <TestimonialGrid />
        <RatingStats />
      </div>
    </Section>
  );
}