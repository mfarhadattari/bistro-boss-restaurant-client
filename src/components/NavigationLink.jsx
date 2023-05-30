import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, children }) => {
  return (
    <li className="text-xl font-medium">
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "underline underline-offset-4" : "")}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
