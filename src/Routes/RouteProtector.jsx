import { useContext } from "react";
import { AuthContext } from "./../providers/AuthProvider";
import Loader from "./../components/Loader";
import { Navigate, useLocation } from "react-router-dom";

const RouteProtector = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="mt-40">
        <Loader></Loader>
      </div>
    );
  }
  if (user) {
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
