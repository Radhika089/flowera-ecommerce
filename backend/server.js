import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import { connectDb } from "./src/config/db.js";

connectDb();

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running at 3000");
});
