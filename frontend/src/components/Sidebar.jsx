import React from "react";
import {
  Home,
  Users,
  BarChart,
  Settings,
  LogOut,
  HelpCircle,
  Layers,
  Wrench,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TeamSwitcher from "./TeamSwitcher";
import SearchBar from "./SearchBar";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const menu = [
    { name: "Dashboard", icon: <Home size={18} />, path: "/dashboard" },
    { name: "Insights", icon: <BarChart size={18} />, path: "/dashboard/insights" },
    { name: "Contacts", icon: <Users size={18} />, path: "/dashboard/contacts" },
    { name: "Setting", icon: <Wrench size={18} />, path: "/dashboard/settings" },
    { name: "Integration", icon: <Layers size={18} />, path: "/dashboard/integration" },
    { name: "Layouts", icon: <Layers size={18} />, path: "/dashboard/layouts" },
    { name: "Reports", icon: <BarChart size={18} />, path: "/dashboard/reports" },
  ];

  return (
    <>
      <aside
        className={`fixed lg:static top-0   left-0 h-screen w-64 bg-gray-950 border-r border-gray-800 flex flex-col transform transition-transform duration-300 z-40
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <TeamSwitcher />

        <div className="border-t  mt-3 border-gray-100">
          <div className="p-3 flex-grow mt-4">
            <SearchBar />
          </div>

          <span className="block px-3 py-2 text-base mt-4 text-gray-500">SECTIONS</span>
          <nav className="flex-1 p-2 space-y-1">
            {menu.map((item, i) => (
              <Link to={item.path} key={i} onClick={toggleSidebar}>
                <div
                  className={`flex items-center px-3 py-2 rounded-md cursor-pointer text-sm ${
                    location.pathname === item.path
                      ? "bg-green-700 text-white"
                      : "hover:bg-gray-800 text-gray-300"
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </div>
              </Link>
            ))}
          </nav>

          <span className="block px-3 py-2 text-base mt-4 text-gray-500">OTHER</span>
          <Link to="/dashboard/settings" onClick={toggleSidebar}>
            <div
              className={`flex mt-1 items-center px-3 py-2 text-sm rounded-md cursor-pointer ${
                location.pathname === "/dashboard/settings"
                  ? "bg-green-700 text-white"
                  : "hover:bg-gray-800 text-gray-300"
              }`}
            >
              <Settings size={18} className="mr-2" /> Settings
            </div>
          </Link>
          <Link to="/dashboard/help" onClick={toggleSidebar}>
            <div
              className={`flex items-center  px-3 py-2 text-sm rounded-md cursor-pointer ${
                location.pathname === "/dashboard/help"
                  ? "bg-green-700 text-white"
                  : "hover:bg-gray-800 text-gray-300"
              }`}
            >
              <HelpCircle size={18} className="mr-2" /> Help Center
            </div>
          </Link>
        </div>

        <div className="p-2 border-t border-gray-800 mt-16">
          <div
            className="flex items-center px-3 py-2 text-sm hover:bg-gray-800 cursor-pointer text-red-400"
            onClick={handleSignOut}
          >
            <LogOut size={18} className="mr-2" /> Sign Out
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
