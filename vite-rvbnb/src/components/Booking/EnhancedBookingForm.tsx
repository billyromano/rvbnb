import React, { useState } from 'react';
import { DatePicker } from '../ui/DatePicker';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { RvTypeSelector } from '../Interactive/RvTypeSelector';
import { locations } from '../../data/content';
import { useAnimation } from '../../hooks/useAnimation';

interface BookingState {
  location: string;
  startDate: string;
  endDate: string;
  guests: number;
}

export const EnhancedBookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<BookingState>({
    location: '',
    startDate: '',
    endDate: '',
    guests: 1
  });

  const formRef = useAnimation<HTMLFormElement>('fadeInUp');

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', booking);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {[1, 2, 3].map(num => (
            <div
              key={num}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <Select
            label="Where do you want to go?"
            options={locations}
            value={booking.location}
            onChange={(e) => setBooking({ ...booking, location: e.target.value })}
          />
          <Button onClick={nextStep} className="w-full">Next</Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <DatePicker
              label="Start Date"
              value={booking.startDate}
              onChange={(date) => setBooking({ ...booking, startDate: date })}
            />
            <DatePicker
              label="End Date"
              value={booking.endDate}
              onChange={(date) => setBooking({ ...booking, endDate: date })}
            />
          </div>
          <div className="flex justify-between">
            <Button variant="secondary" onClick={prevStep}>Back</Button>
            <Button onClick={nextStep}>Next</Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <RvTypeSelector />
          <div className="flex justify-between">
            <Button variant="secondary" onClick={prevStep}>Back</Button>
            <Button type="submit">Find RVs</Button>
          </div>
        </div>
      )}
    </form>
  );
};