// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBH-ynihJw1gxcmNo0h6WNB2HXMVAa5tnc",
  authDomain: "assignment-9-545d6.firebaseapp.com",
  projectId: "assignment-9-545d6",
  storageBucket: "assignment-9-545d6.firebasestorage.app",
  messagingSenderId: "713894473348",
  appId: "1:713894473348:web:1905d278346894a9ef5cd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;