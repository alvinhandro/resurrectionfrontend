import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] to-[#1a1a2e] text-white relative overflow-hidden">
      {/* Glowing background shapes */}
      <div className="absolute w-[500px] h-[500px] bg-pink-600 rounded-full opacity-20 blur-3xl top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full opacity-20 blur-3xl bottom-[-100px] right-[-100px] animate-pulse"></div>

      {/* Glassmorphism Card */}
      <div className="z-10 backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-10 shadow-[0_0_40px_#00fff7] w-[90%] max-w-md transform transition-all hover:scale-[1.02] hover:shadow-[0_0_60px_#00fff7] duration-300 ease-in-out">
        <h2 className="text-3xl font-bold text-center mb-6 neon-text">
          Welcome Back
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white/70">
              Email
            </label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-3 bg-white/10 text-white placeholder-white/50 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
              placeholder="you@futuristicmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/70">
              Password
            </label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-3 bg-white/10 text-white placeholder-white/50 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-xl font-semibold shadow-lg hover:from-pink-500 hover:to-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_#00fff7]"
          >
            Login
          </button>
        </form>

        <p className="text-center text-white/50 mt-6 text-sm">
          Don't have an account?{" "}
          <span className="text-cyan-400 hover:underline cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
// Login.jsx - frontend placeholder
