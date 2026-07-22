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
import AnnouncementBar from "../Components/AnnouncementBar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Wishlist from "../Pages/Wishlist";
import Auth from "../Pages/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import ProtectedAdmin from "../Components/ProtectedAdmin";

const AppRoutes = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/flowers" element={<Flowers />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/combos" element={<Combos />} />
        <Route path="/plants" element={<Plants />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/:type/:slug" element={<ProductDetails />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/admin"
          element={
            <ProtectedAdmin>
              <AdminDashboard />
            </ProtectedAdmin>
          }
        />
      </Routes>
      <Footer />

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
