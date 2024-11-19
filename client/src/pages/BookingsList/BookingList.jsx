// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import useBookings from "../hooks/useBookings";
// import { Spinner } from "react-bootstrap"; // Using Bootstrap's spinner for loading state
// import useProductDetailsForBookings from "../hooks/useProductDetailsForBookings";

// const BookingList = () => {
//   const { data: bookings, isLoading: loadingBookings, isError: bookingError } = useBookings();

//   if (loadingBookings) return <Spinner animation="border" />;
//   if (bookingError) return <p>Error loading bookings</p>;

//   return (
//     <div className="booking-list container mx-auto ">
//       {bookings && bookings.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 py-8">
//           {bookings.map((booking) => (
//             <ProductCard key={booking.id} productId={booking.id} />
//           ))}
//         </div>
//       ) : (
//         <div>
//           <h2 className="text-center text-2xl text-gray-500 m-5 p-4">No Bookings Found :(</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// const ProductCard = ({ productId }) => {
//   const { data: product, isLoading, isError } = useProductDetailsForBookings(productId);

//   if (isLoading) return <Spinner animation="border" />;
//   if (isError || !product) return <p>Product not found</p>;

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
//         <div className="mt-4">
//           <Link
//             to={`/product/${productId}`}
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
//           >
//             Get More Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingList;
