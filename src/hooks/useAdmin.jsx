import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";
import useSecureAxios from "./useSecureAxios";
const useAdmin = () => {
  const { axiosSecure } = useSecureAxios();
  const { user } = useAuthContext();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    axiosSecure.get(`/user/admin?email=${user?.email}`).then(({ data }) => {
      setIsAdmin(data.isAdmin);
    });
  }, [axiosSecure, user]);

  return { isAdmin };
};

export default useAdmin;
