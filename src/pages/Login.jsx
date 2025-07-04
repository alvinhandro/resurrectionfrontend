import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] to-[#1a1a2e] text-white relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute w-[500px] h-[500px] bg-pink-600 rounded-full opacity-20 blur-3xl top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full opacity-20 blur-3xl bottom-[-100px] right-[-100px] animate-pulse"></div>


      {/* 3D Glass Login Card */}
      <motion.div
        whileHover={{ rotateY: 6, rotateX: 4 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="z-10 backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-10 shadow-[0_0_40px_#00fff7] w-[90%] max-w-md cursor-default"
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 neon-text">Welcome Back</h2>

        {/* Social Login Buttons */}
        <div className="space-y-3 mb-6">
          <SocialButton
            icon={<FcGoogle className="text-xl" />}
            label="Continue with Google"
            color="white"
          />
          <SocialButton
            icon={<FaFacebook className="text-xl text-blue-600" />}
            label="Continue with Facebook"
            color="white"
          />
          <SocialButton
            icon={<FaXTwitter className="text-xl text-white" />}
            label="Continue with X"
            color="white"
          />
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div className="h-px bg-white/20 flex-1" />
          <span className="text-xs text-white/40">or login with email</span>
          <div className="h-px bg-white/20 flex-1" />
        </div>

        {/* Email/Password Login Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white/70">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-3 bg-white/10 text-white placeholder-white/50 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="you@future.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/70">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-3 bg-white/10 text-white placeholder-white/50 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="••••••••"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px #00fff7",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-xl font-semibold shadow-lg transition-all duration-300"
          >
            Login
          </motion.button>
        </form>

        <p className="text-center text-white/50 mt-6 text-sm">
          Don’t have an account?{" "}
          <span className="text-cyan-400 hover:underline cursor-pointer">Sign Up</span>
        </p>
      </motion.div>
    </div>
  );
};
