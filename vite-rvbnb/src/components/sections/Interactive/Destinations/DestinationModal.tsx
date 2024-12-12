import React from 'react';
import { Modal } from '../../../ui/Modal';
import { Star, MapPin, Calendar, Users } from 'lucide-react';
import { ImageGallery } from '../Gallery/ImageGallery';
import { ScrollReveal } from '../../../Interactive/Animations/ScrollReveal';

interface DestinationModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: {
    title: string;
    description: string;
    imageUrl: string;
    videoUrl?: string;
    location: string;
    rating?: number;
    reviews?: number;
    gallery?: { url: string; caption: string; }[];
    bestSeasons?: string[];
    activities?: string[];
    capacity?: number;
  };
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  isOpen,
  onClose,
  destination
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={destination.title}>
      <div className="space-y-8">
        {/* Video Section */}
        {destination.videoUrl && (
          <ScrollReveal>
            <div className="aspect-video rounded-lg overflow-hidden">
              <video
                src={destination.videoUrl}
                controls
                className="w-full h-full object-cover"
                poster={destination.imageUrl}
              />
            </div>
          </ScrollReveal>
        )}

        {/* Rating and Location */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600">{destination.location}</span>
            </div>
            {destination.rating && (
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < destination.rating! 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  ({destination.reviews} reviews)
                </span>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal>
          <p className="text-gray-600 leading-relaxed">
            {destination.description}
          </p>
        </ScrollReveal>

        {/* Key Information */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {destination.bestSeasons && (
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-semibold">Best Seasons</div>
                  <div className="text-sm text-gray-600">
                    {destination.bestSeasons.join(', ')}
                  </div>
                </div>
              </div>
            )}
            {destination.capacity && (
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-semibold">Capacity</div>
                  <div className="text-sm text-gray-600">
                    Up to {destination.capacity} people
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Activities */}
        {destination.activities && (
          <ScrollReveal>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Available Activities</h4>
              <div className="flex flex-wrap gap-2">
                {destination.activities.map((activity, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Image Gallery */}
        {destination.gallery && (
          <ScrollReveal>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Photo Gallery</h4>
              <ImageGallery images={destination.gallery} />
            </div>
          </ScrollReveal>
        )}
      </div>
    </Modal>
  );
};