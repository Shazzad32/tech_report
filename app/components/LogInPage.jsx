"use client";
import { useState } from "react";

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-2xl font-bold text-green-600">
          LOGIN PAGE
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-500" />
              Remember me
            </label>
            <a href="#" className="text-green-600 hover:underline  ml-2">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-green-600 py-2.5 text-white font-semibold shadow-lg transition duration-200 hover:bg-green-700 hover:shadow-xl"
          >
            Sign In
          </button>
        </form>
        <div className="my-6 flex items-center justify-center">
          <div className="h-px w-1/4 bg-gray-300"></div>
          <p className="mx-2 text-gray-500">or</p>
          <div className="h-px w-1/4 bg-gray-300"></div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?
          <a href="#" className="text-green-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
