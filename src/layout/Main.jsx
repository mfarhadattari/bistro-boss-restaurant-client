import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
