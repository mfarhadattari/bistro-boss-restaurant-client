import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useSecureAxios from "./useSecureAxios";

const useCart = () => {
  const { authUser, loading } = useAuthContext();
  const { axiosSecure } = useSecureAxios();

  const {
    isLoading,
    refetch: refetchCart,
    isError,
    data: carts = [],
  } = useQuery({
    queryKey: ["carts", authUser?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/user/carts?email=${authUser.email}`);
      return res.data;
    },
  });

  return { carts, isLoading, refetchCart, isError };
};

export default useCart;
