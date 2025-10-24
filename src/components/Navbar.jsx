import { NavLink } from "react-router-dom";
import bookLogo from "../assets/book.ico";

const Navbar = () => {
  const links = (
    <div className="flex gap-6">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/listedBooks">
        Listed Books
      </NavLink>
      <NavLink to="/dashboard">
        Dashboard
      </NavLink>
    </div>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm mb-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg font-medium"
          >
            {links}
          </ul>
        </div>
        <img src={bookLogo} className="w-8"></img>
        <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {links}
        </ul>
      </div>
      <div className="hidden sm:flex navbar-end gap-5">
        <a className="btn btn-primary">Sign Up</a>
        <a className="btn btn-secondary">Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;
