import React, { useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  UserRoundKey,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  const { user, cartCount, wishlistCount, logoutUser } = useAuth();

  async function handleLogout() {
    try {
      await logoutUser();

      setProfileMenu(false);

      toast.success("Logged out successfully 👋");
    } catch (error) {
      toast.error("Logout failed");
    }
  }

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
            <Heart className="hover:text-pink-600" />

            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative">
            <ShoppingCart className="hover:text-pink-600" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <div className="relative">
            {user ? (
              <>
                <button onClick={() => setProfileMenu(!profileMenu)}>
                  <UserRoundKey className="cursor-pointer hover:text-pink-600 transition" />
                </button>

                {profileMenu && (
                  <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-xl border z-50 overflow-hidden">
                    <div className="px-4 py-3 border-b">
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-pink-50 transition text-red-500">
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link to="/auth">
                <UserRoundKey className="cursor-pointer hover:text-pink-600 transition" />
              </Link>
            )}
          </div>

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
