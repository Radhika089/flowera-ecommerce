import ProductListing from "../Components/ProductListing";
import cakes from "../data/cakes";

const Cakes = () => {
  return (
    <ProductListing
      title="Delicious Cakes"
      subtitle="Freshly baked cakes for birthdays and celebrations."
      buttonText="Shop Cakes"
      heroImage="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200"
      products={cakes}
      categories={[
        "All",
        "Chocolate",
        "Vanilla",
        "Red Velvet",
        "Fruit",
        "Premium",
      ]}
    />
  );
};

export default Cakes;
