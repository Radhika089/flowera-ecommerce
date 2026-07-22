import ProductListing from "../Components/ProductListing";
import SEO from "../Components/SEO";

const Gifts = () => {
  return (
    <>
      <SEO
        title="Gifts | BloomBasket"
        description="Find thoughtful gifts for birthdays, anniversaries and celebrations."
      />
      <ProductListing
        title="Perfect Gifts"
        subtitle="Find thoughtful gifts for every special moment."
        buttonText="Shop Gifts"
        heroImage="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200"
        type="gifts"
        categories={[
          "All",
          "Soft Toys",
          "Chocolate",
          "Personalized",
          "Hampers",
        ]}
      />
    </>
  );
};

export default Gifts;
