'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function RatingStats() {
  return (
    <ScrollReveal delay={0.6}>
      <div className="mt-16 text-center">
        <div className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full px-8 py-4">
          <div className="text-3xl font-bold mr-4">4.9/5</div>
          <div className="text-left">
            <div className="font-semibold">Average Rating</div>
            <div className="text-sm opacity-90">From 1000+ Reviews</div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}