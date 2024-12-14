import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Button } from '../../ui/Button';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

const presetColors = [
  '#FFFFFF', // White
  '#FF0000', // Red
  '#0000FF', // Blue
  '#00FF00', // Green
  '#FFD700', // Gold
  '#C0C0C0', // Silver
  '#000000', // Black
  '#800000', // Maroon
];

export const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          size="sm"
          className="flex items-center gap-2"
        >
          <div
            className="w-4 h-4 rounded-full border border-white"
            style={{ backgroundColor: color }}
          />
          Customize Color
        </Button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="bg-white rounded-lg shadow-xl p-4 w-64"
          sideOffset={5}
        >
          <div className="grid grid-cols-4 gap-2">
            {presetColors.map((presetColor) => (
              <button
                key={presetColor}
                className={`w-12 h-12 rounded-full border-2 transition-transform hover:scale-110 ${
                  color === presetColor ? 'border-blue-500' : 'border-gray-200'
                }`}
                style={{ backgroundColor: presetColor }}
                onClick={() => onChange(presetColor)}
              />
            ))}
          </div>
          
          <input
            type="color"
            value={color}
            onChange={(e) => onChange(e.target.value)}
            className="mt-4 w-full h-10 cursor-pointer"
          />
          
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};