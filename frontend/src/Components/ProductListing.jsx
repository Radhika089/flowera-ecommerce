import React, { useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "./ProductCard";

const ProductListing = ({
  title,
  subtitle,
  heroImage,
  buttonText,
  products,
  categories,
}) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "low") return a.price - b.price;

      if (sortBy === "high") return b.price - a.price;

      if (sortBy === "rating") return b.rating - a.rating;

      return b.id - a.id;
    });

  return (
    <section className="bg-[#fffaf8] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}

        <div className="text-sm text-gray-500 mb-6">
          Home
          <span className="mx-2">/</span>
          <span className="text-[#e85877] font-medium">{title}</span>
        </div>

        {/* Hero */}

        <div className="bg-gradient-to-r from-[#fde8ed] to-[#fff8f6] rounded-3xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-8 md:p-14">
              <p className="uppercase tracking-[5px] text-[#e85877] font-semibold">
                BloomBasket Collection
              </p>

              <h1 className="mt-3 text-4xl md:text-6xl font-playfair font-bold text-gray-800 leading-tight">
                {title}
              </h1>

              <p className="mt-5 text-gray-600 leading-8">{subtitle}</p>

              <div className="flex flex-wrap gap-3 mt-7">
                <span className="bg-white rounded-full px-4 py-2 shadow-sm">
                  🚚 Same Day Delivery
                </span>

                <span className="bg-white rounded-full px-4 py-2 shadow-sm">
                  ⭐ Premium Quality
                </span>

                <span className="bg-white rounded-full px-4 py-2 shadow-sm">
                  💝 Handcrafted
                </span>
              </div>

              <button className="mt-8 bg-[#e85877] text-white px-8 py-3 rounded-xl hover:bg-[#d94767] transition">
                {buttonText}
              </button>
            </div>

            <div className="h-full">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Search + Sort */}

        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
          <div className="relative w-full md:max-w-lg">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder={`Search ${title.toLowerCase()}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white rounded-full border pl-12 pr-4 py-4 outline-none focus:border-pink-500"
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white rounded-full border px-6 py-4 outline-none focus:border-pink-500">
            <option value="newest">Newest</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Categories */}

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                category === item
                  ? "bg-[#e85877] text-white shadow-lg"
                  : "bg-white border hover:border-pink-500 hover:text-[#e85877]"
              }`}>
              {item}
            </button>
          ))}
        </div>

        {/* Product Count */}

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold text-gray-700">
            Showing {filteredProducts.length} Products
          </h2>
        </div>

        {/* Product Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold">No products found 🌸</h2>

            <p className="text-gray-500 mt-3">
              Try another search or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-6 bg-[#e85877] text-white px-6 py-3 rounded-full hover:bg-[#d94767] transition">
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductListing;
