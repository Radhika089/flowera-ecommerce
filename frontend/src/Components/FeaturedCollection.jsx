import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ShoppingCart, Star } from "lucide-react";
import ProductCard from "./ProductCard";

import { useEffect, useState } from "react";
import { getProducts } from "../api/product.api";

const FeaturedCollection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await getProducts({
          type: "flowers",
        });

        setProducts(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

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
            <SwiperSlide key={product._id}>
              <ProductCard product={product} type={product.type} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedCollection;
