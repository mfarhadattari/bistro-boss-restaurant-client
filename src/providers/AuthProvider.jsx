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
      setUser(currentUser);
      setLoading(false);
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
