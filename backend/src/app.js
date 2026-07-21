import cookieParser from "cookie-parser";
import express from "express";
import productRouter from "./routes/product.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/product", productRouter);

export default app;
