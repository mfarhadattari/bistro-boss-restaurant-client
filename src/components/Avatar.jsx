import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Avatar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handelLogout = () => {
    Swal.fire({
      icon: "question",
      title: "Warning",
      text: "Are you sure?",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "red",
      cancelButtonText: "No",
      cancelButtonColor: "green",
    }).then((res) => {
      if (res.isConfirmed) {
        logoutUser();
        Swal.fire({
          title: "Success",
          icon: "success",
          text: "Successfully Logout",
          confirmButtonColor: "green",
        });
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
          {user?.photoURL ? (
            <img src={user.photoURL} />
          ) : (
            <img src="https://img.freepik.com/free-icon/user_318-804790.jpg?size=626&ext=jpg&uid=R88597874&ga=GA1.2.1258473558.1680259642&semt=sph" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Avatar;
