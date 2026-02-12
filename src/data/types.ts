export interface Game {
  id: string;
  name: string;
  priceEUR: number;
  priceCZK: number;
  images: string[];
  condition: 'Like new' | 'Very good' | 'Good';
  isExtra?: boolean;
  sold?: boolean;
}
