import React from 'react';
import { FeatureCard } from './FeatureCard';
import { features } from '../../../data/content';
import { Shield, Phone, MapPin } from 'lucide-react';

const iconMap = {
  'shield-check': Shield,
  'phone': Phone,
  'map': MapPin,
};

export const FeatureGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
          icon={iconMap[feature.icon as keyof typeof iconMap]}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
};