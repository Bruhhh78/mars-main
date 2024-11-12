import React, { useContext, useEffect } from "react";
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext.js";
import { createUser } from "../../utils/api.js";

const Layout = () => {
  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  useEffect(() => {
    const getTokenAndRegister = async () => {
      try {
        const token = await getAccessTokenWithPopup({
          authorizationParams: {
            audience: import.meta.env.VITE_AUTH0_AUDIENCE_MAIN,
            scope: "openid profile email",
          },
        });

        localStorage.setItem("access_token", token);
        setUserDetails((prev) => ({ ...prev, token }));
        // console.log("Access_Token: ", token);

        if (user.email) {
          await createUser(user.email, token);
        }
      } catch (error) {
        console.log("Error Registering a User", error);
      }
    };

    if (isAuthenticated) {
      getTokenAndRegister();
    }
  }, [isAuthenticated, user?.email, getAccessTokenWithPopup, setUserDetails]);

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
