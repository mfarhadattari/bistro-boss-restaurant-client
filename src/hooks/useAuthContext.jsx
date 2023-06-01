import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};

export default useAuthContext;
