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

const Home = () => {
  return (
    <>
      <Hero />
      <CategorySection />
      <PromoSection />
      <FeaturedCollection />
      <OfferBox />
      <BestSellingCombos />
      <USB_Box />
      <BestSellingCakes />
      <Testimonials />
      <FinalBanner />
    </>
  );
};

export default Home;
