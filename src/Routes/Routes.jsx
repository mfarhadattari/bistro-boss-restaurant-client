import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import Dashboard from "../layout/Dashboard";
import RouteProtector from "./RouteProtector";
import UserHome from "../pages/Dashboard/User/UserHome";
import Carts from "../pages/Dashboard/User/Carts";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/Dashboard/Admin/AddItems";
import ManageAllItems from "../pages/Dashboard/Admin/ManageAllItems";
import Payment from "../pages/Dashboard/User/Payment";

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
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "add-item",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoute>
            <ManageAllItems></ManageAllItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default Routes;
