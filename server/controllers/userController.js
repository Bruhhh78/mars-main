import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

// Function to Create a New User

export const createUser = asyncHandler(async (req, res) => {
  console.log("Creating a user...");
  let { email } = req.body;

  const userExists = await prisma.user.findUnique({ where: { email: email } });

  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "User Registered Successfully",
      user: user,
    });
  } else {
    res.status(201).send({ message: "User already Registered" });
  }
});

// Function to Book a Product Visit

export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res
        .status(400)
        .json({ message: "This Product Visit is already booked by you" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      res.send({ message: "Your Product Visit is Booked Successfully" });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

// Function to get all the Bookings

export const getAllBookings = asyncHandler(async (req, res) => {
  const { email } = req.query;

  // Check if email is provided
  if (!email) {
    return res.status(400).send({ message: "Email field is required" });
  }

  try {
    // Fetch user data and their bookedVisits
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });

    // If no bookings found
    if (
      !bookings ||
      !Array.isArray(bookings.bookedVisits) ||
      bookings.bookedVisits.length === 0
    ) {
      return res
        .status(404)
        .send({ message: "No Bookings Found for this User" });
    }

    // Return the bookedVisits data
    res.status(200).send(bookings.bookedVisits);
  } catch (error) {
    console.log("Error Fetching Bookings:", error.message);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

// Function to cancel a specific booking by its ID

export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;

  // Check if email and id are provided
  if (!email || !id) {
    return res
      .status(400)
      .send({ message: "Email and booking ID are required" });
  }

  try {
    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });

    // If user doesn't exist or has no bookings
    if (
      !user ||
      !Array.isArray(user.bookedVisits) ||
      user.bookedVisits.length === 0
    ) {
      return res
        .status(404)
        .send({ message: "No bookings found for this user" });
    }

    // Find the booking to cancel (using booking ID)
    const updatedBookings = user.bookedVisits.filter(
      (booking) => booking.id !== id
    );

    // If the booking doesn't exist
    if (updatedBookings.length === user.bookedVisits.length) {
      return res.status(404).send({ message: "Booking not found" });
    }

    // Update the user's bookedVisits array by removing the cancelled booking
    await prisma.user.update({
      where: { email },
      data: {
        bookedVisits: updatedBookings,
      },
    });

    // Return success response
    res.status(200).send({ message: "Booking cancelled successfully" });
  } catch (error) {
    console.log("Error Cancelling Booking:", error.message);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

// Function to Add a Product in the favourite list of a user

export const toFav = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { pid } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user.favProductID.includes(pid)) {
      const removeUserFavProduct = await prisma.user.update({
        where: { email },
        data: {
          favProductID: {
            set: user.favProductID.filter((id) => id !== pid),
          },
        },
      });
      res.send({
        message: "Removed From Favourites",
        user: removeUserFavProduct,
      });
    } else {
      const newUpdateuserFavProduct = await prisma.user.update({
        where: { email },
        data: {
          favProductID: {
            push: pid,
          },
        },
      });
      res.send({
        message: "Updated Favourite Product",
        user: newUpdateuserFavProduct,
      });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

// Function to get all the favourites list of a user

export const getAllFavourites = async (req, res) => {
  const { email } = req.query; // Use req.query instead of req.body
  try {
    const favProduct = await prisma.user.findUnique({
      where: { email },
      select: { favProductID: true },
    });
    res.send({ message: "Favourites List", favProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

