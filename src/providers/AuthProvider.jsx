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

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
        setUser(currentUser);
        axios
          .post("http://localhost:5000/jwt", {
            email: currentUser.email,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.token) {
              localStorage.setItem("bistro-boss-token", res.data.token);
            }
          })
          .catch((error) => {
            console.error(error);
          });
        setLoading(false);
      } else {
        setUser(null);
        localStorage.removeItem("bistro-boss-token");
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
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
