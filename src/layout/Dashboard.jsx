import { Outlet } from "react-router-dom";
import NavigationLink from "./../components/NavigationLink";
import {
  FaBars,
  FaCalendar,
  FaHome,
  FaShoppingBag,
  FaWallet,
} from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import Heading from "../components/Heading";

const Dashboard = () => {
  const slideBarOptions = (
    <>
      <NavigationLink to="/dashboard/">
        <span className="flex items-center gap-2 text-lg">
          <FaHome></FaHome> USER HOME
        </span>
      </NavigationLink>
      <NavigationLink to="reservation">
        <span className="flex items-center gap-2 text-lg">
          <FaCalendar></FaCalendar> RESERVATION
        </span>
      </NavigationLink>
      <NavigationLink to="payment-history">
        <span className="flex items-center gap-2 text-lg">
          <FaWallet></FaWallet> PAYMENT HISTORY
        </span>
      </NavigationLink>
      <NavigationLink to="my-cart">
        <span className="flex items-center gap-2">
          <FaShoppingCart></FaShoppingCart> MY CART
        </span>
      </NavigationLink>
      <NavigationLink to="add-review">
        <span className="flex items-center gap-2 text-lg">
          <FaCommentDots></FaCommentDots> ADD REVIEW
        </span>
      </NavigationLink>
      <NavigationLink to="my-booking">
        <span className="flex items-center gap-2 text-lg">
          <FaCalendarCheck></FaCalendarCheck> MY BOOKING
        </span>
      </NavigationLink>

      <div className="divider after:bg-white before:bg-white"></div>

      <NavigationLink to="/">
        <span className="flex items-center gap-2 text-lg">
          <FaHome></FaHome> HOME
        </span>
      </NavigationLink>

      <NavigationLink to="/menu">
        <span className="flex items-center gap-2 text-lg">
          <FaBars></FaBars> MENU
        </span>
      </NavigationLink>
      <NavigationLink to="/shop">
        <span className="flex items-center gap-2 text-lg">
          <FaShoppingBag></FaShoppingBag> SHOP
        </span>
      </NavigationLink>
    </>
  );
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-100">
        <label
          htmlFor="my-drawer-2"
          className="btn border-0 bg-[#D1A054] drawer-button lg:hidden absolute right-5 top-5"
        >
          Open Menu
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="bg-[#D1A054] text-base-content text-center">
          <div className="my-5">
            <Heading></Heading>
          </div>
          <ul className="space-y-2 p-4 w-80 ">{slideBarOptions}</ul>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Close Menu
          </label>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
