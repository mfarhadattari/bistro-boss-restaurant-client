import { createBrowserRouter } from "react-router-dom";
import RouteProtector from "./RouteProtector";
import AdminRoute from "./AdminRoute";

import Main from "../layout/Main";
import Dashboard from "../layout/Dashboard";

import Home from "../pages/Public/Home/Home";
import Menu from "../pages/Public/Menu/Menu";
import Shop from "../pages/Public/Shop/Shop";
import Login from "../pages/Public/Account/Login";
import Register from "../pages/Public/Account/Register";

import UserHome from "../pages/User/UserHome";
import Carts from "../pages/User/Carts";
import Payment from "../pages/User/Payment";

import AdminHome from "../pages/Admin/AdminHome";
import AllUsers from "../pages/Admin/AllUsers";
import AddItems from "../pages/Admin/AddItems";
import ManageAllItems from "../pages/Admin/ManageAllItems";

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
        path: "user-home",
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
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
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
