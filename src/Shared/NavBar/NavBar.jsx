import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/ironman.png'
import { AuthContext } from '../../Provider/AuthProvider';

const NavBar = () => {
  const{user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  }
    const navItems = 
    <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/allToys">All Toys</NavLink></li>    
 {user?.email?
<> 
<li><NavLink to="/addToy">Add A Toy</NavLink></li>
 <li><NavLink to="/myToys">My Toys</NavLink></li>
 <li><button onClick={handleLogOut}>Logout</button></li>
 </>
:
 <li><NavLink to="/login">Login</NavLink></li>
}
    <li><NavLink to="/blog">Blogs</NavLink></li>
    </>

    return (
        <div className="navbar bg-slate-100 lg:px-6 lg:py-4">
        <div className="navbar-start">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul> 
          </div>
          <div className='flex justify-center items-center'>
            <img src={logo} alt="" className=''/>
          <Link className="text-gray-700 normal-case lg:text-4xl text-2xl font-bold ">HERO TOYS</Link>
          </div>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navItems}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-primary">User</button>
        </div>
      </div>
    );
};

export default NavBar;