import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";
import useSecureAxios from "./useSecureAxios";
const useAdmin = () => {
  const { axiosSecure } = useSecureAxios();
  const { authUser } = useAuthContext();
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`/check-admin?email=${authUser?.email}`).then(({ data }) => {
      setIsAdmin(data.isAdmin);
      setAdminLoading(false);
    });
  }, [axiosSecure, authUser]);

  return { isAdmin, adminLoading };
};

export default useAdmin;
