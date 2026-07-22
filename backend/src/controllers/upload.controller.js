import imagekit from "../service/imagekit.js";

export const uploadImages = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No images uploaded",
      });
    }

    const uploadedImages = [];

    for (const file of req.files) {
      const response = await imagekit.upload({
        file: file.buffer,
        fileName: `${Date.now()}-${file.originalname}`,
        folder: "/BloomBasket",
      });

      uploadedImages.push(response.url);
    }

    return res.status(200).json({
      success: true,
      images: uploadedImages,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Image upload failed",
    });
  }
};
