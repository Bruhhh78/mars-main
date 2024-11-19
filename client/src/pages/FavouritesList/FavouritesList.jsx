// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import useFavourites from "../hooks/useFavourites";
// import useProductDetails from "../hooks/useProductDetails";
// import { Spinner } from "react-bootstrap"; // Using Bootstrap's spinner for loading state

// const FavoriteList = () => {
//   const { data: favoriteIds, isLoading: loadingFavorites, isError: favoriteError } = useFavourites();

//   if (loadingFavorites) return <Spinner animation="border" />;  // Show loading spinner
//   if (favoriteError) return <p>Error loading favorites</p>;  // Show error if loading favorites fails

//   // If no favorites found, display "Nothing Here"
//   if (!favoriteIds || favoriteIds.length === 0) {
//     return <h2 className="text-center text-2xl text-gray-500 m-5 p-4">No Favourite Product :(</h2>;
//   }

//   return (
//     <div className="favorite-list container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {favoriteIds.map((productId) => (
//           <ProductCard key={productId} productId={productId} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const ProductCard = ({ productId }) => {
//   const { data: product, isLoading, isError } = useProductDetails(productId);

//   if (isLoading) return <Spinner animation="border" />;  // Show loading spinner while fetching product
//   if (isError || !product) return <p>Product not found</p>;  // Show error if product is not found

//   return (
//     <div className="card bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
//       <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
//       <div className="card-body p-4">
//         <h5 className="text-xl font-semibold text-gray-800">{product.name}</h5>
//         <p className="text-sm text-gray-600 mt-1">Category: {product.category}</p>
//         <div className="mt-2">
//           <strong className="text-gray-800">Specs:</strong>
//           <ul className="list-none space-y-1 text-gray-700">
//             {Object.entries(product.specs).map(([key, value]) => (
//               <li key={key}>
//                 <strong>{key}:</strong> {value}
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* "Get More Details" Button */}
//         <div className="mt-4">
//           <Link
//             to={`/product/${product.id}`}
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
//           >
//             Get More Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FavoriteList;
