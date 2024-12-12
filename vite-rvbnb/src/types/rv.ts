export type RVView = 'exterior' | 'interior';

export interface RVCustomizerState {
  color: string;
  view: RVView;
}

export interface RVModelProps {
  color: string;
  view: RVView;
}

export interface RVControlsProps {
  view: RVView;
}