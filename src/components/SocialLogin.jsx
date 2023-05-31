import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { socialSignIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  /* -----------------------------------------------------------
  !---------------------- Redirect -------------------- */
  const location = useLocation();
  const from = location.state?.from || "/";
  const navigate = useNavigate();

  /* -----------------------------------------------------------
  !---------------------- Social Sign In Handler -------------------- */
  const handelSocialSignIn = (provider) => {
    socialSignIn(provider)
      .then(({ user }) => {
        console.log(user);
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            displayName: user.displayName,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (
              data.insertedId ||
              data.alreadyExist ||
              data.modifiedCount > 0
            ) {
              Swal.fire({
                title: "Success",
                icon: "success",
                text: "Successfully Register! Please Login",
                showConfirmButton: true,
                confirmButtonColor: "green",
                confirmButtonText: "Ok",
              }).then(() => {
                navigate(from, { replace: true });
              });
            }
          });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          icon: "error",
          confirmButtonColor: "red",
          html: `
            <p class="capitalize">
              ${error.message.split("/")[1].slice(0, -2).split("-").join(" ")}
            </p>`,
        });
      });
  };

  return (
    <div className="space-y-3 p-5">
      <div className="text-center text-xl">Or sign in with</div>
      <div className="flex gap-5 items-center justify-center">
        <button className="btn btn-circle btn-outline text-2xl">
          <FaFacebookF></FaFacebookF>
        </button>
        <button
          className="btn btn-circle btn-outline text-2xl"
          onClick={() => handelSocialSignIn(googleProvider)}
        >
          <FaGoogle></FaGoogle>
        </button>
        <button
          className="btn btn-circle btn-outline text-2xl"
          onClick={() => handelSocialSignIn(githubProvider)}
        >
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
