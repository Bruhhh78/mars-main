import axios from "axios";
import dayjs from "dayjs";
import {toast} from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

// Helper Function to Handle API and Response and Errors
const handleResponse = (response) => {
  if (response.status >= 400) {
    throw response.data; //throw an error for bad rsponses
  }
  return response.data;
};

// Get Property by Category

export const getProductByCategory = async (category)=>{
  try {
    const response = await api.get (`/product/category/${category}`,{
        timeout:10 *1000,
    })
    return handleResponse(response)
  } catch (error) {
    toast.error("Something Went Wrong While Fetching Products...")
    throw error;
  }
} 