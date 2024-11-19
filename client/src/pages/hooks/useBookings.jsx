// import React, { useContext, useEffect, useRef } from "react";
// import { useQuery } from "react-query";
// import { useAuth0 } from "@auth0/auth0-react";
// import { toast } from "react-toastify";
// import UserDetailContext from "../../context/UserDetailContext";
// import { api } from "../../utils/api";

// const useBookings = () => {
//   const { userDetails, setUserDetails } = useContext(UserDetailContext);
//   const queryRef = useRef();
//   const { user } = useAuth0();

//   // Function to get all bookings
//   const getAllBookings = async (email, token) => {
//     if (!token || !email) return;

//     try {
//       // console.log("Sending request to /user/allBookings with email:", email);
//       const res = await api.get(`/user/allBookings`, {
//         params: { email }, // Pass email as a query parameter
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // console.log("Response data:", res.data);

//       // Return the response data directly as it is now an array of bookings
//       return res.data;
//     } catch (e) {
//       console.error("Error fetching bookings:", e);
//       toast.error("Something went wrong while fetching bookings");
//       throw e;
//     }
//   };

//   // Use react-query to fetch data
//   const { data, isLoading, isError, refetch } = useQuery({
//     queryKey: ["allBookings", user?.email],
//     queryFn: () => getAllBookings(user?.email, userDetails?.token),
//     onSuccess: (data) =>
//       setUserDetails((prev) => ({ ...prev, bookings: data })),
//     enabled: Boolean(user && userDetails?.token), // Only enable when user and token are available
//     staleTime: 30000, // Data is considered fresh for 30 seconds
//   });

//   // console.log(data);

//   // Store the refetch function to trigger it when necessary
//   queryRef.current = refetch;

//   // Refetch bookings when token changes
//   useEffect(() => {
//     if (userDetails?.token) {
//       queryRef.current && queryRef.current();
//     }
//   }, [userDetails?.token]);

//   return { data, isError, isLoading, refetch };
// };

// export default useBookings;
