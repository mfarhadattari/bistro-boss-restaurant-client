import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "./../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import FirebaseErrorAlert from "../components/Message/FirebaseErrorAlert";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* --------------------------------------------------------
  !------------------ CREATE USER --------------------------- */
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* ----------------------------------------------------------
!------------------- LOGIN USER ---------------------------- */
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* -------------------------------------------------------------
  !-------------------- LOGIN WITH GOOGLE ---------------------- */
  const socialSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  /* --------------------------------------------------------------
  !------------------- LOG OUT USER ------------------------------- */
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  /* ----------------------------------------------------------------
  !------------------   UPDATE USER ---------------------------- */
  const updateUserInfo = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  /* ----------------------------------------------------------------
  !-------------------- GET LOG USER ---------------------- */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setAuthUser(currentUser);
        axios
          .post("https://mfarhad-bistro-boss-restaurant.vercel.app/jwt", {
            email: currentUser.email,
          })
          .then((res) => {
            if (res.data.token) {
              localStorage.setItem("bistro-boss-token", res.data.token);
            }
          })
          .catch((error) => {
            FirebaseErrorAlert(error.message);
          });
        setLoading(false);
      } else {
        setAuthUser(null);
        localStorage.removeItem("bistro-boss-token");
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    authUser,
    loading,
    createUser,
    loginUser,
    logoutUser,
    updateUserInfo,
    socialSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
