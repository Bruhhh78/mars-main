import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { api } from "../../utils/api";

const useProductDetailsForBookings = (productId) => {
  const { data, isLoading, isError } = useQuery(
    ["productDetails", productId],
    async () => {
      if (!productId) return null;
      const res = await api.get(`/product/${productId}`);
      return res.data.product;
    },
    {
      enabled: !!productId, // Only fetch when productId is available
      onError: () => toast.error("Failed to fetch product details"),
    }
  );

  return { data, isLoading, isError };
};

export default useProductDetailsForBookings;
