import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 space-y-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900">About Resilient Wear</h1>
        <p className="text-gray-600">
          We craft quality clothing for everyday adventures. Our mission is to help you look and feel your best.
        </p>
        <Button asChild>
          <Link href="/">Back Home</Link>
        </Button>
      </div>
    </div>
  );
}
