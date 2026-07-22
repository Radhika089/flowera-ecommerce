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
import Plants from "../Pages/Plants";
import Wishlist from "../Pages/Wishlist";
import Auth from "../Pages/Auth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomerLayout from "../Components/CustomerLayout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<CustomerLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/flowers" element={<Flowers />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/combos" element={<Combos />} />
          <Route path="/plants" element={<Plants />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/:type/:slug" element={<ProductDetails />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default AppRoutes;
