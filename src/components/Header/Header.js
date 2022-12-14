import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/avatar-2.png";
import logo from "../../assets/img/logo.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);

  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {user?.email && (
        <>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/myreview">My reviews</Link>
          </li>
          <li>
            <Link to="/addservice">Add Service</Link>
          </li>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        toast.success("Logout Successfully");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      className="navbar bg-base-100 sticky top-0 z-10 px-6 lg:px-20"
      data-theme="halloween"
    >
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
            {navMenu}
          </ul>
        </div>
        <Link
          to="/"
          className="flex items-center text-yellow-500 font-semibold text-2xl"
        >
          <img className="w-10 h-10 mr-1" src={logo} alt="" /> Foodie
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navMenu}</ul>
      </div>

      <div className="navbar-end">
        {user?.email ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} alt="" />
                  ) : (
                    <img
                      className="w-16 h-16 object-cover rounded-full border"
                      src={avatar}
                      alt=""
                    />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>
                    <Link>Logout</Link>
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to="/login" className="btn btn-warning">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
