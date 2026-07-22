import express from "express";
import upload from "../middlewares/upload.js";
import { uploadImages } from "../controllers/upload.controller.js";
import {
  authMiddleware,
  adminMiddleware,
} from "../middlewares/authMiddleware.js";

const uploadRouter = express.Router();

uploadRouter.post(
  "/",
  authMiddleware,
  adminMiddleware,
  upload.array("images", 10),
  uploadImages,
);

export default uploadRouter;
