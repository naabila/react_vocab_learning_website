import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../utils/firebase.config";
import { toast } from 'react-toastify';
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const[user,setUser]=useState(null);
  // Signup with email
  const emailSignup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

//forget password
  // Sign up with Google
  const googleLogin=(provider)=>{
    return signInWithPopup(auth,provider)
  }
  // Login with email
  const emailLogin=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password);
  }
  // Auth observer
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
   setUser(currentUser);
   console.log(user)
    });
    return ()=>{
      return unsubscribe()
    }
  },[])

  // Logout
  const logoutUser = () => {
    return signOut(auth)
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  // Update profile

  const authInfo = {
    emailSignup,
    googleLogin,
    emailLogin,
    user,
    setUser,
    logoutUser
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
