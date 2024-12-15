import { Image } from '@/components/ui/Image';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExperienceCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating?: number;
  className?: string;
}

export function ExperienceCard({
  name,
  role,
  content,
  avatar,
  rating,
  className
}: ExperienceCardProps) {
  return (
    <div className={cn(
      "bg-gray-50 rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300",
      className
    )}>
      <div className="flex items-center mb-6">
        <div className="relative w-12 h-12">
          <Image 
            src={avatar}
            alt={name}
            fill
            className="rounded-full"
            sizes="48px"
          />
        </div>
        <div className="ml-4">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      
      {rating && (
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star 
              key={i}
              className="w-5 h-5 text-yellow-400 fill-current"
            />
          ))}
        </div>
      )}
      
      <p className="text-gray-700 italic">{content}</p>
    </div>
  );
}