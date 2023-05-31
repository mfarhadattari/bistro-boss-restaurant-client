import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="space-y-3 p-5">
      <div className="text-center text-xl">Or sign in with</div>
      <div className="flex gap-5 items-center justify-center">
        <button className="btn btn-circle btn-outline text-2xl">
          <FaFacebookF></FaFacebookF>
        </button>
        <button className="btn btn-circle btn-outline text-2xl">
          <FaGoogle></FaGoogle>
        </button>
        <button className="btn btn-circle btn-outline text-2xl">
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
