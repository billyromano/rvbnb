export interface Experience {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
  category: string;
  description?: string;
  rating?: number;
  reviews?: number;
}