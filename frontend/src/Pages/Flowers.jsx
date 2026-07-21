import React, { useState } from "react";
import ProductListing from "../Components/ProductListing";
import flowers from "../data/flowers";

const Flowers = () => {
  return (
    <ProductListing
      title="Fresh Flowers"
      subtitle="Discover handcrafted bouquets made with love for birthdays, anniversaries, weddings and every unforgettable moment."
      buttonText="Shop Flowers"
      heroImage="https://images.unsplash.com/photo-1520763185298-1b434c919102?w=1200"
      products={flowers}
      categories={["All", "Roses", "Lilies", "Sunflowers", "Mixed", "Orchids"]}
    />
  );
};

export default Flowers;
