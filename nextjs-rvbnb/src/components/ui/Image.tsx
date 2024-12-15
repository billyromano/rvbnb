import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends Omit<NextImageProps, 'onLoadingComplete'> {
  fallback?: string;
  containerClassName?: string;
}

export function Image({ 
  fallback = '/images/placeholder.jpg',
  containerClassName,
  className,
  ...props 
}: ImageProps) {
  const [error, setError] = useState(false);

  return (
    <div className={cn("relative", containerClassName)}>
      <NextImage
        {...props}
        src={error ? fallback : props.src}
        onError={() => setError(true)}
        className={cn("object-cover", className)}
        sizes={props.sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      />
    </div>
  );
}