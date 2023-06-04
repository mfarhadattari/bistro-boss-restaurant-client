import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from './../pages/Public/Shared/NavigationBar';
import Footer from './../pages/Public/Shared/Footer';



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
