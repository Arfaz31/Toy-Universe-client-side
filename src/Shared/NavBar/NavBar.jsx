import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/ironman.png";
import { AuthContext } from "../../Provider/AuthProvider";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/allToy">All Toys</NavLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <NavLink to="/addToy">Add A Toy</NavLink>
          </li>
          <li>
            <NavLink to="/myToy">My Toy</NavLink>
          </li>

          {user && (
            <div className="flex justify-center items-center "> 
              <li className="">
                <button onClick={handleLogOut}>Logout</button>
              </li>
              <div className="">
                
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user.displayName}
                >
                  <img
                    src={user.photoURL}
                    alt=""
                    className=" rounded-full object-cover w-8 h-8"
                  />
                </a>
                <Tooltip id="my-tooltip" />
              </div>
            </div>
          )}
        </>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-slate-100 lg:px-6 lg:py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img src={logo} alt="" className="" />
          <Link className="text-gray-700 normal-case lg:text-4xl text-2xl font-bold ">
            HERO TOYS
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex navbar-end p-2">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      {/* <div className="navbar-end">

      </div> */}
    </div>
  );
};

export default NavBar;
