```typescript
import { Section } from '@/components/ui/Section';
import { ExperienceGallery } from './ExperienceGallery';
import { getExperiences } from '@/lib/api/experiences';
import { AsyncBoundary } from '@/components/error/AsyncBoundary';
import { ErrorMessage } from '@/components/error/ErrorMessage';

export async function ExperiencesContainer() {
  const experiences = await getExperiences();

  return (
    <Section 
      title="RV Life Experiences" 
      className="bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Immerse yourself in the RV lifestyle. Browse through real experiences 
          from our community of adventurers.
        </p>
        <AsyncBoundary
          fallback={<div className="h-96 flex items-center justify-center">Loading experiences...</div>}
          errorFallback={<ErrorMessage title="Failed to load experiences" />}
        >
          <ExperienceGallery experiences={experiences} />
        </AsyncBoundary>
      </div>
    </Section>
  );
}
```