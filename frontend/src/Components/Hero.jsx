import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const Hero = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="h-[calc(100vh-80px)]">
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src={hero1}
            alt="Fresh Flowers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-8">
              <div className="max-w-xl">
                <p className="uppercase tracking-[6px] text-pink-500 font-semibold mb-4">
                  Fresh Flowers
                </p>

                <h1 className="font-playfair text-6xl font-bold text-gray-900 leading-tight ">
                  Every Flower
                  <br />
                  Tells a <span className="text-[#e85877]">Story</span>
                </h1>

                <p className="mt-6 text-lg text-gray-600 leading-8">
                  Handcrafted bouquets made with love. Perfect for birthdays,
                  anniversaries, weddings and every special occasion.
                </p>

                <div className="mt-10 flex gap-5">
                  <button className="bg-[#e74d77] hover:bg-[#eb7b99] text-white px-15 py-3 rounded-xl transition">
                    Shop Collection
                  </button>

                  <button className="border border-pink-500 hover:bg-[#e74d77] hover:text-white px-8 py-3 rounded-xl transition">
                    Explore Gifts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src={hero3}
            alt="Fresh Flowers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-8">
              <div className="max-w-xl">
                <p className="uppercase tracking-[6px] text-pink-500 font-semibold mb-4">
                  Luxury Gifts
                </p>

                <h1 className="font-playfair text-6xl font-bold text-gray-900 leading-tight">
                  Celebrate
                  <br />
                  Every <span className="text-[#e85877]">Occasion</span>
                </h1>

                <p className="mt-6 text-lg text-gray-600 leading-8">
                  Surprise your loved ones with elegant flower hampers and
                  thoughtful gifts, beautifully arranged for birthdays,
                  anniversaries, and special moments.
                </p>

                <div className="mt-10 flex gap-5">
                  <button className="bg-[#e74d77] hover:bg-[#eb7b99] text-white px-16 py-3 rounded-xl transition">
                    Shop Gifts
                  </button>

                  <button className="border border-pink-500 hover:bg-[#e74d77] hover:text-white px-8 py-3 rounded-xl transition">
                    Explore Hampers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src={hero2}
            alt="Fresh Flowers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-8">
              <div className="max-w-xl">
                <p className="uppercase tracking-[6px] text-pink-500 font-semibold mb-4">
                  Artisan Cakes
                </p>

                <h1 className="font-playfair text-6xl font-bold text-gray-900 leading-tight">
                  A Slice Of
                  <br />
                  <span className="text-[#e85877]">Happiness</span>
                </h1>

                <p className="mt-6 text-lg text-gray-600 leading-8">
                  Beautiful cakes crafted with passion and love, bringing
                  sweetness to your unforgettable celebrations.
                </p>

                <div className="mt-10 flex gap-5">
                  <button className="bg-[#e74d77] hover:bg-[#eb7b99] text-white px-15 py-3 rounded-xl transition">
                    Shop Cakes
                  </button>

                  <button className="border border-pink-500 hover:bg-[#e74d77] hover:text-white px-8 py-3 rounded-xl transition">
                    Explore Flavors
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
