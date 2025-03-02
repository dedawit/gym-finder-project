import React, { useState } from "react";
import { NavBar } from "../navbar/NavBar";
import Footer from "../footer/Footer";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill out both fields.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    // Simulate login logic
    setTimeout(() => {
      setLoading(false);
      // Simulate successful login
      alert("Logged in successfully!");
      // In a real app, you'd redirect here or update global state
    }, 1000);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <NavBar />
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

          {errorMessage && (
            <div className="text-red-500 text-center mb-4">{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full  bg-red-600  text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500 hover:underline">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
