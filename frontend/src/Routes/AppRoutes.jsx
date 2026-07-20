import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Flowers from "../Pages/Flowers";
import Cakes from "../Pages/Cakes";
import Gifts from "../Pages/Gifts";
import Combos from "../Pages/Combos";
import Cart from "../Pages/Cart";
import ProductDetails from "../Pages/ProductDetails";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/flowers" element={<Flowers />} />
      <Route path="/cakes" element={<Cakes />} />
      <Route path="/gifts" element={<Gifts />} />
      <Route path="/combos" element={<Combos />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
