import Hero from "../Components/Hero";
import CategorySection from "../Components/CategorySection";
import PromoSection from "../Components/PromoSection";
import FeaturedCollection from "../Components/FeaturedCollection";
import OfferBox from "../Components/OfferBox";
import BestSellingCombos from "../Components/BestSellingCombos";
import USB_Box from "../Components/USB_Box";
import BestSellingCakes from "../Components/BestSellingCakes";
import Testimonials from "../Components/Testimonials";
import FinalBanner from "../Components/FinalBanner";
import GiftsCollection from "../Components/GiftsCollection";
import PlantsCollection from "../Components/PlantsCollection";
import SEO from "../Components/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="BloomBasket | Fresh Flowers, Cakes & Gifts"
        description="Order fresh flowers, delicious cakes and thoughtful gifts with same day delivery."
      />

      <Hero />
      <CategorySection />
      <PromoSection />
      <FeaturedCollection />
      <OfferBox />
      <BestSellingCombos />
      <PlantsCollection />
      <USB_Box />
      <BestSellingCakes />
      <GiftsCollection />
      <Testimonials />
      <FinalBanner />
    </>
  );
};

export default Home;
