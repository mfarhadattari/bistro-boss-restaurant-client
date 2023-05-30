import { Link } from "react-router-dom";
import img from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  validateCaptcha,
  LoadCanvasTemplate,
} from "react-simple-captcha";

import { useEffect, useState } from "react";
import SetTitle from "../../components/SetTitle";

const Login = () => {
  const [loginDisabled, setLoginDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handelCaptcha = (event) => {
    const captcha = event.target.value;
    if (validateCaptcha(captcha, false)) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
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
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#444444] text-xl font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
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
              <button
                className="btn bg-[#D1A054] border-0"
                disabled={loginDisabled}
              >
                Login
              </button>
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
