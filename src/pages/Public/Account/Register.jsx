import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import img from "../../../assets/others/authentication.png";
import useAuthContext from "../../../hooks/useAuthContext";
import { useState } from "react";
import SuccessAlert from "../../../components/Message/SuccessAlert";
import FirebaseErrorAlert from "../../../components/Message/FirebaseErrorAlert";
import SetTitle from "../../../components/SetTitle";
import ErrorMessage from "../../../components/Message/ErrorMessage";
import LoadingBtn from "../../../components/Buttons/LoadingBtn";
import SocialLogin from "./SocialLogin";

const Register = () => {
  //! AuthContext
  const { createUser, logoutUser, updateUserInfo } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // TODO: Image Uploading System

  //! react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* --------------------------------------------------------------
  ! ------------------------- Sign Up Handler ------------------ */
  const onSubmit = (data) => {
    setLoading(true);
    createUser(data.email, data.password)
      .then(({ user }) => {
        updateUserInfo(data.name, data.photoURL);
        fetch("https://mfarhad-bistro-boss-restaurant.vercel.app/create-users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            displayName: data.name,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            if (data.insertedId || data.alreadyExist) {
              SuccessAlert("Successfully Register! Please Login").then(() => {
                logoutUser();
                navigate("/login");
              });
            }
          });
      })
      .catch((error) => {
        setLoading(false);
        FirebaseErrorAlert(error.message);
      });
  };

  return (
    <section className="hero min-h-screen bg-authentication-img p-10">
      <SetTitle title="Register - Bistro Boos Restaurant"></SetTitle>
      <div className="w-[800px] hero-content flex-col lg:flex-row-reverse bg-authentication-img shadow-login py-5">
        <div className="text-center w-full">
          <img src={img} alt="" className="w-full" />
        </div>
        <div className="card  w-full">
          <h1 className="text-center text-[#151515] text-4xl font-semibold">
            Sign Up
          </h1>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#444444] text-xl font-medium">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <ErrorMessage message="Name is required"></ErrorMessage>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#444444] text-xl font-medium">
                  Photo URL
                </span>
              </label>
              <input
                type="url"
                placeholder="Enter Photo URL"
                name="photoURL"
                className="input input-bordered"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL && (
                <ErrorMessage message="Photo URL is required"></ErrorMessage>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#444444] text-xl font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <ErrorMessage message="Email is required"></ErrorMessage>
              )}
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
                name="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 6,
                  pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s])/,
                })}
              />
              {errors.password?.type === "required" && (
                <ErrorMessage message="Password is required"></ErrorMessage>
              )}
              {errors.password?.type === "minLength" && (
                <ErrorMessage message="Password must be 6 character"></ErrorMessage>
              )}
              {errors.password?.type === "maxLength" && (
                <ErrorMessage message="Password max 20 character"></ErrorMessage>
              )}
              {errors.password?.type === "pattern" && (
                <ErrorMessage message="Password must have one uppercase, one lowercase, one number and one special character "></ErrorMessage>
              )}
            </div>

            <div className="form-control mt-6">
              <LoadingBtn
                type="submit"
                className="btn bg-[#D1A054] border-0"
                loading={loading}
              >
                Sign Up
              </LoadingBtn>
            </div>
            <p className="text-[#D1A054] text-center mt-5">
              Already registered?{" "}
              <Link className="underline underline-offset-4" to="/login">
                Go to Login
              </Link>
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </section>
  );
};

export default Register;
