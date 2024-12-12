import React from 'react';
import { Button } from '../../ui/Button';

interface ViewToggleProps {
  currentView: 'exterior' | 'interior';
  onViewChange: (view: 'exterior' | 'interior') => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({
  currentView,
  onViewChange
}) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        variant={currentView === 'exterior' ? 'primary' : 'secondary'}
        onClick={() => onViewChange('exterior')}
      >
        Exterior
      </Button>
      <Button
        size="sm"
        variant={currentView === 'interior' ? 'primary' : 'secondary'}
        onClick={() => onViewChange('interior')}
      >
        Interior
      </Button>
    </div>
  );
};