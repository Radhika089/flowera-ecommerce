import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { uploadImages } from "../../api/upload.api";

const ProductForm = ({ initialData, onSubmit, buttonText }) => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    type: "flowers",
    category: "",
    description: "",
    images: [],
    price: "",
    oldPrice: "",
    stock: "",
    badge: "",
    isFeatured: false,
    isBestSeller: false,
  });

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        slug: initialData.slug || "",
        type: initialData.type || "flowers",
        category: initialData.category || "",
        description: initialData.description || "",
        images: initialData.images || [],
        price: initialData.price || "",
        oldPrice: initialData.oldPrice || "",
        stock: initialData.stock || "",
        badge: initialData.badge || "",
        isFeatured: initialData.isFeatured || false,
        isBestSeller: initialData.isBestSeller || false,
      });
    }
  }, [initialData]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleImageUpload(e) {
    const files = [...e.target.files];

    if (!files.length) return;

    try {
      setUploading(true);

      const uploadData = new FormData();

      files.forEach((file) => {
        uploadData.append("images", file);
      });

      const { data } = await uploadImages(uploadData);

      setFormData((prev) => ({
        ...prev,
        images: data.images,
      }));

      toast.success("Images uploaded successfully");
    } catch (error) {
      console.log(error);
      toast.error("Image upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function submit(e) {
    e.preventDefault();

    console.log("SUBMIT CLICKED");
    console.log(formData);

    if (!formData.name) return toast.error("Product name is required");
    if (!formData.slug) return toast.error("Slug is required");
    if (!formData.category) return toast.error("Category is required");
    if (!formData.price) return toast.error("Price is required");
    if (!formData.stock) return toast.error("Stock is required");

    await onSubmit(formData);
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white rounded-3xl shadow-lg p-8 space-y-8">
      <h1 className="text-3xl font-playfair font-bold text-gray-800">
        {buttonText}
      </h1>

      {/* Product Name */}

      <div>
        <label className="block mb-2 font-medium">Product Name</label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Red Rose Bouquet"
          className="input"
        />
      </div>

      {/* Type + Category */}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block mb-2 font-medium">Type</label>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="input">
            <option value="flowers">Flowers</option>
            <option value="cakes">Cakes</option>
            <option value="plants">Plants</option>
            <option value="gifts">Gifts</option>
            <option value="combos">Combos</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Category</label>

          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Birthday"
            className="input"
          />
        </div>
      </div>

      {/* Slug */}

      <div>
        <label className="block mb-2 font-medium">Slug</label>

        <input
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          placeholder="red-rose-bouquet"
          className="input"
        />
      </div>

      {/* Description */}

      <div>
        <label className="block mb-2 font-medium">Description</label>

        <textarea
          rows="5"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Write product description..."
          className="input resize-none"
        />
      </div>

      {/* Image Upload */}

      <div>
        <label className="block mb-3 font-medium">Product Images</label>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="input"
        />

        {uploading && (
          <p className="text-pink-600 mt-3 font-medium">Uploading Images...</p>
        )}

        {formData.images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
            {formData.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="h-28 w-full rounded-xl object-cover border shadow-sm"
              />
            ))}
          </div>
        )}
      </div>

      {/* Prices */}

      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <label className="block mb-2 font-medium">Price</label>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Old Price</label>

          <input
            type="number"
            name="oldPrice"
            value={formData.oldPrice}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Stock</label>

          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="input"
          />
        </div>
      </div>

      {/* Badge */}

      <div>
        <label className="block mb-2 font-medium">Badge</label>

        <select
          name="badge"
          value={formData.badge}
          onChange={handleChange}
          className="input">
          <option value="">No Badge</option>
          <option value="Trending">Trending</option>
          <option value="Popular">Popular</option>
          <option value="New">New</option>
          <option value="Premium">Premium</option>
          <option value="Classic">Classic</option>
          <option value="Bestseller">Bestseller</option>
        </select>
      </div>

      {/* Checkboxes */}

      <div className="flex gap-10">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleChange}
          />
          Featured Product
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="isBestSeller"
            checked={formData.isBestSeller}
            onChange={handleChange}
          />
          Best Seller
        </label>
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={uploading}
        className="bg-pink-600 hover:bg-pink-700 disabled:bg-pink-300 text-white px-8 py-3 rounded-xl font-semibold transition">
        {uploading ? "Uploading Images..." : buttonText}
      </button>
    </form>
  );
};

export default ProductForm;
