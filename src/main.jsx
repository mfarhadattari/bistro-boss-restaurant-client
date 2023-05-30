import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";
import QueryProvider from "./providers/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryProvider>
          <div className="max-w-7xl mx-auto">
            <RouterProvider router={Routes}></RouterProvider>
          </div>
        </QueryProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
