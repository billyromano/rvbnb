import { Section } from '@/components/ui/Section';
import { DestinationGrid } from './DestinationGrid';
import { getDestinations } from '@/lib/api/destinations';
import { AsyncBoundary } from '@/components/error/AsyncBoundary';
import { ErrorMessage } from '@/components/error/ErrorMessage';

export async function DestinationsContainer() {
  const destinations = await getDestinations();

  return (
    <Section 
      title="Popular Destinations" 
      className="bg-white"
    >
      <div className="container mx-auto px-4">
        <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover the most breathtaking RV destinations across America. 
          From coastal drives to mountain retreats, your next adventure awaits.
        </p>
        <AsyncBoundary
          fallback={<div className="h-96 flex items-center justify-center">Loading destinations...</div>}
          errorFallback={<ErrorMessage title="Failed to load destinations" />}
        >
          <DestinationGrid destinations={destinations} />
        </AsyncBoundary>
      </div>
    </Section>
  );
}