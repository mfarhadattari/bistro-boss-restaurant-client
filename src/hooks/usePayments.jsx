import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";
import useAuthContext from "./useAuthContext";

const usePayments = () => {
  const { axiosSecure } = useSecureAxios();
  const { authUser } = useAuthContext();

  const {
    data: payments = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure(
        `/admin/payment-info?email=${authUser.email}`
      );
      return res.data;
    },
  });

  return { payments, refetch, isLoading };
};

export default usePayments;
