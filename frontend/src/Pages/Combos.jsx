import ProductListing from "../Components/ProductListing";
import SEO from "../Components/SEO";

const Combos = () => {
  return (
    <>
      <SEO
        title="Flower Combos | BloomBasket"
        description="Flowers, cakes and gifts together for every celebration."
      />
      <ProductListing
        title="Flower Combos"
        subtitle="Flowers, cakes and gifts together for every celebration."
        buttonText="Shop Combos"
        heroImage="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1200"
        type="combos"
        categories={["All", "Flowers + Cake", "Flowers + Teddy", "Luxury"]}
      />
    </>
  );
};

export default Combos;
