import ProductListing from "../Components/ProductListing";
import SEO from "../Components/SEO";

const Cakes = () => {
  return (
    <>
      <SEO
        title="Cakes | BloomBasket"
        description="Delicious birthday cakes, anniversary cakes and celebration cakes delivered fresh."
      />
      <ProductListing
        title="Delicious Cakes"
        subtitle="Freshly baked cakes for birthdays and celebrations."
        buttonText="Shop Cakes"
        heroImage="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200"
        type="cakes"
        categories={[
          "All",
          "Chocolate",
          "Vanilla",
          "Red Velvet",
          "Fruit",
          "Premium",
        ]}
      />
    </>
  );
};

export default Cakes;
