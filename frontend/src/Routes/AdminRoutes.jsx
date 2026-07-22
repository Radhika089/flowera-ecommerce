import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import AdminRoute from "../Components/Auth/AdminRoute";
import AdminLayout from "../Components/AdminLayout";
import Products from "../Pages/Admin/Products";
import EditProduct from "../Pages/Admin/EditProduct";
import AddProduct from "../Pages/Admin/AddProduct";
import User from "../Pages/Admin/User";

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

        <Route path="products/add" element={<AddProduct />} />

        <Route path="products/edit/:id" element={<EditProduct />} />

        <Route path="users" element={<User />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
