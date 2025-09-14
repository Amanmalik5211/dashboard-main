import React, { useState, useRef, useEffect } from "react";
import { Layout } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "User",
    email: "User@example.com",
  };

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const pageTitle = location.pathname.split("/").pop() || "Dashboard";

  return (
    <header className="w-full bg-gray-900 border-b border-gray-800 flex justify-between items-center px-2 xs:px-3 sm:px-4 md:px-6 py-2 sm:py-3">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-800">
          <Layout size={16} className="xs:size-5 sm:size-6 md:size-7" />
        </button>
        <span className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 capitalize truncate">
          {pageTitle}
        </span>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 relative" ref={dropdownRef}>
        <button className="text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-300 hover:text-white">
          Feedback
        </button>

        <div
          onClick={() => setOpen(!open)}
          className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gray-700 cursor-pointer overflow-hidden"
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        {open && (
          <div className="absolute right-0 top-9 xs:top-10 sm:top-12 w-40 xs:w-44 sm:w-56 md:w-64 bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-2 sm:p-3">
            <div className="flex items-center space-x-2 sm:space-x-3 p-2">
              <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-gray-600 overflow-hidden">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="truncate">
                <p className="text-[11px] xs:text-xs sm:text-sm md:text-base font-semibold">
                  {user.name}
                </p>
                <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-gray-400 truncate">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="mt-2 border-t border-gray-700"></div>

            <ul className="mt-2 text-[11px] xs:text-xs sm:text-sm md:text-base text-gray-300">
              <li className="px-2 sm:px-3 py-2 hover:bg-gray-700 rounded-md cursor-pointer">
                Account settings
              </li>
              <li className="px-2 sm:px-3 py-2 hover:bg-gray-700 rounded-md cursor-pointer">
                Affiliate area
              </li>
              <li
                className="px-2 sm:px-3 py-2 hover:bg-gray-700 rounded-md cursor-pointer text-red-400"
                onClick={handleSignOut}
              >
                Sign out
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
