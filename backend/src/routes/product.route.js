import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getProductBySlug,
  updateProduct,
} from "../controllers/product.controller.js";
import {
  adminMiddleware,
  authMiddleware,
} from "../middlewares/authMiddleware.js";

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get(
  "/admin/:id",
  authMiddleware,
  adminMiddleware,
  getProductById,
);

productRouter.get("/:type/:slug", getProductBySlug);

// admin route

productRouter.post(
  "/create",
  (req, res, next) => {
    console.log("CREATE ROUTE HIT");
    next();
  },
  authMiddleware,
  adminMiddleware,
  createProduct,
);
productRouter.put("/:id", authMiddleware, adminMiddleware, updateProduct);

productRouter.delete("/:id", authMiddleware, adminMiddleware, deleteProduct);

export default productRouter;
