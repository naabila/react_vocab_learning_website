import React, { useContext, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../utils/AuthContextProvider';
import { toast } from 'react-toastify';

function Login() {
  const {emailLogin,changePassword}=useContext(AuthContext);
  const emailRef=useRef();
  const navigate=useNavigate();
  const location=useLocation();
 
  //login fn
  const handleEmailLogin=(e)=>{
    e.preventDefault();
      const email=e.target.email.value;
      const password=e.target.password.value;
      //email login function
      emailLogin(email,password)
      .then(res=>{
        e.target.reset()
        toast.success("Login successfull");
        navigate(location?.state?location.state:"/")
      })
      .catch((err)=>{
          toast.error("error login to website")
      })

  }

  //forget password
const handleForgetPassword=()=>{
const email= emailRef.current.value;
changePassword(email)
.then(res=>{
toast.success("password reset email sent")
})
.catch(err=>{
  toast.error("error sending password reset email")
})
}



  return (
    <div className="container mx-auto">
         <div className="animate__animated animate__fadeIn flex items-center justify-center min-h-screen bg-lightBlue/10">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-deepBlue">
          Login your account
        </h2>
        <form onSubmit={handleEmailLogin} className="mt-4">
          {/* Email Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold text-deepBlue">Email address</span>
            </label>
            <input
              type="email"
              name='email'
              ref={emailRef}
              placeholder="Enter your email address"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold text-deepBlue">Password</span>
            </label>
            <input
              type="password"
              name='password'
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>
          {/* forgot password */}
          <Link onClick={handleForgetPassword}  className="text-lightBlue text-sm">
             Forgot password?
            </Link>
          {/* Login Button */}
          <button className="btn bg-lightBlue text-white w-full mt-4 hover:bg-deepBlue text-xl">Login</button>

          {/* Register Link */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Don’t Have An Account?{" "}
            <Link to="/register" className="text-red-500 font-semibold">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login