import React, { useState } from "react";
import Swal from "sweetalert2";
import { products } from "./dropdownProducts.js";

const Appointment = () => {
  const [result, setResult] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);
    formData.append("product", selectedProduct);

    const handleSuccessAnimation = () => {
      Swal.fire({
        title: "Form Submitted!",
        text: "Your message has been sent successfully. We will contact you soon!",
        icon: "success",
        confirmButtonText: "Close",
      });
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        handleSuccessAnimation();
        setResult("");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("Submission failed, please try again later.");
    }
  };

  return (
    <section className="bg-gray-100 p-6">
      <form
        onSubmit={onSubmit}
        className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6"
      >
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Request a Demo
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Your Name"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Your Email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Your Phone Number"
            name="phone"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Select Product
          </label>
          <select
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a product
            </option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            name="message"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Send Message
        </button>
        {result && (
          <p className="text-sm text-gray-600 mt-2 text-center">{result}</p>
        )}
      </form>
    </section>
  );
};

export default Appointment;
