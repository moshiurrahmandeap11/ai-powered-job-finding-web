"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
import { useAuth } from "../useAuth/useAuth";
import Loader from "../sharedItems/Loader/Loader";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const { user, loading } = useAuth();
  const router = useRouter();

  const navItems = [
    { name: "home", label: "Home", icon: <Home size={22} />, route: "/" },
    { name: "mynetwork", label: "My Network", icon: <Users size={22} />, route: "/mynetwork" },
    { name: "jobs", label: "Jobs", icon: <Briefcase size={22} />, route: "/jobs" },
    { name: "messages", label: "Messages", icon: <MessageSquare size={22} />, route: "/messages" },
    { name: "notifications", label: "Notifications", icon: <Bell size={22} />, route: "/notifications" },
    { name: "profile", label: "Profile", icon: <User size={22} />, route: "/profile" },
    { name: "divider", label: "", icon: <Square size={22} />, route: null },
    { name: "business", label: "Business", icon: <Building2 size={22} />, route: "/business" },
    { name: "premium", label: "Premium", icon: <Star size={22} />, route: "/premium" },
  ];

  const mobileOnlyItems = [
    { name: "post", label: "Post", icon: <Plus size={22} />, route: "/post" },
  ];

  const mobileBottomItems = [
    navItems.find((item) => item.name === "home"),
    navItems.find((item) => item.name === "mynetwork"),
    mobileOnlyItems.find((item) => item.name === "post"),
    navItems.find((item) => item.name === "jobs"),
    navItems.find((item) => item.name === "notifications"),
  ].filter(Boolean);

  const handleNavClick = (name, route) => {
    setActive(name);
    if (route) {
      router.push(route);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 w-full bg-secondary shadow-sm z-50 px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Profile */}
          <button
            onClick={() => handleNavClick("profile", "/profile")}
            className={`flex items-center text-gray-600 hover:text-black transition ${
              active === "profile" ? "font-bold text-black" : ""
            }`}
          >
            {user?.image ? (
              <Image
                src={user.image}
                alt={user.name || "Profile"}
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <User size={24} />
            )}
          </button>

          {/* Messages */}
          <button
            onClick={() => handleNavClick("messages", "/messages")}
            className={`flex items-center text-gray-600 hover:text-black transition ${
              active === "messages" ? "font-bold text-black" : ""
            }`}
          >
            <MessageSquare size={24} />
          </button>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-0 w-full bg-gray-50 shadow-sm border-b rounded-b-2xl z-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-6 md:gap-10 py-2">
            <Logo />
            {navItems.map((item) =>
              item.name === "divider" ? (
                <div key="divider" className="w-[1px] bg-gray-300 mx-4" />
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.name, item.route)}
                  className={`flex flex-col font-pop items-center text-gray-600 hover:text-black transition ${
                    active === item.name ? "font-bold text-black" : ""
                  }`}
                >
                  <div
                    className={`transition-transform duration-300 ease-in-out ${
                      active === item.name ? "transform rotate-12" : ""
                    }`}
                  >
                    {item.name === "profile" && user?.image ? (
                      <Image
                        src={user.image}
                        alt={user.name || "Profile"}
                        width={22}
                        height={22}
                        className="rounded-full"
                      />
                    ) : (
                      item.icon
                    )}
                  </div>
                  <span className="text-xs mt-1">{item.label}</span>
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t rounded-t-2xl shadow-sm z-50">
        <div className="flex justify-around py-2">
          {mobileBottomItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.name, item.route)}
              className={`flex flex-col font-pop items-center text-gray-600 hover:text-black transition ${
                active === item.name ? "font-bold text-black" : ""
              }`}
            >
              <div
                className={`transition-transform duration-300 ease-in-out ${
                  active === item.name ? "transform rotate-12" : ""
                }`}
              >
                {item.name === "profile" && user?.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "Profile"}
                    width={22}
                    height={22}
                    className="rounded-full"
                  />
                ) : (
                  item.icon
                )}
              </div>
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Spacers */}
      <div className="md:hidden h-8 md:h-20"></div>
      <div className="hidden md:block h-8 md:h-20"></div>
      <div className="md:hidden h-8 md:h-20"></div>
    </>
  );
};

export default Navbar;