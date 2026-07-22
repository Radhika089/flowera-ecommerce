import { useEffect, useState } from "react";
import { Search, Users, ShieldCheck, Trash2, UserCog } from "lucide-react";

import { getUsers, updateUserRole, deleteUser } from "../../api/user.api";

import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";

const User = () => {
  const { user: currentUser } = useAuth();

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchUsers() {
    try {
      const { data } = await getUsers();
      console.log("API DATA:", data);

      setUsers(data.users);
    } catch (error) {
      toast.error("Failed to load users");
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function handleRole(id, currentRole) {
    const newRole = currentRole === "admin" ? "user" : "admin";

    const confirmRole = window.confirm(
      `Are you sure you want to change this user's role to "${newRole}"?`,
    );

    if (!confirmRole) return;

    try {
      await updateUserRole(id, newRole);

      toast.success(`User is now ${newRole}`);

      fetchUsers();
    } catch (error) {
      toast.error("Role update failed");
    }
  }

  async function handleDelete(id) {
    if (id === currentUser._id) {
      toast.error("You can't delete yourself");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?",
    );

    if (!confirmDelete) return;

    try {
      await deleteUser(id);

      toast.success("User deleted");

      fetchUsers();
    } catch (error) {
      toast.error("Delete failed");
    }
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );
  console.log("USERS STATE:", users);
  return (
    <div>
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-4xl font-playfair font-bold text-gray-800">
          Users
        </h1>

        <p className="text-gray-500 mt-2">
          Manage BloomBasket customers and admins
        </p>
      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-5">
          <div className="bg-pink-100 p-4 rounded-xl">
            <Users className="text-pink-600" />
          </div>

          <div>
            <p className="text-gray-500">Total Users</p>

            <h2 className="text-3xl font-bold">{users.length}</h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-5">
          <div className="bg-green-100 p-4 rounded-xl">
            <ShieldCheck className="text-green-600" />
          </div>

          <div>
            <p className="text-gray-500">Admins</p>

            <h2 className="text-3xl font-bold">
              {users.filter((u) => u.role === "admin").length}
            </h2>
          </div>
        </div>
      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl shadow p-4 flex items-center gap-3 mb-6">
        <Search className="text-gray-400" />

        <input
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none w-full"
        />
      </div>

      {/* Table */}

      <div className="bg-white rounded-3xl shadow overflow-hidden">
        <div className="hidden md:grid grid-cols-5 p-5 border-b font-semibold text-gray-500">
          <span>Name</span>
          <span>Email</span>
          <span>Role</span>
          <span>Change Role</span>
          <span>Action</span>
        </div>

        {filteredUsers.map((user) => (
          <div
            key={user._id}
            className="grid md:grid-cols-5 gap-5 items-center p-5 border-b hover:bg-pink-50 transition">
            <div>
              <h3 className="font-semibold">{user.name}</h3>
            </div>

            <p className="text-gray-600 break-all">{user.email}</p>

            <span
              className={`px-3 py-1 rounded-full text-sm w-fit ${
                user.role === "admin"
                  ? "bg-green-100 text-green-600"
                  : "bg-blue-100 text-blue-600"
              }`}>
              {user.role}
            </span>

            <button
              onClick={() => handleRole(user._id, user.role)}
              className="text-blue-600 hover:bg-blue-50 p-3 rounded-xl w-fit">
              <UserCog />
            </button>

            <button
              onClick={() => handleDelete(user._id)}
              className="text-red-500 hover:bg-red-50 p-3 rounded-xl w-fit">
              <Trash2 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
