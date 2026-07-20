import React from "react";
import { ArrowRight } from "lucide-react";

const FinalBanner = () => {
  return (
    <section className="px-6 py-16 bg-[#fffaf8]">
      <div
        className="
        max-w-7xl
        mx-auto
        rounded-[40px]
        overflow-hidden
        relative
        bg-gradient-to-r
        from-[#f9dce4]
        to-[#fff2ed]
        min-h-[320px]
        flex
        items-center
        ">
        {/* Flower Image */}

        <img
          src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=700"
          className="
          absolute
          right-0
          bottom-0
          h-[320px]
          object-cover
          hidden
          md:block
          "
        />

        {/* Content */}

        <div
          className="
          relative
          z-10
          p-8
          md:p-14
          max-w-xl
          ">
          <p
            className="
            text-[#e85877]
            uppercase
            tracking-[4px]
            font-semibold
            ">
            Send Happiness
          </p>

          <h2
            className="
            text-4xl
            md:text-6xl
            font-bold
            font-playfair
            text-gray-800
            mt-4
            ">
            Make Every
            <br />
            Moment Special
          </h2>

          <p
            className="
            mt-5
            text-gray-600
            text-lg
            ">
            Beautiful flowers, delicious cakes and thoughtful gifts delivered
            with love.
          </p>

          <button
            className="
            mt-8
            bg-[#e85877]
            text-white
            px-8
            py-4
            rounded-full
            flex
            items-center
            gap-3
            hover:scale-105
            transition
            ">
            Shop Now
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalBanner;
