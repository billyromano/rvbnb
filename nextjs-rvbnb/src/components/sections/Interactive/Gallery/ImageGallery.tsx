'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Image } from '@/components/ui/Image';
import { cn } from '@/lib/utils';

interface GalleryImage {
  url: string;
  caption: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={cn("relative group", className)}>
      <div className="aspect-video overflow-hidden rounded-xl">
        <div className="relative h-full w-full">
          <Image
            src={images[currentIndex].url}
            alt={images[currentIndex].caption}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-white text-lg">{images[currentIndex].caption}</p>
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white w-4' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}