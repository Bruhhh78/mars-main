import React, { useContext, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import useAuthCheck from "../../pages/hooks/useAuthCheck";
import { checkFavourites, updateFavourites } from "../../utils/common";
import UserDetailContext from "../../context/UserDetailContext";
import { toFav } from "../../utils/api";

const AddToFavourites = ({ id }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  const {
    userDetails: { favourites, token },
    setUserDetails,
  } = useContext(UserDetailContext);

  useEffect(() => {
    setIsFavourite(checkFavourites(id, favourites) === "#fa3e5f");
  }, [favourites]);

  const { mutate } = useMutation({
    mutationFn: () => toFav(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        favourites: updateFavourites(id, prev.favourites),
      }));
      setIsFavourite(true);
      toast.success("Added to favourites!", { position: "bottom-right" });
    },
  });

  const handleLike = () => {
    if (validateLogin()) {
      mutate();
    }
  };

  return (
    <div
      className={`text-center w-full py-2 px-4 rounded-3xl font-bold text-sm sm:text-lg ${
        isFavourite
          ? "bg-purple-500 text-white"
          : "bg-gray-200 text-gray-800 dark:bg-blue-500 dark:text-white"
      } hover:bg-blue-300 cursor-pointer`}
      onClick={(e) => {
        e.stopPropagation();
        handleLike();
      }}
    >
      {isFavourite ? "Added to Favourites" : "Add To Favourites"}
    </div>
  );
};

export default AddToFavourites;
