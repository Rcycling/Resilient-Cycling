import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function WishlistPage() {
  const items = [
    { id: 1, name: 'Mountain Trail Bike', price: 1899 },
    { id: 2, name: 'Carbon Fiber Wheels', price: 799 }
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center">Your Wishlist</h1>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
            <span className="font-medium text-gray-800">{item.name}</span>
            <span className="text-blue-600 font-semibold">${item.price}</span>
          </div>
        ))}
        <div className="text-center pt-4">
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
