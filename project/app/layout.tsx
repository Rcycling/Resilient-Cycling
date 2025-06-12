import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/hooks/use-cart';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Resilient Cycling - Premium Cycling Gear & Bikes',
  description: 'Discover high-performance cycling gear, bikes, and accessories for every adventure. Built for resilience, designed for performance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
