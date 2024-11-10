import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFavourites,
  toFav,
} from "../controllers/userController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/register", jwtCheck, createUser);
router.post("/bookvisit/:id", bookVisit);
router.get("/allBookings", getAllBookings);
router.post("/cancelBooking/:id", cancelBooking);
router.post("/toFav/:pid", toFav);
router.get("/allFavs", getAllFavourites);

export { router as userRoute };
