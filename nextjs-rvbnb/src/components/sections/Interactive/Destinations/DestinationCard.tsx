import { MapPin, Play } from 'lucide-react';
import { Image } from '@/components/ui/Image';
import { cn } from '@/lib/utils';
import type { Destination } from '@/types/destinations';

interface DestinationCardProps extends Destination {
  onClick?: () => void;
  className?: string;
}

export function DestinationCard({
  title,
  description,
  imageUrl,
  videoUrl,
  location,
  onClick,
  className
}: DestinationCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105",
        className
      )}
    >
      <div className="relative aspect-video">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Play className="h-16 w-16 text-white" />
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
        <h3 className="mb-2 text-2xl font-bold">{title}</h3>
        <p className="mb-2 text-sm opacity-90">{description}</p>
        <span className="inline-flex items-center text-sm">
          <MapPin className="mr-1 h-4 w-4" />
          {location}
        </span>
      </div>
    </button>
  );
}