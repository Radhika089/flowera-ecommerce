import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ShoppingCart, Star } from "lucide-react";

import "swiper/css";
import ProductCard from "./ProductCard";
import combos from "../data/combos";

const BestSellingCombos = () => {
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
              <ProductCard product={item} type="combos" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellingCombos;
