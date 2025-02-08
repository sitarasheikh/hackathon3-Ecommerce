"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function CheckoutPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Checkout details:", formData);
      router.push("/payment");
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="w-full max-w-md bg-black backdrop-blur-lg p-6 md:p-8 shadow-xl rounded-2xl border border-white/20">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          Checkout Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "email", "address", "city", "postalCode"].map((field, index) => (
            <input
              key={index}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
              onChange={handleChange}
              required
              className="w-full p-3 bg-white/20 text-white placeholder-gray-300 rounded-lg border border-gray-500/40 focus:border-blue-500 focus:ring focus:ring-blue-400 outline-none transition-all duration-200"
            />
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium text-lg transition-all flex items-center justify-center space-x-2"
            disabled={loading}
          >
            {loading ? "Processing..." : "Proceed to Payment"}
          </button>
        </form>

        {/* <button
          type="button"
          onClick={() => router.push("/checkout")}
          className="mt-4 w-full flex items-center justify-center bg-white/20 text-white font-medium py-3 rounded-lg transition-all hover:bg-white/30"
        >
          Go to Checkout <FaArrowRight className="ml-2" />
        </button> */}
      </div>
    </div>
  );
}