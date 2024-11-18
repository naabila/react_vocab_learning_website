import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaGlobeAsia } from "react-icons/fa";
import Button from './Button';
function Header() {

  const links=<>
    <NavLink className={({isActive})=>isActive?"text-lightBlue":"text-deepBlue"} to='/'>Home</NavLink>
    <NavLink className={({isActive})=>isActive?"text-lightBlue":"text-deepBlue"} to='/about'>About</NavLink>
    <NavLink className={({isActive})=>isActive?"text-lightBlue":"text-deepBlue"} to='/lesson'>Let's Learn</NavLink>
    <NavLink className={({isActive})=>isActive?"text-lightBlue":"text-deepBlue"} to='/tutorials'>Tutorial</NavLink>
    <NavLink className={({isActive})=>isActive?"text-lightBlue":"text-deepBlue"} to='/profile'>My Profile</NavLink>
  </>
  return (
    <>
      <div className="container mx-auto">
      <div className="navbar h-[100px] bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-5 text-deepBlue text-xl">
        {links}
      </ul>
    </div>
    <Link to='/' className="px-3 flex items-center gap-2 font-bold text-lightBlue text-3xl"><FaGlobeAsia /> Lingo Bingo</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5 text-deepBlue text-xl">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Button btnText="Login" />
  </div>
</div>
      </div>
    </>
  )
}

export default Header