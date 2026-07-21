import { useState } from "react";
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Flower2,
} from "lucide-react";
import ProductCard from "../Components/ProductCard";
import flowers from "../data/flowers";
import cakes from "../data/cakes";
import gifts from "../data/gifts";
import plants from "../data/plants";
import combos from "../data/combos";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const { slug } = useParams();
  const allProducts = [
    ...flowers.map((item) => ({ ...item, type: "flowers" })),
    ...cakes.map((item) => ({ ...item, type: "cakes" })),
    ...gifts.map((item) => ({ ...item, type: "gifts" })),
    ...plants.map((item) => ({ ...item, type: "plants" })),
    ...combos.map((item) => ({ ...item, type: "combos" })),
  ];

  const product = allProducts.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">Product Not Found 😢</h1>
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter((item) => item.type === product.type && item.slug !== product.slug)
    .slice(0, 4);

  return (
    <section className="bg-[#fffaf8] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-gray-500 mb-8">
          Home / <span className="capitalize">{product.type}</span>/
          <span className="text-pink-500">{product.name}</span>
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT */}

          <div className="flex gap-5">
            <div className="flex flex-col gap-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => setSelectedImage(img)}
                  className={`w-24 h-24 rounded-xl object-cover cursor-pointer border-2 transition
                    ${
                      selectedImage === img
                        ? "border-pink-500"
                        : "border-transparent"
                    }`}
                />
              ))}
            </div>

            <div className="flex-1 bg-white rounded-3xl overflow-hidden shadow-md">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-[600px] object-cover hover:scale-110 transition duration-500"
              />
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm">
              {product.badge}
            </span>

            <h1 className="text-5xl font-playfair font-bold mt-5">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-4">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>

              <span className="text-gray-500">
                {product.rating} ({product.reviews} Reviews)
              </span>
            </div>

            <div className="mt-6 flex items-center gap-5">
              <h2 className="text-4xl font-bold text-[#e85877]">
                ₹{product.price}
              </h2>

              <del className="text-gray-400 text-xl">₹{product.oldPrice}</del>

              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                Save ₹{product.oldPrice - product.price}
              </span>
            </div>

            <p className="mt-8 text-gray-600 leading-8">
              {product.description}
            </p>

            <div className="mt-10">
              <p className="font-semibold mb-4">Quantity</p>

              <div className="flex items-center border rounded-xl w-fit">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="p-4 hover:bg-pink-50">
                  <Minus />
                </button>

                <span className="px-8 font-semibold">{quantity}</span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-pink-50">
                  <Plus />
                </button>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <button className="flex-1 bg-[#e85877] hover:bg-pink-700 text-white py-4 rounded-xl flex items-center justify-center gap-3">
                <ShoppingCart />
                Add to Cart
              </button>

              <button className="flex-1 border border-pink-500 text-pink-600 hover:bg-pink-600 hover:text-white rounded-xl transition">
                Buy Now
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-md mt-10 p-6 space-y-5">
              <div className="flex gap-4">
                <Truck className="text-pink-500" />
                <div>
                  <h4 className="font-semibold">Same Day Delivery</h4>

                  <p className="text-sm text-gray-500">Order before 4 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldCheck className="text-pink-500" />
                <div>
                  <h4 className="font-semibold">Secure Payment</h4>

                  <p className="text-sm text-gray-500">100% Safe Checkout</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Flower2 />
                <div>
                  <h4 className="font-semibold">Fresh Flowers</h4>

                  <p className="text-sm text-gray-500">
                    Handpicked by expert florists
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-4xl font-playfair font-bold text-center">
            You May Also Like
          </h2>

          <p className="text-center text-gray-500 mt-3 mb-10">
            Customers also loved these bouquets
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} type={item.type} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
