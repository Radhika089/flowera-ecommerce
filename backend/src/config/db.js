import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Db is connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
