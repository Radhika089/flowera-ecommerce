import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductBySlug,
  updateProduct,
} from "../controllers/product.controller.js";
import {
  adminMiddleware,
  authMiddleware,
} from "../middlewares/authMiddleware.js";

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:type/:slug", getProductBySlug);

// admin route

productRouter.post("/create", authMiddleware, adminMiddleware, createProduct);
productRouter.put("/:id", authMiddleware, adminMiddleware, updateProduct);

productRouter.delete("/:id", authMiddleware, adminMiddleware, deleteProduct);

export default productRouter;
