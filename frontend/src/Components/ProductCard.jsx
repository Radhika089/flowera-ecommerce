import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <Link to={`/flowers/${product.slug}`}>
        <div className="h-64 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-800 line-clamp-2 hover:text-[#e85877] transition">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mt-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={15}
                fill="currentColor"
                strokeWidth={1.5}
              />
            ))}
          </div>

          <span className="text-sm text-gray-500">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="mt-3">
          <span className="text-xl font-bold text-[#e85877]">
            {product.price}
          </span>
        </div>

        <button className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#e85877] text-[#e85877] font-medium hover:bg-[#e85877] hover:text-white transition-all duration-300">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
