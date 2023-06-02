import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  validateCaptcha,
  LoadCanvasTemplate,
} from "react-simple-captcha";

import { useEffect, useState } from "react";
import SetTitle from "../../components/SetTitle";
import LoadingBtn from "./../../components/Buttons/LoadingBtn";
import SocialLogin from "../../components/SocialLogin";
import useAuthContext from "../../hooks/useAuthContext";
import SuccessAlert from "../../components/Message/SuccessAlert";
import FirebaseErrorAlert from "../../components/Message/FirebaseErrorAlert";

const Login = () => {
  const { loginUser } = useAuthContext();

  const [loading, setLoading] = useState(false);
  const [loginDisabled, setLoginDisabled] = useState(true);
  console.log(loginDisabled);

  /* -----------------------------------------------------------
  !---------------------- Redirect -------------------- */
  const location = useLocation();
  const from = location.state?.from || "/";
  const navigate = useNavigate();

  /* -----------------------------------------------------------
  !----------------- GENERATE CAPTCHA -------------- */
  useEffect(() => {
    loadCaptchaEnginge(6);
    setLoginDisabled(true);
  }, []);

  /* --------------------------------------------------------
  !------------------ CAPTCHA VERIFY HANDEL ------------------ */
  const handelCaptcha = (event) => {
    const captcha = event.target.value;
    if (validateCaptcha(captcha, false)) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  };

  /* ----------------------------------------------------------------------
  !----------------- FORM SUBMIT HANDEL -------------------------- */
  const handelLoginSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        setLoading(false);
        setLoginDisabled(true);
        form.reset();
        SuccessAlert("Successfully Login").then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        setLoading(false);
        FirebaseErrorAlert(error.message);
      });
  };

  return (
    <section className="hero min-h-screen bg-authentication-img p-10">
      <SetTitle title="Login - Bistro Boos Restaurant"></SetTitle>

      <div className="hero-content flex-col lg:flex-row bg-authentication-img shadow-login py-5">
        <div className="text-center lg:text-left w-full">
          <img src={img} alt="" />
        </div>
        <div className="card w-full">
          <h1 className="text-center text-[#151515] text-4xl font-semibold">
            Login
          </h1>
          <form className="card-body" onSubmit={handelLoginSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#444444] text-xl font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Type Here"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#444444] text-xl font-medium">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Enter Your Password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#444444] text-xl font-medium">
                  Verify Captcha
                </span>
              </label>
              <LoadCanvasTemplate />
              <input
                type="text"
                placeholder="Enter above text"
                className="input input-bordered"
                onChange={handelCaptcha}
              />
            </div>

            <div className="form-control mt-6">
              <LoadingBtn
                loading={loading}
                className="btn bg-[#D1A054] border-0"
                // disabled={loginDisabled}
                // TODO: Have to login btn disabled conditionally
                disabled={false}
              >
                Login
              </LoadingBtn>
            </div>
            <p className="text-[#D1A054] text-center mt-5">
              New here?{" "}
              <Link className="underline underline-offset-4" to="/register">
                Create an account
              </Link>
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </section>
  );
};

export default Login;
