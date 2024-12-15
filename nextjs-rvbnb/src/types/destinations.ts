export interface Destination {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  location: string;
  rating?: number;
  reviews?: number;
  gallery?: Array<{
    url: string;
    caption: string;
  }>;
  bestSeasons?: string[];
  activities?: string[];
  capacity?: number;
}