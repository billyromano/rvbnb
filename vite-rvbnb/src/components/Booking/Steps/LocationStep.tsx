import React from 'react';
import { Select } from '../../ui/Select';
import { Button } from '../../ui/Button';
import { locations } from '../../../data/content';

interface LocationStepProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export const LocationStep: React.FC<LocationStepProps> = ({ value, onChange, onNext }) => {
  return (
    <div className="space-y-4">
      <Select
        label="Where do you want to go?"
        options={locations}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button onClick={onNext} className="w-full">Next</Button>
    </div>
  );
};