import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Red Rose Bouquet",
      price: 799,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600",
    },
    {
      id: 2,
      name: "Pink Lily Bouquet",
      price: 999,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=600",
    },
  ]);

  const increase = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrease = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <section className="bg-[#fffaf8] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-playfair font-bold mb-10">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-sm p-5 flex flex-col md:flex-row gap-5">
                <img
                  src={item.image}
                  className="w-40 h-40 rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <h2 className="text-2xl font-semibold">{item.name}</h2>

                  <p className="text-pink-600 font-bold text-xl mt-3">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-4 mt-6">
                    <div className="flex border rounded-xl">
                      <button
                        onClick={() => decrease(item.id)}
                        className="p-3 hover:bg-pink-50">
                        <Minus size={18} />
                      </button>

                      <span className="px-6 py-3">{item.quantity}</span>

                      <button
                        onClick={() => increase(item.id)}
                        className="p-3 hover:bg-pink-50">
                        <Plus size={18} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500">
                      <Trash2 />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-white rounded-3xl shadow-md p-8">
              <h2 className="text-3xl font-playfair font-bold">
                Order Summary
              </h2>

              <div className="flex justify-between mt-8">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between mt-4">
                <span>Delivery</span>
                <span>FREE</span>
              </div>

              <hr className="my-6" />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₹{subtotal}</span>
              </div>

              <button className="mt-8 w-full bg-[#e85877] hover:bg-pink-700 text-white py-4 rounded-xl">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
