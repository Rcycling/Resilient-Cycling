import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search, Filter, Grid, List } from 'lucide-react';
import { products } from '@/lib/products';
import { useCart } from '@/hooks/use-cart';

export default function ProductsPage() {
  const { addItem } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Products</h1>
          <p className="text-gray-600">Discover our complete collection of premium cycling gear</p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-5 gap-4 items-center">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="bikes">Bikes</SelectItem>
                <SelectItem value="apparel">Apparel</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
                <SelectItem value="safety">Safety</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-50">$0 - $50</SelectItem>
                <SelectItem value="50-200">$50 - $200</SelectItem>
                <SelectItem value="200-1000">$200 - $1000</SelectItem>
                <SelectItem value="1000+">$1000+</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <Grid className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {products.length} results
          </p>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-emerald-500">New</Badge>
                  )}
                  {product.onSale && (
                    <Badge className="bg-red-500">Sale</Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Button variant="secondary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Quick View
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <span className="text-sm text-gray-500 ml-2">{product.brand}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(product.rating))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.rating})
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
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

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
}
