export type RVView = 'exterior' | 'interior';

export interface RVModelProps {
  color: string;
  view: RVView;
}

export interface RVCustomizerProps {
  onColorChange: (color: string) => void;
  onViewChange: (view: RVView) => void;
  currentView: RVView;
}

export interface RVControlsProps {
  view: RVView;
}