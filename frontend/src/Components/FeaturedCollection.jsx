import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ShoppingCart, Star } from "lucide-react";

const FeaturedCollection = () => {
  const products = [
    {
      id: 1,
      name: "Red Rose Bouquet",
      price: "₹799",
      rating: 4.8,
      reviews: 124,
      image:
        "https://images.unsplash.com/photo-1683231097750-8ca9fc1af4b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlZCUyMGJvdXF1ZXQlMjBmb3IlMjBzaG9wfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Pink Lily Bouquet",
      price: "₹999",
      rating: 4.8,
      reviews: 124,
      image:
        "https://images.unsplash.com/photo-1583228858294-6745cb25969e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGluayUyMEJvdXF1ZXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Mixed Roses Bouquet",
      price: "₹1299",
      rating: 4.8,
      reviews: 124,
      image:
        "https://plus.unsplash.com/premium_photo-1664297825115-faf1e344bc1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fE1peGVkJTIwUm9zZXMlMjBCb3VxdWV0fGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Pink Orchid Bouquet",
      price: "₹899",
      rating: 4.8,
      reviews: 124,
      image:
        "https://plus.unsplash.com/premium_photo-1674581211991-bd10fa5137bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fFBpbmslMjBPcmNoaWQlMjBCb3VxdWV0fGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Sunflower Bouquet",
      price: "₹1499",
      rating: 4.8,
      reviews: 124,
      image:
        "https://images.unsplash.com/photo-1543409777-30250849aa3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bmZsb3dlciUyMEJvdXF1ZXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      name: "White Rose Bouquet",
      price: "₹1099",
      rating: 4.6,
      reviews: 98,
      image:
        "https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2hpdGUlMjBSb3NlJTIwQm91cXVldHxlbnwwfHwwfHx8MA%3D%3D-",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#fffaf8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold font-playfair">
          Featured Collection
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-10">
          Our most loved flowers and gifts
        </p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}>
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md group">
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1 mt-2">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={15} fill="currentColor" />
                      ))}
                    </div>

                    <span className="text-sm text-gray-500">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold text-[#e85877]">
                      {product.price}
                    </span>
                  </div>

                  <button className="hover:bg-[#e85877] hover:text-white text-pink-600 px-3 py-1 rounded-md w-full border mt-2 text-sm flex items-center justify-center py-2 gap-4">
                    <ShoppingCart className="h-5 w-5" /> Add to cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedCollection;
