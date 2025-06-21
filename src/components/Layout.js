import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Layout({ children, sidebarCollapsed, setSidebarCollapsed }) {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    // Add more as needed
  ];

  return (
    <div className="flex min-h-screen bg-gray-200 text-black">
      {/* Sidebar */}
      <aside
        className={`relative bg-white p-4 mt-20 fixed left-0 top-0 h-[calc(100vh-80px)] z-10 ${
          sidebarCollapsed ? "w-8" : "w-40"
        } transition-all duration-300 shadow-[4px_0_6px_-2px_rgba(0,0,0,0.1)]`}
      >
        {/* Arrow Button (constant right-side shadow) */}
        <div
          className="absolute top-5 -right-3 bg-white border rounded-full p-1 cursor-pointer"
          style={{
            boxShadow: "3px 0 8px rgba(0,0,0,0.1)" // Always right-side shadow
          }}
        >
          {sidebarCollapsed ? (
            <ChevronRight className="w-5 h-5" onClick={() => setSidebarCollapsed(false)} />
          ) : (
            <ChevronLeft className="w-5 h-5" onClick={() => setSidebarCollapsed(true)} />
          )}
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2 mt-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className={`p-2 text-lg rounded transition-colors duration-150 ${
                item.name === "Courses"
                  ? "font-bold text-black underline"
                  : "hover:bg-gray-100"
              }`}
            >
              {!sidebarCollapsed && item.name}
            </a>
          ))}
        </nav>
      </aside>

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white px-6 py-5 h-20 w-full fixed top-0 left-0 z-30 flex items-center shadow-[0_1px_0_0_#dedede]">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 pt-20 px-6 bg-white">{children}</main>
      </div>
    </div>
  );
}


