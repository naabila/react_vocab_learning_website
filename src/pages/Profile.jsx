import React, { useContext } from 'react'
import PageBanner from '../components/PageBanner'
import SectionHeader from '../components/SectionHeader'
import { AuthContext } from '../utils/AuthContextProvider'
import { useNavigate } from 'react-router-dom';

function Profile() {
  const{user}=useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto">
        <PageBanner text="Profile" />
       <div className='mt-16'>
       <SectionHeader preHeading='profile' heading='User Profile' subHeading={`Hello ${user.displayName} Welcome to the website`} />
      </div>
      {/* profile Info */}
      <div className="max-w-md my-10 mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center">
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-gray-600">Email: {user.email}</p>
        <p className="text-gray-600">User Name: {user.displayName}</p>
        <button
          onClick={() => navigate("/update-profile")}
          className="mt-4 bg-lightBlue text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Profile
        </button>
      </div>
    </div>
      {/* profile Info */}

      </div>
    </>
  )
}

export default Profile