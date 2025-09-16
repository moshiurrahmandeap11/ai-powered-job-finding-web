"use client";
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
} from "lucide-react";

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

  return (
    <nav className="fixed bottom-0 md:top-0 md:relative w-full bg-white border-t md:border-b shadow-sm z-50">
      <div className="flex justify-around md:justify-center gap-6 md:gap-10 py-2">
        {navItems.map((item) =>
          item.name === "divider" ? (
            <div
              key="divider"
              className="hidden md:block w-[1px] bg-gray-300 mx-4"
            />
          ) : (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex flex-col items-center text-gray-600 hover:text-black transition ${
                active === item.name ? "font-bold text-black" : ""
              }`}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
