import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../utils/AuthContextProvider'
import { toast } from 'react-toastify';

function UpdateProfile() {
  const{manageProfile,setUser}=useContext(AuthContext);
  const navigate=useNavigate();
const location=useLocation();
  //profile update
  const handleProfileUpdate=(e)=>{
    e.preventDefault();
   const name=e.target.name.value;
   const image=e.target.photo.value;
   manageProfile(name,image)
   .then(res=>{
    toast.success("profile updated successfully");
    navigate("/profile");
    e.target.reset()
    

   })
   .catch(err=>{
    toast.error("Error updating profile")
   })
  }
  return (
    <div className="container mx-auto">
         <div className="animate__animated animate__fadeIn flex items-center justify-center min-h-screen bg-lightBlue/10">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-deepBlue">
          Update your Profile
        </h2>
        <form onSubmit={handleProfileUpdate} className="mt-4">
          {/* Email Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold text-deepBlue">Name</span>
            </label>
            <input
              type="text"
              name='name'
              
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold text-deepBlue">Image</span>
            </label>
            <input
              type="text"
              name='photo'
              placeholder="Enter your image"
              className="input input-bordered w-full"
            />
          </div>
        
          {/* Login Button */}
          <button className="btn bg-lightBlue text-white w-full mt-4 hover:bg-deepBlue text-xl">Update</button>

         
        </form>
      </div>
    </div>
    </div>
  )
}

export default UpdateProfile