import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import FirebaseErrorAlert from "./Message/FirebaseErrorAlert";
import SuccessAlert from './Message/SuccessAlert';

const SocialLogin = () => {
  const { socialSignIn } = useAuthContext();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  //   const facebookProvider = new FacebookAuthProvider();

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
            if (
              data.insertedId ||
              data.alreadyExist ||
              data.modifiedCount > 0
            ) {
              SuccessAlert("Successfully Login!").then(() => {
                navigate(from, { replace: true });
              });
            }
          });
      })
      .catch((error) => {
        FirebaseErrorAlert(error.message)
      });
  };

  return (
    <div className="space-y-3 p-5">
      <div className="text-center text-xl">Or sign in with</div>
      <div className="flex gap-5 items-center justify-center">
        {/* <button
          className="btn btn-circle btn-outline text-2xl"
          onClick={() => handelSocialSignIn(facebookProvider)}
        >
          <FaFacebookF></FaFacebookF>
        </button> */}
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
