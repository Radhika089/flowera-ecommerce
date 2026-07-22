import api from "./axios";

export const getWishlist = () => api.get("/wishlist");

export const addToWishlist = (productId) =>
  api.post("/wishlist", { productId });

export const removeFromWishlist = (id) => api.delete(`/wishlist/${id}`);
