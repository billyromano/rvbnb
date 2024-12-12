import React, { useState } from 'react';
import { DatePicker } from '../ui/DatePicker';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { locations } from '../../data/content';

export const BookingForm: React.FC = () => {
  const [booking, setBooking] = useState({
    location: '',
    startDate: '',
    endDate: '',
    rvType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', booking);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select
        label="Location"
        options={locations}
        value={booking.location}
        onChange={(e) => setBooking({ ...booking, location: e.target.value })}
      />
      <div className="grid grid-cols-2 gap-4">
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
      <Button type="submit" className="w-full">Search Available RVs</Button>
    </form>
  );
};