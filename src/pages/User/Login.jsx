import { Link } from "react-router-dom";
import img from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  validateCaptcha,
  LoadCanvasTemplate,
} from "react-simple-captcha";

import { useContext, useEffect, useState } from "react";
import SetTitle from "../../components/SetTitle";
import LoadingBtn from "./../../components/Buttons/LoadingBtn";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [loginDisabled, setLoginDisabled] = useState(true);

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
        form.reset();
        Swal.fire({
          title: "Success",
          icon: "success",
          text: "Successfully Login",
          confirmButtonColor: "green",
        });
      })
      .catch((error) => {
        setLoading(false);
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
                disabled={loginDisabled}
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
        </div>
      </div>
    </section>
  );
};

export default Login;
