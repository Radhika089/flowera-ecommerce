import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";
import { getProducts } from "../api/product.api";

const PlantsCollection = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlants() {
      try {
        const { data } = await getProducts({
          type: "plants",
          limit: 6,
        });

        setPlants(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPlants();
  }, []);

  if (loading) return null;

  return (
    <section className="py-16 px-6 bg-[#fffaf8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold font-playfair">
          Plants Collection
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-10">
          Fresh indoor and outdoor plants for every space
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
          {plants.map((plant) => (
            <SwiperSlide key={plant._id}>
              <ProductCard product={plant} type={plant.type} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PlantsCollection;
