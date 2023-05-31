import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    refetch: refetchCart,
    isError,
    data: carts = [],
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "bistro-boss-token"
            )}`,
          },
        }
      );
      const data = await res.json();
      if (data.error) {
        console.error(data.message);
        const cart = [];
        return cart;
      }
      return data;
    },
  });

  return { carts, isLoading, refetchCart, isError };
};

export default useCart;
