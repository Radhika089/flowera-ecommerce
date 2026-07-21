import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ShoppingCart, Star } from "lucide-react";

import "swiper/css";
import ProductCard from "./ProductCard";

const BestSellingCakes = () => {
  const cakes = [
    {
      id: 1,
      name: "Chocolate Truffle Cake",
      price: "₹899",
      rating: 4.9,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    },

    {
      id: 2,
      name: "Red Velvet Cake",
      price: "₹1199",
      rating: 4.8,
      reviews: 120,
      image:
        "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600",
    },

    {
      id: 3,
      name: "Black Forest Cake",
      price: "₹799",
      rating: 4.7,
      reviews: 98,
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600",
    },

    {
      id: 4,
      name: "Vanilla Cream Cake",
      price: "₹699",
      rating: 4.6,
      reviews: 85,
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600",
    },

    {
      id: 5,
      name: "Birthday Special Cake",
      price: "₹1499",
      rating: 4.9,
      reviews: 210,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#fffaf8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold font-playfair">
          Best Selling Cakes
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-10">
          Delicious cakes for every celebration
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

            768: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 5,
            },
          }}>
          {cakes.map((cake) => (
            <SwiperSlide key={cake.id}>
              <ProductCard product={cake} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellingCakes;
