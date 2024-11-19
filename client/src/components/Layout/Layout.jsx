// import React, { useContext, useEffect } from "react"; 
import React from "react";
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
// import { useAuth0 } from "@auth0/auth0-react";
// import UserDetailContext from "../../context/UserDetailContext.js";
// import { createUser } from "../../utils/api.js";
// import useFavourites from "../../pages/hooks/useFavourites.jsx";
// import useBookings from "../../pages/hooks/useBookings.jsx";

const Layout = () => {
  // Hooks for favorites and bookings
  // useFavourites();
  // useBookings();

  // Auth0 hook to get authentication info
  // const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  // const { setUserDetails } = useContext(UserDetailContext);

  // useEffect(() => {
  //   const getTokenAndRegister = async () => {
  //     try {
        // Get access token silently (no popup)
        // const token = await getAccessTokenSilently({
        //   authorizationParams: {
        //     audience: import.meta.env.VITE_AUTH0_AUDIENCE_MAIN,
        //     scope: "openid profile email",
        //   },
        // });

        // Store token in localStorage and update user context
        // localStorage.setItem("access_token", token);
        // setUserDetails((prev) => ({ ...prev, token }));

        // Register the user if email exists
      //   if (user.email) {
      //     await createUser(user.email, token);
      //   }
      // } catch (error) {
      //   console.log("Error Registering a User", error);
        // Handle silent authentication failure, if any
    //     if (error.message.includes('Login required')) {
    //       console.log("User needs to log in again.");
    //       window.location.href = "/login"; // Redirect to login page
    //     }
    //   }
    // };

    // Only attempt token retrieval if the user is authenticated
  //   if (isAuthenticated) {
  //     getTokenAndRegister();
  //   }
  // }, [isAuthenticated, user?.email, getAccessTokenSilently, setUserDetails]);

  return (
    <>
      <div>
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
