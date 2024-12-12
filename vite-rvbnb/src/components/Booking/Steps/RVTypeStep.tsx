import React from 'react';
import { Button } from '../../ui/Button';
import { Truck, Home, Car } from 'lucide-react';

interface RVType {
  id: string;
  icon: typeof Truck;
  label: string;
  description: string;
}

const rvTypes: RVType[] = [
  { id: 'class-a', icon: Home, label: 'Class A', description: 'Luxury motorhomes with all amenities' },
  { id: 'class-b', icon: Truck, label: 'Class B', description: 'Compact & easy to drive' },
  { id: 'class-c', icon: Car, label: 'Class C', description: 'Perfect balance of size & comfort' }
];

interface RVTypeStepProps {
  selectedType: string;
  onTypeSelect: (type: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const RVTypeStep: React.FC<RVTypeStepProps> = ({
  selectedType,
  onTypeSelect,
  onNext,
  onBack
}) => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        {rvTypes.map(({ id, icon: Icon, label, description }) => (
          <button
            key={id}
            onClick={() => onTypeSelect(id)}
            className={`p-6 rounded-xl transition-all duration-300 ${
              selectedType === id
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
      <div className="flex justify-between">
        <Button variant="secondary" onClick={onBack}>Back</Button>
        <Button onClick={onNext} disabled={!selectedType}>Next</Button>
      </div>
    </div>
  );
};