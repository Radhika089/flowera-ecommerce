import mongoose, { Mongoose } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    type: {
      type: String,
      required: true,
      enum: ["flowers", "cakes", "gifts", "plants", "combos"],
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    images: [
      {
        type: String,
      },
    ],

    price: {
      type: Number,
      required: true,
    },

    oldPrice: {
      type: Number,
      default: 0,
    },

    stock: {
      type: Number,
      default: 0,
    },

    rating: {
      type: Number,
      default: 0,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    badge: {
      type: String,
      enum: ["Bestseller", "Trending", "New", "Popular", "Premium", "Classic"],
      default: "",
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isBestSeller: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;
