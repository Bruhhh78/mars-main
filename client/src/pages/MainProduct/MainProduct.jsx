import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/api";
import { toast } from "react-toastify";
import { PuffLoader } from "react-spinners";

const MainProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productData = await getProductById(id);
        setProduct(productData.product); // Assuming response structure is { product: { ... } }
        console.log("Fetched Product Data:", productData.product);
      } catch (err) {
        setError(err);
        toast.error("Failed to load product data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="flexColCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  // Error state
  if (error)
    return (
      <div style={{ marginTop: "9rem" }}>
        <h2 className="text-center text-red-500 text-2xl sm:text-3xl md:text-4xl">
          Error While Fetching Products :(
        </h2>
      </div>
    );

  // Helper function to format date
  const formatDate = (date) => {
    return date ? new Date(date).toLocaleDateString() : "N/A";
  };

  // Helper function to render specifications
  const renderSpecs = (specs) => {
    if (!specs) return <li>No specifications available.</li>;

    return Object.entries(specs).map(([key, value]) => (
      <li key={key}>
        <strong>{key}:</strong> {value}
      </li>
    ));
  };

  return (
    <div className="m-4 sm:m-8 md:m-16">
      <p className="text-gray-600 text-center p-5 dark:text-gray-500 text-2xl sm:text-3xl md:text-4xl mb-10">
        Category: {product?.category || "No category available"}
      </p>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Product Image */}
          <div className="md:flex-1 px-4 mb-4">
            <div className="rounded-3xl mb-4">
              <img
                className="w-full rounded-3xl h-full object-contain"
                src={product?.image || "https://via.placeholder.com/460"}
                alt={product?.name || "Product Image"}
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="md:flex-1 px-4 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold text-blue-500 mb-2">
              {product?.name || "Product Name"}
            </h2>

            <div className="flex justify-center mb-4">
              <div>
                <span className="font-bold text-xl sm:text-2xl md:text-2xl text-gray-700 dark:text-gray-300">
                  Updated At:
                </span>
                <span className="text-gray-600 text-xl sm:text-2xl md:text-2xl dark:text-gray-300">
                  {formatDate(product?.updatedAt)}
                </span>
              </div>
            </div>

            <div className="w-full mb-4 items-center justify-center">
              <span className="font-bold text-lg sm:text-xl md:text-2xl text-blue-300">
                Specifications:
              </span>
              <ul className="text-gray-600 text-sm sm:text-base mt-2 space-y-2">
                {renderSpecs(product?.specs)}
              </ul>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row -mx-2 mb-4">
          <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
            <button className="w-full bg-gray-900 dark:bg-blue-500 text-white py-2 px-4 rounded-3xl font-bold hover:bg-blue-300 dark:hover:bg-blue-400 text-sm sm:text-lg">
              Book Visit
            </button>
          </div>
          <div className="w-full sm:w-1/2 px-2">
            <button className="w-full bg-gray-200 dark:bg-blue-500 text-gray-800 dark:text-white py-2 px-4 rounded-3xl font-bold hover:bg-blue-300 dark:hover:bg-blue-400 text-sm sm:text-lg">
              Add to Favourites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
