import React, { useEffect, useState } from "react";
import { Package, Plus, Users, Layers, Star, ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

import { getProducts } from "../../api/product.api";
import { getUsers } from "../../api/user.api";

import { useAuth } from "../../hooks/useAuth";

const AdminDashboard = () => {
  const { user } = useAuth();

  const [stats, setStats] = useState({
    products: 0,
    users: 0,
    categories: 0,
    featured: 0,
  });

  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const [{ data: productData }, { data: userData }] = await Promise.all([
          getProducts(),
          getUsers(),
        ]);

        const products = productData.products || [];

        setStats({
          products: products.length,
          users: userData.users.length,
          categories: new Set(products.map((p) => p.category)).size,
          featured: products.filter((p) => p.isFeatured).length,
        });

        setRecentProducts(products.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    }

    fetchDashboard();
  }, []);

  return (
    <section className="min-h-screen bg-[#fffaf8] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="mb-10">
          <h1 className="text-4xl font-playfair font-bold text-gray-800">
            Welcome back, {user?.name} 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Here's what's happening with BloomBasket today.
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl shadow-md p-6">
            <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center">
              <Package className="text-pink-600" />
            </div>

            <h3 className="text-gray-500 mt-5">Total Products</h3>

            <h2 className="text-4xl font-bold mt-2">{stats.products}</h2>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
              <Users className="text-blue-600" />
            </div>

            <h3 className="text-gray-500 mt-5">Users</h3>

            <h2 className="text-4xl font-bold mt-2">{stats.users}</h2>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
              <Layers className="text-green-600" />
            </div>

            <h3 className="text-gray-500 mt-5">Categories</h3>

            <h2 className="text-4xl font-bold mt-2">{stats.categories}</h2>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">
            <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center">
              <Star className="text-yellow-600" />
            </div>

            <h3 className="text-gray-500 mt-5">Featured Products</h3>

            <h2 className="text-4xl font-bold mt-2">{stats.featured}</h2>
          </div>
        </div>

        {/* Quick Actions */}

        <div className="mt-12">
          <h2 className="text-2xl font-playfair font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/admin/products/add"
              className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-7 text-white hover:scale-[1.02] transition">
              <Plus size={34} />

              <h3 className="text-2xl font-bold mt-5">Add Product</h3>

              <p className="mt-2 text-pink-100">
                Create a new product for your store.
              </p>

              <div className="flex items-center gap-2 mt-6">
                Go
                <ArrowRight size={18} />
              </div>
            </Link>

            <Link
              to="/admin/products"
              className="bg-white rounded-3xl shadow-md p-7 hover:shadow-xl transition">
              <Package className="text-pink-600" size={34} />

              <h3 className="text-2xl font-bold mt-5">Manage Products</h3>

              <p className="text-gray-500 mt-2">Edit or remove products.</p>
            </Link>

            <Link
              to="/admin/users"
              className="bg-white rounded-3xl shadow-md p-7 hover:shadow-xl transition">
              <Users className="text-pink-600" size={34} />

              <h3 className="text-2xl font-bold mt-5">Manage Users</h3>

              <p className="text-gray-500 mt-2">
                Change roles and manage accounts.
              </p>
            </Link>
          </div>
        </div>

        {/* Recent Products */}

        <div className="mt-14">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-playfair font-bold">
              Recently Added Products
            </h2>

            <Link to="/admin/products" className="text-pink-600 font-semibold">
              View All
            </Link>
          </div>

          <div className="bg-white rounded-3xl shadow overflow-hidden">
            <div className="grid grid-cols-4 p-5 font-semibold text-gray-500 border-b">
              <span>Product</span>
              <span>Category</span>
              <span>Price</span>
              <span>Stock</span>
            </div>

            {recentProducts.map((product) => (
              <div
                key={product._id}
                className="grid grid-cols-4 items-center p-5 border-b hover:bg-pink-50 transition">
                <div className="flex items-center gap-3">
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />

                  <p className="font-semibold">{product.name}</p>
                </div>

                <span>{product.category}</span>

                <span>₹{product.price}</span>

                <span>{product.stock}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
