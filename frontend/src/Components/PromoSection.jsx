import React from "react";
import { Link } from "react-router-dom";

import promo1 from "../assets/promo1.png";
import promo2 from "../assets/promo2.png";
import promo3 from "../assets/promo3.png";

const PromoSection = () => {
  return (
    <section className="py-12 px-6 bg-[#fffaf8]">
      <div className="max-w-7xl mx-auto">
        {/* Banners */}
        <div className="grid grid-cols-2 gap-3 md:gap-5">
          <Link to="/flowers" className="block overflow-hidden rounded-2xl">
            <img
              src={promo3}
              alt="Midnight Surprise"
              className="w-full h-32 sm:h-44 md:h-64 object-cover rounded-2xl"
            />
          </Link>

          <Link to="/cakes" className="block overflow-hidden rounded-2xl">
            <img
              src={promo2}
              alt="Express Delivery"
              className="w-full h-32 sm:h-44 md:h-64 object-cover rounded-2xl"
            />
          </Link>
        </div>

        <Link to="/gifts" className="block mt-6 overflow-hidden rounded-2xl">
          <img
            src={promo1}
            alt="Why Choose Us"
            className="w-full h-72 object-cover"
          />
        </Link>
      </div>
    </section>
  );
};

export default PromoSection;
