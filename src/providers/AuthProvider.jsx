import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./../firebase/firebase.config";
import { createContext, useState } from "react";

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

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
