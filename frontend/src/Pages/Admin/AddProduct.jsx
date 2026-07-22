import React from "react";
import ProductForm from "./ProductForm";
import { createProduct } from "../../api/product.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  async function handleCreate(productData) {
    console.log("FORM DATA FROM FRONTEND:", productData);

    try {
      await createProduct(productData);

      toast.success("Product added successfully");

      navigate("/admin/products");
    } catch (error) {
      console.log(error.response?.data);

      toast.error(error.response?.data?.message || "Failed to add product");
    }
  }

  return <ProductForm onSubmit={handleCreate} buttonText="Add Product" />;
};

export default AddProduct;
