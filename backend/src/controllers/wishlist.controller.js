import wishlistModel from "../models/wishlist.model.js";

export async function getWishlist(req, res) {
  try {
    const wishlist = await wishlistModel
      .findOne({ user: req.user._id })
      .populate("products");

    if (!wishlist) {
      return res.status(200).json({
        success: true,
        wishlist: {
          products: [],
        },
      });
    }

    return res.status(200).json({
      success: true,
      wishlist,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error!",
    });
  }
}

export async function addToWishlist(req, res) {
  const { productId } = req.body;

  try {
    let wishlist = await wishlistModel.findOne({ user: req.user._id });

    if (!wishlist) {
      wishlist = await wishlistModel.create({
        user: req.user._id,
        products: [],
      });
    }

    const exists = wishlist.products.some(
      (item) => item.toString() === productId,
    );

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Product already in wishlist",
      });
    }

    wishlist.products.push(productId);

    await wishlist.save();

    await wishlist.populate("products");

    return res.status(200).json({
      success: true,
      message: "Product added to wishlist",
      wishlist,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error!",
    });
  }
}

export async function removeFromWishlist(req, res) {
  const { productId } = req.params;

  try {
    const wishlist = await wishlistModel.findOne({
      user: req.user._id,
    });

    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Wishlist not found",
      });
    }

    wishlist.products = wishlist.products.filter(
      (item) => item.toString() !== productId,
    );

    await wishlist.save();

    await wishlist.populate("products");

    return res.status(200).json({
      success: true,
      message: "Product removed from wishlist",
      wishlist,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}
