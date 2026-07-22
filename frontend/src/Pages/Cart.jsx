import { useEffect, useState } from "react";
import { Plus, Minus, Trash2, ShoppingBag, ShoppingCart } from "lucide-react";

import {
  getCart,
  updateCart,
  removeFromCart,
  clearCart,
} from "../api/cart.api";
import SEO from "../Components/SEO";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchCart() {
    try {
      const { data } = await getCart();
      setCart(data.cart);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  async function increase(item) {
    try {
      await updateCart({
        productId: item.product._id,
        quantity: item.quantity + 1,
      });

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  }

  async function decrease(item) {
    if (item.quantity === 1) return;

    try {
      await updateCart({
        productId: item.product._id,
        quantity: item.quantity - 1,
      });

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRemove(productId) {
    try {
      await removeFromCart(productId);

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleClearCart() {
    if (!window.confirm("Clear your cart?")) return;

    try {
      await clearCart();

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-semibold">
        Loading Cart...
      </div>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center">
        <ShoppingCart size={80} className="text-pink-400" />

        <h2 className="text-4xl font-playfair mt-6 font-bold">
          Your Cart is Empty
        </h2>

        <p className="text-gray-500 mt-3">
          Add some beautiful flowers to your cart 🌸
        </p>
      </section>
    );
  }

  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <>
      <SEO
        title="Shopping Cart | BloomBasket"
        description="Review your shopping cart before checkout."
      />
      <section className="bg-[#fffaf8] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-5xl font-playfair font-bold">Shopping Cart</h1>

            <button
              onClick={handleClearCart}
              className="text-red-500 font-semibold">
              Clear Cart
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {cart.items.map((item) => (
                <div
                  key={item.product._id}
                  className="bg-white rounded-3xl shadow-md p-6 flex flex-col md:flex-row gap-6">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-40 h-40 rounded-2xl object-cover"
                  />

                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold">
                      {item.product.name}
                    </h2>

                    <p className="text-pink-600 font-bold text-2xl mt-3">
                      ₹{item.product.price}
                    </p>

                    <div className="flex items-center gap-4 mt-8">
                      <div className="flex border rounded-xl">
                        <button
                          onClick={() => decrease(item)}
                          className="p-3 hover:bg-pink-50">
                          <Minus size={18} />
                        </button>

                        <span className="px-6 py-3">{item.quantity}</span>

                        <button
                          onClick={() => increase(item)}
                          className="p-3 hover:bg-pink-50">
                          <Plus size={18} />
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemove(item.product._id)}
                        className="text-red-500">
                        <Trash2 />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="bg-white rounded-3xl shadow-md p-8 sticky top-28">
                <h2 className="text-3xl font-playfair font-bold">
                  Order Summary
                </h2>

                <div className="flex justify-between mt-8">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between mt-4">
                  <span>Delivery</span>
                  <span className="text-green-600">FREE</span>
                </div>

                <hr className="my-6" />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span>₹{subtotal}</span>
                </div>

                <button className="w-full mt-8 bg-[#e85877] hover:bg-pink-700 text-white py-4 rounded-xl flex justify-center items-center gap-3">
                  <ShoppingBag size={20} />
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
