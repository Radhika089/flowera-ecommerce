import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import ProductCard from "./ProductCard";
import { getProducts } from "../api/product.api";

const BestSellingCakes = () => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCakes() {
      try {
        const { data } = await getProducts({
          type: "cakes",
        });

        setCakes(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCakes();
  }, []);

  if (loading) {
    return null;
  }

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
            <SwiperSlide key={cake._id}>
              <ProductCard product={cake} type={cake.type} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellingCakes;
