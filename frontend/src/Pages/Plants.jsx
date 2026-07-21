import ProductListing from "../Components/ProductListing";
import plants from "../data/plants";

const Plants = () => {
  return (
    <ProductListing
      title="Indoor Plants"
      subtitle="Bring freshness and greenery into your home."
      buttonText="Shop Plants"
      heroImage="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1200"
      products={plants}
      categories={["All", "Indoor", "Outdoor", "Succulents", "Bonsai"]}
    />
  );
};

export default Plants;
