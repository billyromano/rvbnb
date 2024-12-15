'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { stats } from '@/data/stats';

export function StatsBar() {
  return (
    <ScrollReveal delay={0.6}>
      <div className="mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}