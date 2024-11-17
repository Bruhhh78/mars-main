import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: "https://mars-main-frontend.vercel.app",
      }}
      audience={import.meta.env.VITE_AUTH0_AUDIENCE}
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
