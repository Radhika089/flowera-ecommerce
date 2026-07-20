import React from "react";
import Navbar from "./Components/Navbar";
import AnnouncementBar from "./Components/AnnouncementBar";
import Hero from "./Components/Hero";
import CategorySection from "./Components/CategorySection";
import PromoSection from "./Components/PromoSection";
import FeaturedCollection from "./Components/FeaturedCollection";
import OfferBox from "./Components/OfferBox";
import BestSellingCombos from "./Components/BestSellingCombos";
import USB_Box from "./Components/USB_Box";
import BestSellingCakes from "./Components/BestSellingCakes";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
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
      <Footer />
    </div>
  );
};

export default App;
