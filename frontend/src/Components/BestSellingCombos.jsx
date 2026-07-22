import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import ProductCard from "./ProductCard";
import { getProducts } from "../api/product.api";

const BestSellingCombos = () => {
  const [combos, setCombos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCombos() {
      try {
        const { data } = await getProducts({
          type: "combos",
        });

        setCombos(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCombos();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <section className="py-16 px-6 bg-[#fffaf8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold font-playfair">
          Best Selling Combos
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-10">
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
          {combos.map((combo) => (
            <SwiperSlide key={combo._id}>
              <ProductCard product={combo} type={combo.type} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellingCombos;
