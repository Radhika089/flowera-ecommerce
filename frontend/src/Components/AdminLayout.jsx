import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg p-6">
        <h1 className="text-2xl font-playfair font-bold text-pink-600">
          🌸 BloomBasket
        </h1>

        <p className="text-sm text-gray-500 mt-1">Admin Dashboard</p>

        <nav className="mt-10 space-y-4">
          <Link to="/admin" className="block hover:text-pink-600">
            Dashboard
          </Link>

          <Link to="/admin/products" className="block hover:text-pink-600">
            Products
          </Link>

          <Link to="/admin/products/add" className="block hover:text-pink-600">
            Add Product
          </Link>

          <Link to="/admin/orders" className="block hover:text-pink-600">
            Orders
          </Link>

          <Link to="/admin/users" className="block hover:text-pink-600">
            Users
          </Link>
        </nav>
      </aside>

      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
