import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, children }) => {
  return (
    <li className="text-xl font-medium">
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
