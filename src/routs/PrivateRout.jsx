import React, { useContext } from 'react'
import { AuthContext } from '../utils/AuthContextProvider'
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';

function PrivateRout({children}) {
  const location=useLocation();
  const{user,loading}=useContext(AuthContext);
  if(loading){
    return <Loader />
  }
    if(user){
        return children;
    }
  return (
    <Navigate state={location.pathname} to="/login"></Navigate>
  )
}

export default PrivateRout