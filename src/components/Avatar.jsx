import useAuthContext from "../hooks/useAuthContext";
import SuccessAlert from "./Message/SuccessAlert";
import FirebaseErrorAlert from "./Message/FirebaseErrorAlert";
import ConfirmationAlert from "./Message/ConfirmationAlert";

const Avatar = () => {
  const { authUser, logoutUser } = useAuthContext();
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
      <div className="avatar">
        <div className="w-10 h-10 ring ring-primary ring-offset-base-100 ring-offset-2 rounded-full bg-slate-400">
          {authUser?.photoURL ? (
            <img src={authUser.photoURL} />
          ) : (
            <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Avatar;
