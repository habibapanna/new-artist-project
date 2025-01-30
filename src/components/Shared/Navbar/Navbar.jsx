import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Banner from "../../Banner/Banner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const linkClasses = ({ isActive }) =>
    isActive ? "text-amber-500 border-amber-500" : "hover:text-yellow-400";

  // Check if the current route is the home page
  const isHomePage = location.pathname === "/";

  // Conditionally set the navbar background color based on the route
  const navbarStyle = isHomePage
    ? {
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://i.postimg.cc/RZY6bR3T/pexels-rachel-claire-5490200.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        zIndex: "10",
      }
    : {
        backgroundColor: "black", // Black background for non-home routes
        position: "relative",
        zIndex: "10",
        padding: "20px ",
      };

  return (
    <nav className="text-white" style={navbarStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <i className="fa-solid fa-palette"></i> grace jones
            </h1>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
            <NavLink to="/portfolio" className={linkClasses}>
              Portfolio
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClasses}>
              Contact
            </NavLink>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center w-10 h-10 bg-amber-500 mt-3 text-black rounded-md"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white text-black">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 ${
                isActive ? "text-amber-500" : "hover:bg-gray-200"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `block px-4 py-2 ${
                isActive ? "text-amber-500" : "hover:bg-gray-200"
              }`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-4 py-2 ${
                isActive ? "text-amber-500" : "hover:bg-gray-200"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-4 py-2 ${
                isActive ? "text-amber-500" : "hover:bg-gray-200"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      )}

      {/* Only show Banner if we're on the home route */}
      {isHomePage && (
        <div style={{ position: "relative", zIndex: "20" }}>
          <Banner />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
