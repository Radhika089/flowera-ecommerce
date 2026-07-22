import { useEffect, useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

import { getWishlist, removeFromWishlist } from "../api/wishlist.api";

import { addToCart } from "../api/cart.api";
import SEO from "../Components/SEO";
import { toast } from "react-toastify";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchWishlist() {
    try {
      const { data } = await getWishlist();

      setWishlist(data.wishlist);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWishlist();
  }, []);

  async function handleRemove(productId) {
    try {
      await removeFromWishlist(productId);

      fetchWishlist();

      toast.success("Removed from Wishlist ❤️");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddToCart(productId) {
    try {
      await addToCart({
        productId,
        quantity: 1,
      });

      toast.success("Added to Cart 🛒");
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-semibold">
        Loading Wishlist...
      </div>
    );
  }

  if (!wishlist || wishlist.products.length === 0) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center">
        <Heart size={80} className="text-pink-400" />

        <h2 className="text-4xl font-playfair font-bold mt-6">
          Your Wishlist is Empty
        </h2>

        <p className="text-gray-500 mt-3">
          Save your favourite flowers here ❤️
        </p>
      </section>
    );
  }

  return (
    <>
      <SEO
        title="My Wishlist | BloomBasket"
        description="Your favourite flowers, cakes and gifts saved for later."
      />
      <section className="bg-[#fffaf8] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-playfair font-bold mb-12">
            My Wishlist
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlist.products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-3xl overflow-hidden shadow-md group hover:shadow-xl transition">
                <div className="relative overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-72 w-full object-cover group-hover:scale-105 transition duration-300"
                  />

                  <button
                    onClick={() => handleRemove(product._id)}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
                    <Heart
                      size={18}
                      fill="currentColor"
                      className="text-pink-500"
                    />
                  </button>
                </div>

                <div className="p-5">
                  <h2 className="font-semibold text-xl">{product.name}</h2>

                  <p className="text-pink-600 font-bold text-xl mt-3">
                    ₹{product.price}
                  </p>

                  <button
                    onClick={() => handleAddToCart(product._id)}
                    className="mt-5 w-full bg-[#e85877] hover:bg-pink-700 text-white py-3 rounded-xl flex items-center justify-center gap-2">
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
