import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const OfferBox = () => {
  return (
    <section className="py-16 px-6 bg-[#fffaf8]">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[40px] bg-[#fdecef] min-h-[360px] flex items-center">
          {/* Big Pink Circle */}

          <div className="absolute -left-24 -bottom-28 w-[420px] h-[420px] rounded-full bg-[#f8b7c4]" />

          {/* Small Decoration */}

          <div className="absolute left-40 top-10 w-10 h-10 rounded-full bg-[#f9cdd6]" />

          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-10 md:px-20 gap-10">
            {/* Left Content */}

            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-[#e85877] font-semibold">
                <Sparkles size={16} />
                Limited Offer
              </div>

              <h2 className="mt-5 text-4xl md:text-6xl font-bold font-playfair text-gray-800">
                Bloom More,
                <br />
                Pay Less 🌸
              </h2>

              <p className="mt-4 text-gray-600 text-lg">
                Fresh flowers delivered with love
              </p>

              <button className="mt-7 bg-[#e85877] text-white px-8 py-3 rounded-full flex items-center gap-3 mx-auto md:mx-0">
                Shop Now
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Discount Circle */}

            <div className="relative z-10 w-48 h-48 rounded-full bg-white shadow-xl flex flex-col items-center justify-center">
              <span className="text-6xl font-bold text-[#e85877]">30%</span>

              <span className="font-semibold text-gray-700">OFF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBox;
