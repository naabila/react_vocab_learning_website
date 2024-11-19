import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="container mx-auto">
         <div className="animate__animated animate__fadeIn flex items-center justify-center min-h-screen bg-lightBlue/10">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-deepBlue">
          Login your account
        </h2>
        <form className="mt-4">
          {/* Email Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold text-deepBlue">Email address</span>
            </label>
            <input
              type="email"
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
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

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