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
    name: 'Classic Denim Jacket',
    price: 129,
    originalPrice: 169,
    image: 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg',
    category: 'Jackets',
    brand: 'Resilient Wear',
    rating: 4.8,
    isNew: true,
    onSale: true,
  },
  {
    id: 2,
    name: 'Graphic Tee',
    price: 35,
    image: 'https://images.pexels.com/photos/5658822/pexels-photo-5658822.jpeg',
    category: 'Tops',
    brand: 'Resilient Wear',
    rating: 4.6,
    isNew: false,
    onSale: false,
  },
  {
    id: 3,
    name: 'Running Sneakers',
    price: 99,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    category: 'Footwear',
    brand: 'SwiftStep',
    rating: 4.7,
    isNew: true,
    onSale: false,
  },
  {
    id: 4,
    name: 'Slim Fit Jeans',
    price: 79,
    image: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg',
    category: 'Bottoms',
    brand: 'DenimCo',
    rating: 4.5,
    isNew: false,
    onSale: false,
  },
  {
    id: 5,
    name: 'Hooded Sweatshirt',
    price: 59,
    image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg',
    category: 'Tops',
    brand: 'ComfyGear',
    rating: 4.4,
    isNew: false,
    onSale: false,
  },
  {
    id: 6,
    name: 'Leather Wallet',
    price: 49,
    image: 'https://images.pexels.com/photos/287837/pexels-photo-287837.jpeg',
    category: 'Accessories',
    brand: 'Crafted',
    rating: 4.3,
    isNew: false,
    onSale: false,
  },
];
