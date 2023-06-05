import useAuthContext from "../hooks/useAuthContext";
import SuccessAlert from "./Message/SuccessAlert";
import FirebaseErrorAlert from "./Message/FirebaseErrorAlert";
import ConfirmationAlert from "./Message/ConfirmationAlert";
import { Link } from "react-router-dom";
import useAdmin from "./../hooks/useAdmin";

const Avatar = () => {
  const { authUser, logoutUser } = useAuthContext();
  const { isAdmin } = useAdmin();
  const handelLogout = () => {
    ConfirmationAlert("Want to logout?").then((res) => {
      if (res.isConfirmed) {
        logoutUser()
          .then(() => {
            SuccessAlert("Successfully Logout");
          })
          .catch((error) => FirebaseErrorAlert(error.message));
      }
    });
  };

  return (
    <div className="flex items-center">
      <button className="btn btn-ghost" onClick={handelLogout}>
        Logout
      </button>
      <Link
        className="avatar"
        to={isAdmin ? "/dashboard/admin-home" : "/dashboard/user-home"}
      >
        <div className="w-10 h-10 ring ring-primary ring-offset-base-100 ring-offset-2 rounded-full bg-slate-400">
          {authUser?.photoURL ? (
            <img src={authUser.photoURL} />
          ) : (
            <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" />
          )}
        </div>
      </Link>
    </div>
  );
};

export default Avatar;
