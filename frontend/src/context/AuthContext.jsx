import { createContext, useEffect, useState } from "react";
import { getCurrentUser, logout } from "../api/user.api";
import { getCart } from "../api/cart.api";
import { getWishlist } from "../api/wishlist.api";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  async function fetchCounts() {
    try {
      const cartRes = await getCart();
      setCartCount(cartRes.data.cart.items.length);

      const wishlistRes = await getWishlist();
      setWishlistCount(wishlistRes.data.wishlist.products.length);
    } catch (error) {
      setCartCount(0);
      setWishlistCount(0);
    }
  }

  async function fetchUser() {
    try {
      const { data } = await getCurrentUser();

      setUser(data.user);

      await fetchCounts();
      return data.user;
    } catch (error) {
      setUser(null);
      setCartCount(0);
      setWishlistCount(0);
    } finally {
      setLoading(false);
    }
  }

  async function logoutUser() {
    try {
      await logout();

      setUser(null);
      setCartCount(0);
      setWishlistCount(0);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logoutUser,
        fetchUser,

        cartCount,
        setCartCount,

        wishlistCount,
        setWishlistCount,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
