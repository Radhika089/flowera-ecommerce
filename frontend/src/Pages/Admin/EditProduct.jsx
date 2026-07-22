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
    async function fetch() {
      const { data } = await getProductById(id);

      setProduct(data.product);
    }

    fetch();
  }, [id]);

  async function handleUpdate(data) {
    await updateProduct(id, data);

    toast.success("Product updated");

    navigate("/admin/products");
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
