import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider/AuthProvider";

const Navbar = () => {

  const {user, logOut} =  useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () =>{
    logOut()
    .then(() =>{
      alert('logout successfully')
    })
    .catch(error =>{
      console.log(error);
    })
    navigate('/')
  }

    const navbar = <>
    
        <div className="flex flex-col lg:flex-row gap-2">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            {/* <li><NavLink to="/services">Services</NavLink></li> */}
            {/* <li><NavLink to="/blogs">Blog</NavLink></li> */}
            {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
            {
              user?.email ? 
              <>
              <li><NavLink to="/bookings">My Bookings</NavLink></li>
              <li> <button onClick={handleLogout}>Logout</button> </li>

              </>
               
              :
              <li><NavLink to="/login">Login</NavLink></li>
            }
        </div>
    </>
  return (
    <div className="navbar bg-base-100 h-44">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbar}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navbar}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn bg-transparent border-1 border-yellow-600">Appointment</Link>
      </div>
    </div>
  );
};

export default Navbar;
