import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import { getProductById, updateProduct } from "../../api/product.api";

import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await getProductById(id);

        setProduct(data.product);
      } catch (error) {
        toast.error("Failed to load product");
      }
    }

    fetchProduct();
  }, [id]);

  async function handleUpdate(productData) {
    try {
      await updateProduct(id, productData);

      toast.success("Product updated successfully");

      navigate("/admin/products");
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  }

  if (!product) return <p>Loading...</p>;

  return (
    <ProductForm
      initialData={product}
      onSubmit={handleUpdate}
      buttonText="Update Product"
    />
  );
};

export default EditProduct;
