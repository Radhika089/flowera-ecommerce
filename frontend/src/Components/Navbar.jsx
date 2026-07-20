import React, { useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  UserRoundKey,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="w-full bg-[#fefbfb] shadow-sm">
      <div className="mx-auto h-20 px-6 flex items-center justify-around">
        <h1 className="text-3xl  font-playfair text-[rgb(238,95,132)] font-bold cursor-pointer">
          🌸 <span className="text-gray-950">Bloom</span>Basket
        </h1>

        <div className="mx-auto hidden lg:block">
          <ul className="flex justify-center gap-12 py-4 font-medium transition">
            <li className="nav-link ">Home</li>

            <li className="nav-link">Flowers</li>

            <li className="nav-link">Cakes</li>

            <li className="nav-link">Plants</li>

            <li className="nav-link">Combos</li>

            <li className="nav-link">Gifts</li>

            <li className="nav-link">Contact</li>
          </ul>
        </div>

        <div className="hidden md:flex items-center border rounded-xl px-4 py-2 w-[250px] mr-5">
          <Search className="text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search flowers, cakes..."
            className="ml-2 outline-none"
          />
        </div>

        <div className="flex items-center gap-5">
          <Heart className="cursor-pointer hover:text-pink-600 transition" />

          <ShoppingCart className="cursor-pointer hover:text-pink-600 transition" />
          <UserRoundKey className="cursor-pointer hover:text-pink-600 transition" />

          {menu ? (
            <X
              className="lg:hidden w-7 h-7 cursor-pointer"
              onClick={() => setMenu(false)}
            />
          ) : (
            <Menu
              className="lg:hidden w-7 h-7 cursor-pointer"
              onClick={() => setMenu(true)}
            />
          )}
        </div>
      </div>

      {menu && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-5 p-6">
            <li className="nav-link">Home</li>
            <li>Flowers</li>
            <li>Cakes</li>
            <li>Plants</li>
            <li>Combos</li>
            <li>Gifts</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
