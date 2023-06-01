import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import useAuthContext from "../hooks/useAuthContext";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const { isAdmin, adminLoading } = useAdmin();

  if (loading || adminLoading) {
    return (
      <div className="mt-40">
        <Loader></Loader>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  } else {
    return <Navigate to="/"></Navigate>;
  }
};

export default AdminRoute;
