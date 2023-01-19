import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "/home",
  },
  {
    id: 2,
    name: "All Products",
    link: "/all-products",
  },
];

const TopNav = () => {
  // const user = null;
  const user = { _id: 123 };

  const navMenu = navLinks.map((el) => (
    <li key={el.id}>
      <NavLink
        className={({ isActive }) => (isActive ? "bg-base-200" : undefined)}
        to={el.link}
      >
        {el.name}
      </NavLink>
    </li>
  ));

  return (
    <div className="navbar bg-base-100">
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
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <span className="hidden md:block"> Winter Fashion</span>
          <span className="block md:hidden">WF</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
      <div className="navbar-end">
        {!user?._id && (
          <Link to="/login" className="btn btn-ghost">
            Get Login
          </Link>
        )}
        {user?._id && (
          <Fragment>
            <Link to={`${user?._id}/cart`} className="mr-4">
              <div className="indicator">
                <span className="indicator-item badge badge-secondary">0</span>
                <BsCart4 className="text-3xl" />
              </div>
            </Link>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="User" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={`/${user?._id}/orders`} className="justify-center">
                    Orders
                  </Link>
                </li>
                <li>
                  <button className="btn btn-ghost">Logout</button>
                </li>
              </ul>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default TopNav;
