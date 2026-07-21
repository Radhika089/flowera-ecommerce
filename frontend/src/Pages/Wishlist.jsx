import { Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Red Rose Bouquet",
    price: 799,
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600",
  },
  {
    id: 2,
    name: "Pink Lily Bouquet",
    price: 999,
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=600",
  },
  {
    id: 3,
    name: "Sunflower Bouquet",
    price: 1299,
    image: "https://images.unsplash.com/photo-1543409777-30250849aa3e?w=600",
  },
  {
    id: 4,
    name: "White Rose Bouquet",
    price: 1099,
    image: "https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?w=600",
  },
];

const Wishlist = () => {
  return (
    <section className="bg-[#fffaf8] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-playfair font-bold mb-10">My Wishlist</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm group">
              <div className="relative">
                <img
                  src={item.image}
                  className="h-72 w-full object-cover group-hover:scale-105 transition"
                />

                <button className="absolute top-4 right-4 bg-white p-2 rounded-full">
                  <Heart
                    size={18}
                    fill="currentColor"
                    className="text-pink-500"
                  />
                </button>
              </div>

              <div className="p-5">
                <h2 className="font-semibold text-lg">{item.name}</h2>

                <p className="text-pink-600 font-bold mt-3">₹{item.price}</p>

                <button className="mt-5 w-full bg-[#e85877] hover:bg-pink-700 text-white py-3 rounded-xl flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
