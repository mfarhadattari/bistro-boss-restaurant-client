import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import useAdmin from "../hooks/useAdmin";
import useAuthContext from "../hooks/useAuthContext";


const AdminRoute = ({ children }) => {
  const { authUser, loading } = useAuthContext();
  const { isAdmin, adminLoading } = useAdmin();

  if (loading || adminLoading) {
    return (
      <div className="mt-40">
        <Loader></Loader>
      </div>
    );
  }
  if (authUser && isAdmin) {
    return children;
  } else {
    return <Navigate to="/"></Navigate>;
  }
};

export default AdminRoute;
