import React from 'react';
import { Truck } from 'lucide-react';

interface RvIconProps {
  className?: string;
}

export const RvIcon: React.FC<RvIconProps> = ({ className }) => {
  return <Truck className={className} />;
};