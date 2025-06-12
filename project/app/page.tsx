import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Bike, Shield, Zap, Users } from 'lucide-react';
import { products } from '@/lib/products';
import { useCart } from '@/hooks/use-cart';

export default function Home() {
  const { addItem } = useCart();
  const featuredProducts = products.slice(0, 3);

  const features = [
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Premium fabrics and stitching for long-lasting wear'
    },
    {
      icon: Zap,
      title: 'Comfort Guaranteed',
      description: 'Designed for all-day wear without sacrificing style'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join thousands who trust our brand for their everyday outfits'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                  New Collection Available
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Refresh Your Wardrobe
                  <span className="text-emerald-400"> in Style</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  Discover high quality apparel designed for comfort and performance.
                  Find outfits that match your unique personality.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  <Link href="/products">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white bg-white/20 text-white hover:bg-white hover:text-blue-900"
                >
                  <Link href="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
              <img
                src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg"
                alt="Professional Road Bike"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Resilient Wear?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re committed to delivering apparel that combines style with lasting quality.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-gray-600">
                Discover our most popular apparel and accessories
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/products">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-4 left-4 bg-emerald-500">
                      New
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() =>
                        addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          quantity: 1,
                        })
                      }
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Bike className="h-16 w-16 mx-auto mb-6 text-white/80" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Elevate Your Ride?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join our community of passionate cyclists and discover gear that&apos;s built to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/products">
                Shop Collection
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/account">
                Create Account
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
