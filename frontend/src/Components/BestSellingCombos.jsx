import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ShoppingCart, Star } from "lucide-react";

import "swiper/css";
import ProductCard from "./ProductCard";

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
              <ProductCard product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellingCombos;
