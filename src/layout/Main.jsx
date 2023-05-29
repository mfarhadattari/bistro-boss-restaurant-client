import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        {noHeaderFooter || <NavigationBar></NavigationBar>}
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
