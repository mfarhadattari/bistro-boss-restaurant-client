import axios from "axios";
import useAuthContext from "./useAuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// !create instance
//   TODO: Have to change base URL
const axiosSecure = axios.create({
  baseURL: "https://mfarhad-bistro-boss-restaurant.vercel.app",
});

const useSecureAxios = () => {
  const { logoutUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    // interceptor added to include user token
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("bistro-boss-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // added interceptor to handel response
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logoutUser();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logoutUser, axiosSecure, navigate]);

  return { axiosSecure };
};

export default useSecureAxios;
