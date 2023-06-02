import Swal from "sweetalert2";
import useAuthContext from "../hooks/useAuthContext";

const Avatar = () => {
  const { authUser, logoutUser } = useAuthContext();
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
