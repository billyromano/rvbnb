'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StepCard } from './StepCard';
import { StepDetails } from './StepDetails';
import { steps } from '@/data/steps';
import type { Step } from '@/types/steps';

export function StepGrid() {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <ScrollReveal
            key={step.id}
            direction={index % 2 === 0 ? 'left' : 'right'}
            delay={index * 0.2}
          >
            <button
              onClick={() => setSelectedStep(step)}
              className="w-full text-left group"
            >
              <StepCard {...step} />
            </button>
          </ScrollReveal>
        ))}
      </div>

      <StepDetails
        step={selectedStep}
        onClose={() => setSelectedStep(null)}
      />
    </>
  );
}