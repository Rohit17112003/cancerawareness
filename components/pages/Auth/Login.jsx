"use client";
import Input from "@/components/atoms/Input";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with Email: ${email} and Password: ${password}`);
  };

  return (
    <div className="flex min-h-screen flex-col rounded-lg px-4 py-10 md:flex-row md:px-50 md:py-10">
      {/* Left side image with themed background */}
      <div className="w-full md:w-1/2">
        <img
          src="/image/login.png"
          alt="Cancer Awareness"
          className="rounded-md object-cover md:rounded-none md:rounded-l-md"
        />
      </div>

      {/* Right side form with gradient and highlight */}
      <div className="flex flex-1 items-center justify-center rounded-md bg-gradient-to-br from-white to-pink-100 pt-5 md:p-8 md:pt-0">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md rounded-lg bg-white p-8 shadow-2xl"
        >
          <h2 className="mb-6 text-3xl font-bold text-pink-600">
            Welcome Back
          </h2>
          <p className="mb-6 text-sm text-gray-500">
            Empowering Hope. Join our fight against cancer.
          </p>

         <div  className="relative mb-6 font-medium text-gray-700">
           <Input
          lable="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="mb-4 w-full rounded border border-gray-300 p-3 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
         </div>

          <div className="relative mb-6 font-medium text-gray-700">
            <Input
            lable=" Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full rounded border border-gray-300 p-3 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-8 right-3 text-gray-600 hover:text-gray-900"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <i className="ri-eye-off-line text-xl"></i>
              ) : (
                <i className="ri-eye-line text-xl"></i>
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded bg-pink-600 py-3 font-semibold text-white transition hover:bg-pink-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
