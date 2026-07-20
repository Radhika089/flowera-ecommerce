import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2b1b22] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <div>
            <h2 className="text-3xl font-bold font-playfair text-[#f4a6b8]">
              BloomBasket
            </h2>

            <p className="text-gray-300 mt-4 leading-relaxed">
              Beautiful flowers, cakes and gifts delivered with love for every
              special moment.
            </p>

            <div className="flex gap-4 mt-6">
              <FaInstagram className="hover:text-[#f04a7e] cursor-pointer" />

              <FaFacebook className="hover:text-[#f04a7e] cursor-pointer" />

              <FaTwitter className="hover:text-[#f04a7e] cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-[#f04a7e] cursor-pointer">Home</li>

              <li className="hover:text-[#f04a7e] cursor-pointer">Flowers</li>

              <li className="hover:text-[#f04a7e] cursor-pointer">Cakes</li>

              <li className="hover:text-[#f04a7e] cursor-pointer">Gifts</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">Customer Care</h3>

            <ul className=" space-y-3 text-gray-300">
              <li>About Us</li>
              <li>Track Order</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">Contact Us</h3>

            <div className="space-y-4 text-gray-300">
              <p className="flex gap-3 items-center">
                <Phone size={18} />
                +91 98765 43210
              </p>

              <p className="flex gap-3 items-center">
                <Mail size={18} />
                hello@flowera.com
              </p>

              <p>🌸 Delivering happiness across 550+ cities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-400 text-sm">
        © 2026 Flowera. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
