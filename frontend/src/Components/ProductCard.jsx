import React from "react";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { addToCart } from "../api/cart.api";
import { addToWishlist, removeFromWishlist } from "../api/wishlist.api";
import { useAuth } from "../hooks/useAuth";

import { toast } from "react-toastify";

const ProductCard = ({ product, type }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const { cartCount, setCartCount } = useAuth();
  const { wishlistCount, setWishlistCount } = useAuth();

  async function handleCart(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      toast.error("Please login first");
      navigate("/auth");
      return;
    }

    try {
      await addToCart({
        productId: product._id,
        quantity: 1,
      });

      setCartCount(cartCount + 1);

      toast.success("Product added to cart 🛒");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }

  async function handleWishlist(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      toast.error("Please login first");
      navigate("/auth");
      return;
    }

    try {
      await addToWishlist(product._id);

      setWishlistCount(wishlistCount + 1);

      toast.success("Added to Wishlist ❤️");
    } catch (error) {
      if (error.response?.data?.message === "Product already in wishlist") {
        await removeFromWishlist(product._id);

        setWishlistCount(Math.max(0, wishlistCount - 1));

        toast.success("Removed from Wishlist");
      } else {
        console.log(error);
      }
    }
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group relative">
      {/* Wishlist */}
      <button
        onClick={handleWishlist}
        className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md z-10 hover:bg-pink-50">
        <Heart size={18} className="text-pink-500" fill="currentColor" />
      </button>

      <Link to={`/${type}/${product.slug}`}>
        <div className="h-64 overflow-hidden">
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/${type}/${product.slug}`}>
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
            ₹{product.price}
          </span>
        </div>

        <button
          onClick={handleCart}
          className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#e85877] text-[#e85877] font-medium hover:bg-[#e85877] hover:text-white transition-all duration-300">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
