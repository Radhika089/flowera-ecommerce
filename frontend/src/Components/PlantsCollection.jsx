import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import gifts from "../data/gifts";
import plants from "../data/plants";

const PlantsCollection = () => {
  return (
    <section className="py-16 px-6 bg-[#fffaf8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold font-playfair">
          Plants Collection
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
          {plants.slice(0, 6).map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} type="plants" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PlantsCollection;
