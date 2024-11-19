import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../utils/firebase.config";
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  // Signup with email
  const emailSignup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Placeholder for other authentication functions
  // Sign up with Google
  const googleLogin=(provider)=>{
    return signInWithPopup(auth,provider)
  }
  // Login with email
  // Auth observer
  // Logout
  // Update profile

  const authInfo = {
    emailSignup,
    googleLogin
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
