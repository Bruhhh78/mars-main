import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "https://mars-healthcare.vercel.app/api",
});

// Helper Function to Handle API and Response and Errors
const handleResponse = (response) => {
  if (response.status >= 400) {
    throw response.data; //throw an error for bad rsponses
  }
  return response.data;
};

// Get Property by Category

export const getProductByCategory = async (category) => {
  try {
    const response = await api.get(`/product/category/${category}`, {
      timeout: 10 * 1000,
    });
    return handleResponse(response);
  } catch (error) {
    toast.error("Something Went Wrong While Fetching Products...");
    throw error;
  }
};

// Get Property By Id

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/product/${id}`, {
      timeout: 10 * 1000,
    });
    return handleResponse(response);
  } catch (error) {
    toast.error("Something Went Wrong While Fetching Product...");
    throw error;
  }
};

// Function to create a user

export const createUser = async (email, token) => {
  try {
    await api.post(
      `/user/register`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something Went Wroong While Creating a User...");
    throw error;
  }
};

// Booking The Visit
export const bookVisit = async (date, productId, email, token) => {
  try {
    await api.post(
      `/user/bookvisit/${productId}`,
      {
        email,
        id: productId,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

// Canceling A Booking
export const removeBooking = async (id, email, token) => {
  try {
    await api.post(
      `/user/cancelbooking/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Someting went wrong, please try Again");
    throw error;
  }
};

// Adding it to Favourites
export const toFav = async(pid,email,token)=>{
  try{
    await api.post(
      `/user/toFav/${pid}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }catch(error){
    toast.error("Someting went wrong, please try Again");
    throw error;
  }
}