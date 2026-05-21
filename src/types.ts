export type DietType = 'veg' | 'non-veg' | 'egg';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'starters' | 'mains' | 'desserts' | 'beverages' | 'pizzas-pastas';
  price: number;
  dietType: DietType;
  popular: boolean;
  spiciness?: 0 | 1 | 2 | 3; // 0 = none, 3 = high
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  tablePreference: 'rooftop-edge' | 'indoor-lounge' | 'pergola' | 'no-preference';
  notes?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  quote: string;
  source: 'Google' | 'Zomato' | 'Swiggy' | 'Magicpin';
  date: string;
  tag?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'billing' | 'reservations' | 'food' | 'general';
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'ambiance' | 'dishes' | 'drinks' | 'events';
  caption: string;
}

export type ActiveTab = 'home' | 'about' | 'menu' | 'reservations' | 'gallery' | 'testimonials' | 'contact';
