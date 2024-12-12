import React from 'react';
import { useAnimation } from '../../../hooks/useAnimation';
import { IconType } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconType;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  delay = 0
}) => {
  const cardRef = useAnimation<HTMLDivElement>('fadeInUp', delay);

  return (
    <div
      ref={cardRef}
      className="feature-card p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
    >
      <Icon className="w-12 h-12 text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};