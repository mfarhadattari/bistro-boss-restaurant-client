import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import Loader from "../components/Loader";

const RouteProtector = ({ children }) => {
  const { authUser, loading } = useAuthContext();
  const location = useLocation();

  if (loading) {
    return (
      <div className="mt-40">
        <Loader></Loader>
      </div>
    );
  }
  if (authUser) {
    return children;
  } else {
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ from: location.pathname }}
      ></Navigate>
    );
  }
};

export default RouteProtector;
