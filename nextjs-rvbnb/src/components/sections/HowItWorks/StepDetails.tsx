'use client';

import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import type { Step } from '@/types/steps';

interface StepDetailsProps {
  step: Step | null;
  onClose: () => void;
}

export function StepDetails({ step, onClose }: StepDetailsProps) {
  if (!step) return null;

  return (
    <Modal
      isOpen={!!step}
      onClose={onClose}
      title={step.title}
    >
      <div className="space-y-6">
        <p className="text-lg text-gray-700">
          {step.details.content}
        </p>

        <div>
          <h4 className="text-lg font-semibold mb-3">Key Features</h4>
          <ul className="grid md:grid-cols-2 gap-3">
            {step.details.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Pro Tips</h4>
          <ul className="grid md:grid-cols-2 gap-3">
            {step.details.tips.map((tip, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end mt-8">
          <Button onClick={onClose}>
            Got It
          </Button>
        </div>
      </div>
    </Modal>
  );
}