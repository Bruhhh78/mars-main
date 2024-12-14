import React from "react";

const ProductDropdown = ({ products, onSelect }) => {
  const handleChange = (event) => {
    const selectedProduct = products.find(
      (product) => product.id === Number(event.target.value)
    );
    onSelect(selectedProduct);
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <select
        className="w-full h-10 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        onChange={handleChange}
      >
        <option value="">Select a product</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductDropdown;
