import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/superhero.png'

const NavBar = () => {
    const navItems = 
    <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/allToys">All Toys</NavLink></li>
    <li><NavLink to="/addToy">Add A Toy</NavLink></li>
    <li><NavLink to="/myToys">My Toys</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/blogs">Blogs</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-200 lg:px-6 lg:py-4">
        <div className="navbar-start">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul> 
          </div>
          <div className='flex'>
            <img src={logo} alt="" className='w-12'/>
          <Link className="btn btn-ghost normal-case text-2xl font-bold">HERO TOYS</Link>
          </div>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">user</a>
        </div>
      </div>
    );
};

export default NavBar;