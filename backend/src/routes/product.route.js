import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductBySlug,
  updateProduct,
} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.post("/create", createProduct);

productRouter.get("/", getAllProducts);
productRouter.get("/:type/:slug", getProductBySlug);

productRouter.put("/:id", updateProduct);

productRouter.delete("/:id", deleteProduct);

export default productRouter;
