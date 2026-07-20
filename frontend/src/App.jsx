import React from "react";
import Navbar from "./Components/Navbar";
import AnnouncementBar from "./Components/AnnouncementBar";
import Hero from "./Components/Hero";
import CategorySection from "./Components/CategorySection";
import PromoSection from "./Components/PromoSection";
import FeaturedCollection from "./Components/FeaturedCollection";
import OfferBox from "./Components/OfferBox";
import BestSellingCombos from "./Components/BestSellingCombos";

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
    </div>
  );
};

export default App;
