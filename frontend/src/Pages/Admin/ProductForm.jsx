import React, { useState } from "react";
import { toast } from "react-toastify";

const ProductForm = ({ initialData, onSubmit, buttonText }) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      slug: "",
      type: "flowers",
      category: "",
      description: "",
      images: [""],
      price: "",
      oldPrice: "",
      stock: "",
      badge: "",
      isFeatured: false,
      isBestSeller: false,
    },
  );

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleImageChange(index, value) {
    const updatedImages = [...formData.images];

    updatedImages[index] = value;

    setFormData({
      ...formData,
      images: updatedImages,
    });
  }

  function addImage() {
    setFormData({
      ...formData,
      images: [...formData.images, ""],
    });
  }

  function removeImage(index) {
    const images = formData.images.filter((_, i) => i !== index);

    setFormData({
      ...formData,
      images,
    });
  }

  async function submit(e) {
    e.preventDefault();

    try {
      await onSubmit(formData);
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white rounded-3xl shadow p-8 space-y-6">
      <h1 className="text-3xl font-playfair font-bold">{buttonText}</h1>

      <input
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        className="input"
      />

      <div className="grid md:grid-cols-2 gap-5">
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="input">
          <option value="flowers">Flowers</option>
          <option value="cakes">Cakes</option>
          <option value="gifts">Gifts</option>
          <option value="plants">Plants</option>
          <option value="combos">Combos</option>
        </select>

        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="input"
        />
      </div>

      <input
        name="slug"
        placeholder="Slug"
        value={formData.slug}
        onChange={handleChange}
        className="input"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="input h-32"
      />

      {/* Images */}

      <div>
        <h3 className="font-semibold mb-3">Product Images</h3>

        {formData.images.map((img, index) => (
          <div key={index} className="flex gap-3 mb-3">
            <input
              value={img}
              onChange={(e) => handleImageChange(index, e.target.value)}
              placeholder="Image URL"
              className="input"
            />

            <button
              type="button"
              onClick={() => removeImage(index)}
              className="text-red-500">
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={addImage} className="text-pink-600">
          + Add Image
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <input
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="input"
        />

        <input
          name="oldPrice"
          placeholder="Old Price"
          value={formData.oldPrice}
          onChange={handleChange}
          className="input"
        />

        <input
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="input"
        />
      </div>

      <select
        name="badge"
        value={formData.badge}
        onChange={handleChange}
        className="input">
        <option value="">No Badge</option>

        <option>Bestseller</option>
        <option>Trending</option>
        <option>New</option>
        <option>Popular</option>
        <option>Premium</option>
        <option>Classic</option>
      </select>

      <div className="flex gap-6">
        <label>
          <input
            type="checkbox"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleChange}
          />
          Featured
        </label>

        <label>
          <input
            type="checkbox"
            name="isBestSeller"
            checked={formData.isBestSeller}
            onChange={handleChange}
          />
          Best Seller
        </label>
      </div>

      <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-xl">
        {buttonText}
      </button>
    </form>
  );
};

export default ProductForm;
