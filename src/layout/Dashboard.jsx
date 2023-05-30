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

const Dashboard = () => {
  const slideBarOptions = (
    <>
      <NavigationLink to="/dashboard/">
        <FaHome></FaHome> USER HOME
      </NavigationLink>
      <NavigationLink to="reservation">
        <FaCalendar></FaCalendar> RESERVATION
      </NavigationLink>
      <NavigationLink to="payment-history">
        <FaWallet></FaWallet> PAYMENT HISTORY
      </NavigationLink>
      <NavigationLink to="my-cart">
        <FaShoppingCart></FaShoppingCart> MY CART
      </NavigationLink>
      <NavigationLink to="add-review">
        <FaCommentDots></FaCommentDots> ADD REVIEW
      </NavigationLink>
      <NavigationLink to="my-booking">
        <FaCalendarCheck></FaCalendarCheck> MY BOOKING
      </NavigationLink>

      <div className="divider after:bg-white before:bg-white"></div>

      <NavigationLink to="/">
        <FaHome></FaHome> HOME
      </NavigationLink>
      <NavigationLink to="/menu">
        <FaBars></FaBars> MENU
      </NavigationLink>
      <NavigationLink to="/shop">
        <FaShoppingBag></FaShoppingBag> SHOP
      </NavigationLink>
    </>
  );
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* ---------------  Page content here -------------- */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open Sidebar
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-base-content ">
          {/* Sidebar content here */}
          {slideBarOptions}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
