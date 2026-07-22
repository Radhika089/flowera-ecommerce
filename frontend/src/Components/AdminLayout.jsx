import {
  LayoutDashboard,
  Package,
  PlusSquare,
  Users,
  LogOut,
  Flower2,
} from "lucide-react";

import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { logout } from "../api/user.api";

const AdminLayout = () => {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  const navItem =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200";

  return (
    <div className="min-h-screen bg-[#fafafa] flex">
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-8 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-pink-100 p-3 rounded-2xl">
              <Flower2 className="text-pink-600" size={26} />
            </div>

            <div>
              <h1 className="text-2xl font-playfair font-bold text-gray-800">
                BloomBasket
              </h1>

              <p className="text-sm text-gray-500">Admin Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-5 space-y-2">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `${navItem} ${
                isActive
                  ? "bg-pink-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`
            }>
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `${navItem} ${
                isActive
                  ? "bg-pink-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`
            }>
            <Package size={20} />
            Products
          </NavLink>

          <NavLink
            to="/admin/products/add"
            className={({ isActive }) =>
              `${navItem} ${
                isActive
                  ? "bg-pink-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`
            }>
            <PlusSquare size={20} />
            Add Product
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `${navItem} ${
                isActive
                  ? "bg-pink-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
              }`
            }>
            <Users size={20} />
            Users
          </NavLink>
        </nav>

        <div className="p-5 border-t">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
