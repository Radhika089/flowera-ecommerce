import React, { useState } from "react";
import ProductListing from "../Components/ProductListing";
import SEO from "../Components/SEO";

const Flowers = () => {
  return (
    <>
      <SEO
        title="Fresh Flowers | BloomBasket"
        description="Shop fresh flower bouquets for birthdays, anniversaries and every special occasion."
      />
      <ProductListing
        title="Fresh Flowers"
        subtitle="Discover handcrafted bouquets made with love for birthdays, anniversaries, weddings and every unforgettable moment."
        buttonText="Shop Flowers"
        heroImage="https://images.unsplash.com/photo-1520763185298-1b434c919102?w=1200"
        type="flowers"
        categories={[
          "All",
          "Roses",
          "Lilies",
          "Sunflowers",
          "Mixed",
          "Orchids",
        ]}
      />
    </>
  );
};

export default Flowers;
