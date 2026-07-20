import AnnouncementBar from "../Components/AnnouncementBar";
import Navbar from "../Components/Navbar";
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
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
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
      <Footer />
    </>
  );
};

export default Home;
