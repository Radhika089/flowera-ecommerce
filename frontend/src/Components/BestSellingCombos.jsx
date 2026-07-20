import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ShoppingCart, Star } from "lucide-react";

import "swiper/css";

const BestSellingCombos = () => {
  const combos = [
    {
      id: 1,
      name: "Birthday Bliss Combo",
      description: "Rose Bouquet + Chocolate Cake",
      price: "₹1499",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?w=600",
    },

    {
      id: 2,
      name: "Love Celebration Combo",
      description: "Premium Roses + Gift Box",
      price: "₹1999",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
    },

    {
      id: 3,
      name: "Anniversary Special",
      description: "Flowers + Surprise Gift",
      price: "₹1699",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600",
    },

    {
      id: 4,
      name: "Sweet Moments",
      description: "Cake + Fresh Flowers",
      price: "₹1799",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#fffaf8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold font-playfair">
          Best Selling Combos
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-10 ">
          Perfect gifts for every special moment
        </p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 4,
            },
          }}>
          {combos.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md group">
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className=" w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-4">
                  <h3 className=" font-semibold text-gray-800 text-lg">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-1 mt-3 text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <span className=" text-gray-600 text-sm">
                      {item.rating}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-[#e85877] text-lg">
                      {item.price}
                    </span>
                  </div>

                  <button className="hover:bg-[#e85877] hover:text-white text-pink-600 px-3 py-1 rounded-md w-full border mt-2 text-sm flex items-center justify-center py-2 gap-4">
                    <ShoppingCart size={18} /> Add to cart
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

export default BestSellingCombos;
