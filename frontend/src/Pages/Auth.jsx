import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Auth = () => {
  const [tab, setTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-[#fff8f8] flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden md:flex flex-col items-center justify-center bg-pink-50 p-12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3468/3468377.png"
            alt="Flower"
            className="w-40"
          />

          <h2 className="text-4xl font-playfair font-bold mt-8">
            Welcome Back
          </h2>

          <p className="text-gray-600 text-center mt-5 leading-8">
            Login to your BloomBasket account and enjoy fresh flowers, delicious
            cakes and beautiful gifts.
          </p>
        </div>

        {/* Right */}
        <div className="p-8 md:p-12">
          {/* Tabs */}
          <div className="flex justify-around border-b mb-10">
            <button
              onClick={() => setTab("login")}
              className={`pb-4 font-semibold transition ${
                tab === "login"
                  ? "text-pink-600 border-b-2 border-pink-600"
                  : "text-gray-400"
              }`}>
              Login
            </button>

            <button
              onClick={() => setTab("register")}
              className={`pb-4 font-semibold transition ${
                tab === "register"
                  ? "text-pink-600 border-b-2 border-pink-600"
                  : "text-gray-400"
              }`}>
              Register
            </button>
          </div>

          {/* LOGIN */}
          {tab === "login" && (
            <form className="space-y-5">
              <div>
                <label className="font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full mt-2 border rounded-lg p-3 outline-none focus:border-pink-500"
                />
              </div>

              <div className="relative">
                <label className="font-medium">Password</label>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full mt-2 border rounded-lg p-3 pr-12 outline-none focus:border-pink-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-12">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg transition">
                Login
              </button>
            </form>
          )}

          {/* REGISTER */}
          {tab === "register" && (
            <form className="space-y-5">
              <div>
                <label className="font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full mt-2 border rounded-lg p-3 outline-none focus:border-pink-500"
                />
              </div>

              <div>
                <label className="font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full mt-2 border rounded-lg p-3 outline-none focus:border-pink-500"
                />
              </div>

              <div>
                <label className="font-medium">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="w-full mt-2 border rounded-lg p-3 outline-none focus:border-pink-500"
                />
              </div>

              <div className="relative">
                <label className="font-medium">Password</label>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  className="w-full mt-2 border rounded-lg p-3 pr-12 outline-none focus:border-pink-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-12">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div>
                <label className="font-medium">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full mt-2 border rounded-lg p-3 outline-none focus:border-pink-500"
                />
              </div>

              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg transition">
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Auth;
