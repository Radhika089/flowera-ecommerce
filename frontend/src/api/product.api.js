import api from "./axios";

export const getProducts = (params) => {
  return api.get("/product", { params });
};

export const getProduct = (type, slug) => {
  return api.get(`/product/${type}/${slug}`);
};
