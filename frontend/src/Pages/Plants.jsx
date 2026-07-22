import ProductListing from "../Components/ProductListing";
import SEO from "../Components/SEO";
import plants from "../data/plants";

const Plants = () => {
  return (
    <>
      <SEO
        title="Indoor Plants | BloomBasket"
        description="Buy beautiful indoor plants and green gifts online."
      />
      <ProductListing
        title="Indoor Plants"
        subtitle="Bring freshness and greenery into your home."
        buttonText="Shop Plants"
        heroImage="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1200"
        type="plants"
        categories={["All", "Indoor", "Outdoor", "Succulents", "Bonsai"]}
      />
    </>
  );
};

export default Plants;
