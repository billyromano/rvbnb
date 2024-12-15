'use client';

import { Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RvIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export function RvIcon({ className, size = 24, color }: RvIconProps) {
  return (
    <Truck 
      className={cn('transition-colors duration-300', className)}
      size={size}
      color={color}
      strokeWidth={1.5}
      aria-label="RV Icon"
    />
  );
}