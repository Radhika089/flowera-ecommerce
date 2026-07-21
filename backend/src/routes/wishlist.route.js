import express from "express";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} from "../controllers/wishlist.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const wishlistRouter = express.Router();

wishlistRouter.get("/", authMiddleware, getWishlist);
wishlistRouter.post("/", authMiddleware, addToWishlist);
wishlistRouter.delete("/:productId", authMiddleware, removeFromWishlist);

export default wishlistRouter;
