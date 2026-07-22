import React, { useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  UserRound,
  UserRoundKey,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const { user, cartCount, wishlistCount } = useAuth();

  return (
    <nav className="w-full bg-[#fefbfb] shadow-sm sticky top-0 z-50">
      <div className="mx-auto h-20 px-6 flex items-center justify-around">
        <Link to="/">
          <h1 className="text-3xl font-playfair text-[rgb(238,95,132)] font-bold cursor-pointer">
            🌸 <span className="text-gray-950">Bloom</span>Basket
          </h1>
        </Link>

        <div className="mx-auto hidden lg:block">
          <ul className="flex justify-center gap-12 py-4 font-medium">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/flowers" className="nav-link">
              Flowers
            </Link>

            <Link to="/cakes" className="nav-link">
              Cakes
            </Link>

            <Link to="/plants" className="nav-link">
              Plants
            </Link>

            <Link to="/combos" className="nav-link">
              Combos
            </Link>

            <Link to="/gifts" className="nav-link">
              Gifts
            </Link>

            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </ul>
        </div>

        <div className="hidden md:flex items-center border rounded-xl px-4 py-2 w-[250px] mr-5">
          <Search className="text-gray-400 w-5 h-5" />

          <input
            type="text"
            placeholder="Search flowers, cakes..."
            className="ml-2 outline-none bg-transparent w-full"
          />
        </div>

        <div className="flex items-center gap-5">
          {/* Wishlist */}
          <Link to="/wishlist" className="relative">
            <Heart className="cursor-pointer hover:text-pink-600 transition" />

            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-pink-600 text-white text-xs flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="cursor-pointer hover:text-pink-600 transition" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-pink-600 text-white text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User */}
          <Link to={user ? "/" : "/auth"}>
            {user ? (
              <UserRound className="cursor-pointer hover:text-pink-600 transition" />
            ) : (
              <UserRoundKey className="cursor-pointer hover:text-pink-600 transition" />
            )}
          </Link>

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
            <Link to="/" onClick={() => setMenu(false)}>
              Home
            </Link>

            <Link to="/flowers" onClick={() => setMenu(false)}>
              Flowers
            </Link>

            <Link to="/cakes" onClick={() => setMenu(false)}>
              Cakes
            </Link>

            <Link to="/plants" onClick={() => setMenu(false)}>
              Plants
            </Link>

            <Link to="/combos" onClick={() => setMenu(false)}>
              Combos
            </Link>

            <Link to="/gifts" onClick={() => setMenu(false)}>
              Gifts
            </Link>

            <Link to="/contact" onClick={() => setMenu(false)}>
              Contact
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
