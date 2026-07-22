import productModel from "../models/product.model.js";

export async function createProduct(req, res) {
  console.log("PRODUCT DATA:", req.body);
  const {
    name,
    slug,
    type,
    category,
    images,
    description,
    price,
    oldPrice,
    stock,
    rating,
    reviews,
    badge,
  } = req.body;

  if (
    !name ||
    !slug ||
    !type ||
    !category ||
    !images ||
    !description ||
    !price
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const existingProduct = await productModel.findOne({ slug });

    if (existingProduct) {
      return res.status(400).json({
        success: false,
        message: "Product already exists",
      });
    }

    const product = await productModel.create({
      name,
      slug,
      type,
      category,
      images,
      description,
      price,
      oldPrice,
      stock,
      rating,
      reviews,
      badge,
    });

    return res.status(201).json({
      success: true,
      message: "Products Created Successfully!",
      product,
    });
  } catch (error) {
    console.log("Server error", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}

export async function getAllProducts(req, res) {
  const { sort, category, type, search, page = 1, limit = 100 } = req.query;

  try {
    let query = {};

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    if (type) {
      query.type = type;
    }

    if (category) {
      query.category = category;
    }

    let sortQuery = {};

    if (sort === "newest") {
      sortQuery = { createdAt: -1 };
    } else if (sort === "oldest") {
      sortQuery = { createdAt: 1 };
    }

    if (sort === "price-low") {
      sortQuery = { price: 1 };
    } else if (sort === "price-high") {
      sortQuery = { price: -1 };
    }

    let skip = (page - 1) * limit;

    const products = await productModel
      .find(query)
      .sort(sortQuery)
      .skip(skip)
      .limit(limit);

    const totalProducts = await productModel.countDocuments(query);

    return res.status(200).json({
      success: true,
      products,
      totalProducts,
      currentPage: Number(page),
      limit: parseInt(limit),
      sort,
    });
  } catch (error) {
    console.log("Server error", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}

export async function getProductBySlug(req, res) {
  const { type, slug } = req.params;

  try {
    const product = await productModel.findOne({ slug, type });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;

  try {
    const product = await productModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.log("Server Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;

  try {
    const product = await productModel.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log("Server Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}

export async function getProductById(req, res) {
  try {
    const product = await productModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}
