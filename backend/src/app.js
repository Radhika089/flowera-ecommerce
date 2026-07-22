import cookieParser from "cookie-parser";
import express from "express";
import productRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js";
import wishlistRouter from "./routes/wishlist.route.js";
import cors from "cors";
import cartRouter from "./routes/cart.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/wishlist", wishlistRouter);
app.use("/api/cart", cartRouter);

export default app;
