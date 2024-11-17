import { createContext } from "react";

const UserDetailContext = createContext({
  userDetails: {
    favourites: [],
    bookings: [],
    token: null,
  },
  setUserDetails: () => {}, // Placeholder function to avoid undefined errors
});

export default UserDetailContext;
