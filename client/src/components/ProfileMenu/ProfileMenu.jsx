import React from "react";
import { Avatar, Button, Menu, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ user, logout }) => {
  // console.log("UserData:", user);
  const navigate = useNavigate();
  
  return (
    <Menu>
      <Menu.Target>
        <Button
          style={{
            backgroundColor: "transparent",
            borderRadius: "1rem",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            src={user.picture} // Replace this with the correct avatar URL or image
            alt={user.given_name}
            size="md"
            style={{ marginRight: "8px" }}
          />
          <Text sx={{ color: "black !important" }}>{user.name}</Text>
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item 
          onClick={() => navigate("./favourites", { replace: true })} 
          sx={{ color: "black !important" }} // Apply !important to ensure the style
        >
          Favourites
        </Menu.Item>

        <Menu.Item 
          onClick={() => navigate("./bookings", { replace: true })}
          sx={{ color: "black !important" }} // Apply !important to ensure the style
        >
          Bookings
        </Menu.Item>

        <Menu.Item
          onClick={() => {
            localStorage.clear();
            logout();
          }}
          sx={{ color: "black !important" }} // Apply !important to ensure the style
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
