import { Routes, Route } from "react-router-dom";

import AdminLayout from "../Components/AdminLayout";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import AdminRoute from "../Components/Auth/AdminRoute";
import Products from "../Pages/Admin/Products";
import AddProduct from "../Pages/Admin/AddProduct";
import EditProduct from "../Pages/Admin/EditProduct";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }>
        <Route index element={<AdminDashboard />} />

        <Route path="products" element={<Products />} />
        <Route path="products/edit/:id" element={<EditProduct />} />
        <Route path="products/add" element={<AddProduct />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
