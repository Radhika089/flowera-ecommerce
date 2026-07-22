import React from "react";
import { Package, Plus, Users, ShoppingBag } from "lucide-react";

const AdminDashboard = () => {
  return (
    <section className="min-h-screen bg-[#fffaf8] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-playfair font-bold text-gray-800">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage BloomBasket products and store data.
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          <div className="bg-white rounded-2xl shadow p-6">
            <Package className="text-pink-600" />
            <h2 className="text-2xl font-bold mt-4">Products</h2>
            <p className="text-gray-500">Manage products</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <Plus className="text-pink-600" />
            <h2 className="text-2xl font-bold mt-4">Add Product</h2>
            <p className="text-gray-500">Create new products</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <ShoppingBag className="text-pink-600" />
            <h2 className="text-2xl font-bold mt-4">Orders</h2>
            <p className="text-gray-500">View orders</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <Users className="text-pink-600" />
            <h2 className="text-2xl font-bold mt-4">Users</h2>
            <p className="text-gray-500">Manage users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
