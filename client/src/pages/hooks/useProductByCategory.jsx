import { useQuery } from "react-query";
import { getProductByCategory } from "../utils/api";

const useProductByCategory = (category) => {
  const { data, isLoading, isError, refetch } = useQuery(
    ["productByCategory", category], // Pass category as a dependency
    () => getProductByCategory(category),
    { refetchOnWindowFocus: false, enabled: !!category } // Ensure category is defined
  );

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export default useProductByCategory;
