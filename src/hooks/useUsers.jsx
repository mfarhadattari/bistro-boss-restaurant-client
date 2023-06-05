import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";
import useAuthContext from "./useAuthContext";

const useUsers = () => {
  const { axiosSecure } = useSecureAxios();
  const { authUser } = useAuthContext();

  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure(`/admin/all-users?email=${authUser.email}`);
      return res.data;
    },
  });

  return { users, refetch, isLoading };
};

export default useUsers;
