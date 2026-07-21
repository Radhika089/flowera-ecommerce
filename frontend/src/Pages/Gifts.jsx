import ProductListing from "../Components/ProductListing";
import gifts from "../data/gifts";

const Gifts = () => {
  return (
    <ProductListing
      title="Perfect Gifts"
      subtitle="Find thoughtful gifts for every special moment."
      buttonText="Shop Gifts"
      heroImage="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200"
      products={gifts}
      categories={["All", "Soft Toys", "Chocolate", "Personalized", "Hampers"]}
    />
  );
};

export default Gifts;
