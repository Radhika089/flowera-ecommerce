import React from "react";
import ProductForm from "./ProductForm";
import { createProduct } from "../../api/product.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  async function handleCreate(data) {
    try {
      await createProduct(data);

      toast.success("Product added successfully");

      navigate("/admin/products");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add product");
    }
  }

  return <ProductForm onSubmit={handleCreate} buttonText="Add Product" />;
};

export default AddProduct;
