import React, { useState } from 'react';
import { Truck, Home, Car } from 'lucide-react';
import { useAnimation } from '../../hooks/useAnimation';

const rvTypes = [
  { id: 'class-a', icon: Home, label: 'Class A', description: 'Luxury motorhomes with all amenities' },
  { id: 'class-b', icon: Truck, label: 'Class B', description: 'Compact & easy to drive' },
  { id: 'class-c', icon: Car, label: 'Class C', description: 'Perfect balance of size & comfort' }
];

export const RvTypeSelector: React.FC = () => {
  const [selected, setSelected] = useState('');
  const containerRef = useAnimation<HTMLDivElement>('fadeInUp');

  return (
    <div ref={containerRef} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {rvTypes.map(({ id, icon: Icon, label, description }) => (
        <button
          key={id}
          onClick={() => setSelected(id)}
          className={`p-6 rounded-xl transition-all duration-300 ${
            selected === id
              ? 'bg-blue-600 text-white scale-105'
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          <Icon className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{label}</h3>
          <p className="text-sm opacity-80">{description}</p>
        </button>
      ))}
    </div>
  );
};