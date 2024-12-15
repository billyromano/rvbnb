'use client';

import { useState, useEffect } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { DestinationCard } from './DestinationCard';
import { DestinationModal } from './DestinationModal';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import type { Destination } from '@/types/destinations';

export function DestinationGrid() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const response = await fetch('/api/destinations');
        if (!response.ok) throw new Error('Failed to fetch destinations');
        const data = await response.json();
        setDestinations(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load destinations');
      } finally {
        setLoading(false);
      }
    }

    fetchDestinations();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <ScrollReveal
            key={destination.id}
            direction={index % 2 === 0 ? 'left' : 'right'}
            delay={index * 0.2}
          >
            <DestinationCard
              {...destination}
              onClick={() => setSelectedDestination(destination)}
            />
          </ScrollReveal>
        ))}
      </div>

      <DestinationModal
        destination={selectedDestination}
        isOpen={!!selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </>
  );
}