import cookieParser from "cookie-parser";
import express from "express";
import productRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
export default app;
