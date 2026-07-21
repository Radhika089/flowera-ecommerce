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
router.get("/:slug", getProductBySlug);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default productRouter;
