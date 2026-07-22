import express from "express";
import {
  deleteUser,
  getAllUsers,
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
  updateUserRole,
} from "../controllers/user.controller.js";
import {
  adminMiddleware,
  authMiddleware,
} from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
userRouter.get("/me", authMiddleware, getCurrentUser);

// admin route

userRouter.get("/admin/users", authMiddleware, adminMiddleware, getAllUsers);

userRouter.put(
  "/admin/users/:id",
  authMiddleware,
  adminMiddleware,
  updateUserRole,
);

userRouter.delete(
  "/admin/users/:id",
  authMiddleware,
  adminMiddleware,
  deleteUser,
);

export default userRouter;
