import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import moment from "moment";

const Footer = () => {
  return (
    <footer className="w-full text-white">
      <div className="flex flex-col md:flex-row justify-center w-full  ">
        <div className="bg-[#1F2937] w-full p-14 text-center">
          <h2 className="text-3xl">CONTACT US</h2>
          <div className="space-y-1 mt-5">
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+880 1234567890</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="bg-[#111827] w-full p-14">
          <h2 className="text-3xl text-center">FOLLOW US</h2>
          <div className="grid grid-flow-col gap-5 justify-center text-3xl mt-5">
            <a>
              <FaFacebookF></FaFacebookF>
            </a>
            <a>
              <FaInstagram></FaInstagram>
            </a>
            <a>
              <FaTwitter></FaTwitter>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black p-5 text-center">
        <p>
          Copyright © {moment().format("YYYY")} - All right reserved by BISTRO
          BOSS RESTAURANT
        </p>
      </div>
    </footer>
  );
};

export default Footer;
