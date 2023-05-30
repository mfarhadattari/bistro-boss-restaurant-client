import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import Dashboard from "../layout/Dashboard";
import UserHome from "../pages/User/Dashboard/UserHome";
import Carts from "../pages/User/Dashboard/Carts";
import RouteProtector from "./RouteProtector";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <RouteProtector>
        <Dashboard></Dashboard>
      </RouteProtector>
    ),
    children: [
      {
        path: "/dashboard/",
        element: <UserHome></UserHome>,
      },
      {
        path: "my-cart",
        element: <Carts></Carts>,
      },
    ],
  },
]);
export default Routes;
