import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen w-screen flex bg-gray-900 text-white">
      {sidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`h-full w-[250px] bg-gray-950 border-r border-gray-800 z-50 transition-transform duration-300
          fixed top-0 left-0 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:relative`}
      >
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}/>
      </div>

      <div className="flex-1 flex flex-col overflow-auto">
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="p-4 sm:p-6 space-y-6 overflow-y-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
