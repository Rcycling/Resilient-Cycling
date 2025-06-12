'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';

export default function AdminPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const stats = [
    {
      title: 'Total Orders',
      value: '1,234',
      icon: ShoppingCart,
      change: '+12%',
      color: 'text-blue-600'
    },
    {
      title: 'Total Products',
      value: '156',
      icon: Package,
      change: '+5%',
      color: 'text-green-600'
    },
    {
      title: 'Total Customers',
      value: '2,891',
      icon: Users,
      change: '+18%',
      color: 'text-purple-600'
    },
    {
      title: 'Revenue',
      value: '$45,621',
      icon: TrendingUp,
      change: '+23%',
      color: 'text-orange-600'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Carbon Pro Road Bike',
      price: 2499,
      stock: 15,
      category: 'Bikes',
      status: 'Active',
      image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg'
    },
    {
      id: 2,
      name: 'Mountain Explorer Helmet',
      price: 89,
      stock: 32,
      category: 'Safety',
      status: 'Active',
      image: 'https://images.pexels.com/photos/163407/cycling-bike-helmet-bike-helmet-163407.jpeg'
    },
    {
      id: 3,
      name: 'Performance Cycling Kit',
      price: 159,
      stock: 0,
      category: 'Apparel',
      status: 'Out of Stock',
      image: 'https://images.pexels.com/photos/6739701/pexels-photo-6739701.jpeg'
    }
  ];

  const orders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      date: '2024-01-15',
      status: 'Delivered',
      total: 299.99,
      items: 2
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      date: '2024-01-14',
      status: 'Shipped',
      total: 89.99,
      items: 1
    },
    {
      id: 'ORD-003',
      customer: 'Mike Johnson',
      date: '2024-01-13',
      status: 'Processing',
      total: 159.99,
      items: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your store, products, and orders</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Product Management</CardTitle>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-semibold">{product.name}</h4>
                          <p className="text-sm text-gray-600">{product.category}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant={product.stock > 0 ? 'default' : 'destructive'}>
                              {product.status}
                            </Badge>
                            <span className="text-sm text-gray-600">
                              Stock: {product.stock}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">${product.price}</span>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{order.id}</h4>
                        <p className="text-sm text-gray-600">Customer: {order.customer}</p>
                        <p className="text-sm text-gray-600">Date: {order.date}</p>
                        <p className="text-sm text-gray-600">{order.items} items</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={
                            order.status === 'Delivered' ? 'default' : 
                            order.status === 'Shipped' ? 'secondary' : 'outline'
                          }
                          className="mb-2"
                        >
                          {order.status}
                        </Badge>
                        <p className="font-bold">${order.total}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-8 text-gray-500">
                    Customer management features coming soon...
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
