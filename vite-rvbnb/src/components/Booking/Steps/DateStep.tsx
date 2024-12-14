import React from 'react';
import { DatePicker } from '../../ui/DatePicker';
import { Button } from '../../ui/Button';

interface DateStepProps {
  startDate: string;
  endDate: string;
  onDateChange: (type: 'start' | 'end', date: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const DateStep: React.FC<DateStepProps> = ({
  startDate,
  endDate,
  onDateChange,
  onNext,
  onBack
}) => {
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(date) => onDateChange('start', date)}
        />
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(date) => onDateChange('end', date)}
        />
      </div>
      <div className="flex justify-between">
        <Button variant="secondary" onClick={onBack}>Back</Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </div>
  );
};