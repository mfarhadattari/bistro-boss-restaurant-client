import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useSecureAxios from "./useSecureAxios";

const useCart = () => {
  const { user, loading } = useAuthContext();
  const { axiosSecure } = useSecureAxios();

  const {
    isLoading,
    refetch: refetchCart,
    isError,
    data: carts = [],
  } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return { carts, isLoading, refetchCart, isError };
};

export default useCart;
