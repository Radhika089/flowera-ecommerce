import api from "./axios";

export const uploadImages = (formData) => {
  return api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
