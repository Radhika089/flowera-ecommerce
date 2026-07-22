import api from "./axios";

export const register = (userData) => {
  return api.post("/user/register", userData);
};

export const login = (userData) => {
  return api.post("/user/login", userData);
};

export const logout = () => {
  return api.post("/user/logout");
};

export const getCurrentUser = () => {
  return api.get("/user/me");
};
