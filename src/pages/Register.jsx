import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../utils/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";

function Register() {
  const googlePtovider = new GoogleAuthProvider();
  const { emailSignup, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  // Register (Email & Password Signup)
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.userName.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Enter a valid password: at least 6 characters, 1 uppercase, and 1 lowercase letter.");
      return;
    }

    // Email signup
    emailSignup(email, password)
      .then((result) => {
        toast.success("User registered successfully");
        console.log(result.user);
        e.target.reset(); 
        navigate("/"); 
      })
      .catch((err) => {
        toast.error("Error during registration: " + err.message);
        e.target.reset();
      });
  };

  // Google Login
  const googleLoginHandle = () => {
    googleLogin(googlePtovider)
      .then((result) => {
        toast.success("Logged in successfully with Google");
        navigate("/"); 
      })
      .catch((err) => {
        toast.error("Error during Google login: " + err.message);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="animate__animated animate__fadeIn flex items-center justify-center min-h-screen bg-lightBlue/10">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl text-deepBlue font-bold text-center">Register your account</h2>

          {/* Signup Form */}
          <form onSubmit={handleRegister} className="mt-4">
            {/* Name Input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-deepBlue font-semibold">Your Name</span>
              </label>
              <input
                type="text"
                name="userName"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Photo URL Input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold text-deepBlue">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full"
              />
            </div>

            {/* Email Input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold text-deepBlue">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold text-deepBlue">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Register Button */}
            <button className="btn bg-lightBlue text-white w-full mt-4 hover:bg-deepBlue">Register</button>
          </form>

          {/* Google Login Button */}
          <button
            onClick={googleLoginHandle}
            type="button"
            className="btn bg-lightBlue text-white w-full mt-4 hover:bg-deepBlue"
          >
            Sign in with Google
          </button>

          {/* Login Link */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Already Have An Account?{" "}
            <Link to="/login" className="text-lightBlue font-semibold">
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
