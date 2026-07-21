import express from "express";
import {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
  clearCart,
} from "../controllers/cart.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const cartRouter = express.Router();

cartRouter.get("/", authMiddleware, getCart);
cartRouter.post("/", authMiddleware, addToCart);
cartRouter.put("/", authMiddleware, updateCart);
cartRouter.delete("/:productId", authMiddleware, removeFromCart);
cartRouter.delete("/", authMiddleware, clearCart);

export default cartRouter;
