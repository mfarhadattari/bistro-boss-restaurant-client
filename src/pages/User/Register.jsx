import { Link } from "react-router-dom";
import img from "../../assets/others/authentication.png";
const Register = () => {
  return (
    <section className="hero min-h-screen bg-authentication-img p-10">
      <div className="hero-content flex-col lg:flex-row-reverse bg-authentication-img shadow-login py-5">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm">
          <h1 className="text-center text-[#151515] text-4xl font-semibold">
            Sign Up
          </h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#444444] text-xl font-medium">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Type Here"
                className="input input-bordered"
              />
            </div>

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

            <div className="form-control mt-6">
              <button className="btn bg-[#D1A054] border-0">Sign Up</button>
            </div>
            <p className="text-[#D1A054] text-center mt-5">
              Already registered? Go to <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
