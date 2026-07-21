import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

import "swiper/css";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      review:
        "The flowers were fresh and beautifully packed. Delivery was super fast!",
      city: "Delhi",
    },

    {
      id: 2,
      name: "Rahul Verma",
      review: "Ordered a birthday combo and it was perfect. Everyone loved it!",
      city: "Mumbai",
    },

    {
      id: 3,
      name: "Sneha Kapoor",
      review: "Amazing quality flowers with excellent customer service.",
      city: "Bangalore",
    },

    {
      id: 4,
      name: "Amit Singh",
      review: "The cake and bouquet combination was exactly what I wanted.",
      city: "Chandigarh",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold font-playfair">
          What Our Customers Say
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-10">
          Loved by thousands of happy customers
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
              slidesPerView: 3,
            },
          }}>
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#fffaf8] rounded-3xl p-8 shadow-md text-center">
                <div className="flex justify-center text-yellow-400 mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className=" text-gray-600 leading-relaxed">
                  "{item.review}"
                </p>

                <div className="mt-6">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>

                  <span className="text-sm text-gray-500">{item.city}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
