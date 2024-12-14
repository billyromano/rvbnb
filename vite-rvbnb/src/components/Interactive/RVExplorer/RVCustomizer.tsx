import React, { useState } from 'react';
import { ColorPicker } from './ColorPicker';
import { ViewToggle } from './ViewToggle';
import type { RVView } from '../../../types/rv';

interface RVCustomizerProps {
  onColorChange: (color: string) => void;
  onViewChange: (view: RVView) => void;
  currentView: RVView;
}

export const RVCustomizer: React.FC<RVCustomizerProps> = ({
  onColorChange,
  onViewChange,
  currentView
}) => {
  const [color, setColor] = useState('#FFFFFF');

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    onColorChange(newColor);
  };

  return (
    <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
      <div className="flex items-center justify-between">
        <ColorPicker
          color={color}
          onChange={handleColorChange}
        />
        
        <ViewToggle
          currentView={currentView}
          onViewChange={onViewChange}
        />
      </div>
      
      <p className="text-white text-sm mt-2">
        Drag to rotate • Scroll to zoom • Double click to reset
      </p>
    </div>
  );
};