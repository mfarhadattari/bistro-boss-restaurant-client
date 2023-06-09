import { Outlet } from "react-router-dom";
import {
  FaBars,
  FaBook,
  FaCalendar,
  FaHome,
  FaIndent,
  FaShoppingBag,
  FaUsers,
  FaUtensils,
  FaWallet,
  FaShoppingCart,
  FaCalendarCheck,
  FaCommentDots,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import NavigationLink from './../components/NavigationLink';
import CartIcon from './../components/CartIcon';
import Heading from './../components/Heading';

const Dashboard = () => {
  const { isAdmin } = useAdmin();

  const userOption = (
    <>
      <NavigationLink to="/dashboard/user-home">
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
      <div className="w-fit mx-auto">
        <CartIcon></CartIcon>
      </div>
    </>
  );

  const adminOption = (
    <>
      <NavigationLink to="/dashboard/admin-home">
        <span className="flex items-center gap-2 text-lg">
          <FaHome></FaHome> ADMIN HOME
        </span>
      </NavigationLink>
      <NavigationLink to="add-item">
        <span className="flex items-center gap-2 text-lg">
          <FaUtensils></FaUtensils> ADD ITEM
        </span>
      </NavigationLink>
      <NavigationLink to="manage-items">
        <span className="flex items-center gap-2 text-lg">
          <FaIndent></FaIndent> MANAGE ITEMS
        </span>
      </NavigationLink>
      <NavigationLink to="manage-bookings">
        <span className="flex items-center gap-2">
          <FaBook></FaBook> MANAGE BOOKINGS
        </span>
      </NavigationLink>
      <NavigationLink to="all-users">
        <span className="flex items-center gap-2 text-lg">
          <FaUsers></FaUsers> ALL USERS
        </span>
      </NavigationLink>
    </>
  );

  const sharedOption = (
    <>
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
          <ul className="space-y-2 p-4 w-80 ">
            {isAdmin ? adminOption : userOption}

            <div className="divider after:bg-white before:bg-white"></div>

            {sharedOption}
          </ul>
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
