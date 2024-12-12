import React from 'react';
import { ScrollReveal } from '../Interactive/Animations/ScrollReveal';

const stats = [
  { value: "5000+", label: "Happy Travelers" },
  { value: "1000+", label: "RVs Available" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "24/7", label: "Support" }
];

export const StatsBar: React.FC = () => {
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
};