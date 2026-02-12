export interface Game {
  id: string;
  name: string;
  priceEUR: number;
  priceCZK: number;
  images: string[];
  condition: 'Like new' | 'Very good' | 'Good' | 'Acceptable';
  bggUrl?: string;
  geekmarketUrl?: string;
  facebookUrl?: string;
  isExtra?: boolean;
  sold?: boolean;
}
