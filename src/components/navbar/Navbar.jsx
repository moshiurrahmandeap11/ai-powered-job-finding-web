"use client"
import { useState } from "react";
import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  User,
  Square,
  Building2,
  Star,
  Plus,
} from "lucide-react";
import Logo from "../sharedItems/logo/Logo";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "home", label: "Home", icon: <Home size={22} /> },
    { name: "mynetwork", label: "My Network", icon: <Users size={22} /> },
    { name: "jobs", label: "Jobs", icon: <Briefcase size={22} /> },
    { name: "messages", label: "Messages", icon: <MessageSquare size={22} /> },
    { name: "notifications", label: "Notifications", icon: <Bell size={22} /> },
    { name: "profile", label: "Profile", icon: <User size={22} /> },
    { name: "divider", label: "", icon: <Square size={22} /> },
    { name: "business", label: "Business", icon: <Building2 size={22} /> },
    { name: "premium", label: "Premium", icon: <Star size={22} /> },
  ];

  // Mobile-only items
  const mobileOnlyItems = [
    { name: "post", label: "Post", icon: <Plus size={22} /> },
  ];

  // Create mobile bottom items with Post inserted between My Network and Jobs
  const mobileBottomItems = [
    navItems.find(item => item.name === "home"),
    navItems.find(item => item.name === "mynetwork"),
    mobileOnlyItems.find(item => item.name === "post"),
    navItems.find(item => item.name === "jobs"),
    navItems.find(item => item.name === "notifications"),
  ].filter(Boolean);

  return (
    <>
      {/* Mobile/Tablet Top Bar */}
      <div className="md:hidden fixed top-0 w-full bg-secondary shadow-sm z-50 px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Profile - Top Left */}
          <button
            onClick={() => setActive("profile")}
            className={`flex items-center text-gray-600 hover:text-black transition ${
              active === "profile" ? "font-bold text-black" : ""
            }`}
          >
            <div className={`transition-transform duration-300 ease-in-out ${active === "profile" ? "transform rotate-12" : ""}`}>
              <User size={24} />
            </div>
          </button>
          
          {/* Messages - Top Right */}
          <button
            onClick={() => setActive("messages")}
            className={`flex items-center text-gray-600 hover:text-black transition ${
              active === "messages" ? "font-bold text-black" : ""
            }`}
          >
            <div className={`transition-transform duration-300 ease-in-out ${active === "messages" ? "transform rotate-12" : ""}`}>
              <MessageSquare size={24} />
            </div>
          </button>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-0 w-full bg-secondary shadow-sm z-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-6 md:gap-10 py-2">
            <Logo></Logo>
            {navItems.map((item) =>
              item.name === "divider" ? (
                <div
                  key="divider"
                  className="w-[1px] bg-gray-300 mx-4"
                />
              ) : (
                <button
                  key={item.name}
                  onClick={() => setActive(item.name)}
                  className={`flex flex-col font-pop items-center text-gray-600 hover:text-black transition ${
                    active === item.name ? "font-bold text-black" : ""
                  }`}
                >
                  <div className={`transition-transform duration-300 ease-in-out ${active === item.name ? "transform rotate-12" : ""}`}>
                    {item.icon}
                  </div>
                  <span className="text-xs mt-1">{item.label}</span>
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t shadow-sm z-50">
        <div className="flex justify-around py-2">
          {mobileBottomItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex flex-col font-pop items-center text-gray-600 hover:text-black transition ${
                active === item.name ? "font-bold text-black" : ""
              }`}
            >
              <div className={`transition-transform duration-300 ease-in-out ${active === item.name ? "transform rotate-12" : ""}`}>
                {item.icon}
              </div>
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Spacer for mobile top bar */}
      <div className="md:hidden h-16"></div>
      
      {/* Spacer for desktop top bar */}
      <div className="hidden md:block h-16"></div>
      
      {/* Spacer for mobile bottom bar */}
      <div className="md:hidden h-16"></div>
    </>
  );
};

export default Navbar;