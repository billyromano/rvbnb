import React from 'react';
import { ScrollReveal } from '../../Interactive/Animations/ScrollReveal';

export const StatsBar: React.FC = () => {
  return (
    <ScrollReveal delay={0.6}>
      <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">5000+</div>
            <div className="text-gray-600">Happy Travelers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">1000+</div>
            <div className="text-gray-600">RVs Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};