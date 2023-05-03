import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import profileImage from ''
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../Providers/AuthProvider";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="bg-gradient-to-r from-[#070d31] to-[#9873FF] mt-0 text-white">
      <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="inline-flex items-center">
            <span className="ml-2 text-xl font-bold tracking-wide text-white">
              Food BuZz
            </span>
          </Link>

          {/* Nav Items Section */}
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
                title="Home"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
                title="Blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <div className="hidden lg:flex">
            <div
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              {user ? (
                <>
                  <div className="flex items-center gap-2">
                    
                      <div className="w-8  rounded-full">
                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="rounded-full " />
                      </div>
                    
                    <button
                      onClick={handleLogout}
                      className="me-3 mb-5 btn-primary"
                      variant="light"
                    >
                      Log Out
                    </button>
                  </div>
                </>
              ) : (
                <Link to="/login">
                  <button className="btn-primary hidden lg:flex ">Login</button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3BottomRightIcon className="w-5 text-gray-600" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Food BuZz
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/" className="default">
                          Home
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <button className="btn-primary mt-1 text-lg ">
                          Login
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
