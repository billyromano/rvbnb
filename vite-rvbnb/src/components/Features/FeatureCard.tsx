import React from 'react';
import { Shield, Phone, MapPin, Calendar, Users, Heart } from 'lucide-react';

const icons = {
  shield: Shield,
  phone: Phone,
  map: MapPin,
  calendar: Calendar,
  users: Users,
  heart: Heart
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: keyof typeof icons;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  const Icon = icons[icon];

  return (
    <div className="feature-card p-8 rounded-xl bg-white shadow-lg transform hover:scale-105 transition-all duration-300">
      <div className="mb-6">
        <Icon className="w-12 h-12 text-blue-500" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};