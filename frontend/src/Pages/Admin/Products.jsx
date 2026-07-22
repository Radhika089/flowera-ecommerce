import React, { useEffect, useState } from "react";
import {
  Trash2,
  Plus,
  Search,
  Package,
  IndianRupee,
  Edit,
  Eye,
} from "lucide-react";

import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../../api/product.api";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  async function fetchProducts() {
    try {
      const { data } = await getProducts();

      setProducts(data.products);
    } catch (error) {
      toast.error("Failed to load products");
    }
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteProduct(id);

      toast.success("Product deleted successfully");

      fetchProducts();
    } catch (error) {
      toast.error("Delete failed");
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between gap-5 mb-8">
        <div>
          <h1 className="text-4xl font-playfair font-bold  text-gray-800">
            Products
          </h1>

          <p className="text-gray-500 mt-2">Manage all BloomBasket products</p>
        </div>

        <Link
          to="/admin/products/add"
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow">
          <Plus size={20} />
          Add Product
        </Link>
      </div>

      {/* Stats */}

      <div className="grid  md:grid-cols-2 gap-6 mb-8 ">
        <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-5">
          <div className=" bg-pink-100 p-4 rounded-xl">
            <Package className="text-pink-600" />
          </div>

          <div>
            <p className="text-gray-500">Total Products</p>

            <h2 className="text-3xl font-bold">{products.length}</h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-5">
          <div className="bg-green-100 p-4 rounded-xl">
            <IndianRupee className="text-green-600" />
          </div>

          <div>
            <p className="text-gray-500">Categories</p>

            <h2 className="text-3xl font-bold">
              {new Set(products.map((product) => product.category)).size}
            </h2>
          </div>
        </div>
      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl shadow p-4 mb-6 flex items-center gap-3">
        <Search className="text-gray-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="outline-none w-full"
        />
      </div>

      {/* Products Table */}

      <div className="bg-white rounded-3xl shadow overflow-hidden">
        <div className="hidden md:grid grid-cols-6 p-5 border-b text-gray-500 font-semibold">
          <span>Image</span>

          <span>Name</span>

          <span>Category</span>

          <span>Price</span>

          <span>Stock</span>

          <span>Action</span>
        </div>

        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="grid md:grid-cols-6 gap-5 items-center p-5 border-b hover:bg-pink-50 transition">
            <img
              src={product.images?.[0]}
              alt={product.name}
              className="w-16 h-16 rounded-xl object-cover"
            />

            <div>
              <h3 className="font-semibold text-gray-800">{product.name}</h3>
            </div>

            <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm w-fit">
              {product.category}
            </span>

            <p className="font-semibold">₹{product.price}</p>

            <span
              className={`px-3 py-1 rounded-full text-sm w-fit
             ${product.stock > 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
              {product.stock > 0
                ? `${product.stock} Available`
                : "Out of Stock"}
            </span>

            <div className="flex gap-2">
              {/* View */}
              <Link
                to={`/${product.type}/${product.slug}`}
                target="_blank"
                className="text-green-600 hover:bg-green-50 p-3 rounded-xl transition"
                title="View Product">
                <Eye size={20} />
              </Link>

              {/* Edit */}
              <Link
                to={`/admin/products/edit/${product._id}`}
                className="text-blue-500 hover:bg-blue-50 p-3 rounded-xl transition"
                title="Edit Product">
                <Edit size={20} />
              </Link>

              {/* Delete */}
              <button
                onClick={() => handleDelete(product._id)}
                className="text-red-500 hover:bg-red-50 p-3 rounded-xl transition"
                title="Delete Product">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
