import React from 'react';
import { Button } from '../../../ui/Button';

interface RVCustomizerProps {
  onColorChange: (color: string) => void;
  onViewChange: (view: 'exterior' | 'interior') => void;
  currentView: 'exterior' | 'interior';
}

export const RVCustomizer: React.FC<RVCustomizerProps> = ({
  onColorChange,
  onViewChange,
  currentView
}) => {
  const colors = ['#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFD700', '#C0C0C0'];

  return (
    <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onColorChange(color)}
              className="w-8 h-8 rounded-full border-2 border-white/20 transition-transform hover:scale-110"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        
        <div className="flex gap-2">
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
      </div>
      
      <p className="text-white/80 text-sm mt-2">
        Drag to rotate • Scroll to zoom • Double click to reset
      </p>
    </div>
  );
};