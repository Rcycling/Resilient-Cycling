export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  isNew: boolean;
  onSale: boolean;
  originalPrice?: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Carbon Pro Road Bike',
    price: 2499,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg',
    category: 'Bikes',
    brand: 'Resilient',
    rating: 4.8,
    isNew: true,
    onSale: true,
  },
  {
    id: 2,
    name: 'Mountain Explorer Helmet',
    price: 89,
    image: 'https://images.pexels.com/photos/163407/cycling-bike-helmet-bike-helmet-163407.jpeg',
    category: 'Safety',
    brand: 'SafeRide',
    rating: 4.6,
    isNew: false,
    onSale: false,
  },
  {
    id: 3,
    name: 'Performance Cycling Kit',
    price: 159,
    image: 'https://images.pexels.com/photos/6739701/pexels-photo-6739701.jpeg',
    category: 'Apparel',
    brand: 'ProWear',
    rating: 4.7,
    isNew: true,
    onSale: false,
  },
  {
    id: 4,
    name: 'Endurance Road Bike',
    price: 1899,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg',
    category: 'Bikes',
    brand: 'Resilient',
    rating: 4.9,
    isNew: false,
    onSale: false,
  },
  {
    id: 5,
    name: 'LED Safety Light Set',
    price: 49,
    image: 'https://images.pexels.com/photos/7789019/pexels-photo-7789019.jpeg',
    category: 'Accessories',
    brand: 'BrightRide',
    rating: 4.4,
    isNew: false,
    onSale: false,
  },
  {
    id: 6,
    name: 'Carbon Fiber Water Bottle',
    price: 29,
    image: 'https://images.pexels.com/photos/6739701/pexels-photo-6739701.jpeg',
    category: 'Accessories',
    brand: 'HydroPro',
    rating: 4.3,
    isNew: false,
    onSale: false,
  },
];
