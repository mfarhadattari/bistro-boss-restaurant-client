import { FaBars } from "react-icons/fa";
import NavigationLink from "../../components/NavigationLink";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Avatar from "../../components/Avatar";
import CartIcon from "../../components/CartIcon";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  const navOptions = (
    <>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/menu">Menu</NavigationLink>
      <NavigationLink to="/shop">Shop</NavigationLink>
      <NavigationLink to="/dashboard/">Dashboard</NavigationLink>
      <CartIcon></CartIcon>
      {user ? (
        <Avatar></Avatar>
      ) : (
        <NavigationLink to="/login">Login</NavigationLink>
      )}
    </>
  );
  return (
    <nav className="navbar fixed z-50 bg-black bg-opacity-50 text-white max-w-7xl px-10 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars></FaBars>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <div className="font-bold">
          <h1 className="text-3xl">BISTRO BOOS </h1>
          <h3 className="text-2xl tracking-[0.31em]">Restaurant</h3>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
