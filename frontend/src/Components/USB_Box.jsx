import { Flower, Truck, Lock, BadgeCheck } from "lucide-react";
import React from "react";

const USB_Box = () => {
  return (
    <div className="bg-[#fef4f5] gap-6 w-full items-center justify-around mt-6 py-8 px-14 grid grid-cols-2 lg:grid-cols-4 ">
      <div className="ml-4 flex items-center gap-4">
        <Truck className="text-[#f04a7e]" size={30} />
        <h4>
          Small day delivery <br /> <span>On all orders before 4pm</span>
        </h4>
      </div>
      <div className="ml-4 flex items-center gap-4">
        <Flower className="text-[#f04a7e]" size={30} />
        <h4>
          Fresh and Quality Flowers <br /> <span>Handpicked with care</span>
        </h4>
      </div>
      <div className="ml-4 flex items-center gap-4">
        <Lock className="text-[#f04a7e]" size={30} />
        <h4>
          Secure Payments <br /> <span>100% secure & safe</span>
        </h4>
      </div>
      <div className="ml-4 flex items-center gap-4">
        <BadgeCheck className="text-[#f04a7e]" size={30} />
        <h4>
          Easy Returns <br /> <span>Hassle Free returns</span>
        </h4>
      </div>
    </div>
  );
};

export default USB_Box;
