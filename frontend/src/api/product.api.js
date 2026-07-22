import api from "./axios";

export const getProducts = (params) => {
  return api.get("/product", { params });
};

export const getProduct = (type, slug) => {
  return api.get(`/product/${type}/${slug}`);
};

export const getProductById = (id) => {
  return api.get(`/product/admin/${id}`);
};

export const createProduct = (data) => {
  console.log("API CREATE DATA:", data);

  return api.post("/product/create", data);
};

export const deleteProduct = (id) => {
  return api.delete(`/product/${id}`);
};

export const updateProduct = (id, data) => {
  return api.put(`/product/${id}`, data);
};
