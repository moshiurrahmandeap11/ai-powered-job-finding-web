"use client";
import Navbar from "@/components/navbar/Navbar";
import Loader from "@/components/sharedItems/Loader/Loader";
import { useAuth } from "@/components/useAuth/useAuth";
import axiosInstance from "@/lib/axiosInstance/AxiosInstance";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserFriends, FaUsers, FaCalendarAlt } from "react-icons/fa";

const Page = () => {
  const { user, loading } = useAuth();
  const [suggestedUser, setSuggestedUser] = useState(null);
  const [invitations, setInvitations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const networkRoutes = [
    {
      id: 1,
      name: "Connections",
      pathname: "/mynetwork/connections",
      icon: <FaUserFriends size={20} />,
      number: 6,
    },
    {
      id: 2,
      name: "Groups",
      pathname: "/mynetwork/groups",
      icon: <FaUsers size={20} />,
      number: 4,
    },
    {
      id: 3,
      name: "Events",
      pathname: "/mynetwork/events",
      icon: <FaCalendarAlt size={20} />,
      number: 3,
    },
  ];

  // Fetch suggested users
  useEffect(() => {
    if (!user?.email) return;
    const fetchConnection = async () => {
      try {
        const res = await axiosInstance.get(
          `/v1/connect/suggested?email=${user.email}`
        );
        setSuggestedUser(res.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchConnection();
  }, [user?.email]);

  // Fetch invitations
  const fetchInvitations = async () => {
    try {
      const res = await axiosInstance.get(
        `/v1/connect/invitations?email=${user.email}`
      );
      setInvitations(res.data.invitations);
    } catch (error) {
      console.log(error);
    }
  };

  const handleConnect = async (email) => {
    const data = {
      requesterEmail: user.email,
      targetEmail: email,
    };
    try {
      await axiosInstance.post(`/v1/connect/`, data);
      toast.success("Connection request sent");
    } catch (error) {
      console.log(error);
    }
  };
  const handleAcceptConnect = async (id, name) => {
    const data = {
      recipientEmail: user.email,
      accept: "accepted",
    };
    try {
      await axiosInstance.post(`/v1/connect/invitation/${id}`, data);
      toast.success(`You are now connected with ${name}`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleManageClick = () => {
    fetchInvitations();
    setShowModal(true);
  };
  if (loading) return <Loader />;

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto flex mb-14 md:mb-0 items-start flex-col lg:flex-row gap-12 lg:gap-8">
        {/* left side */}
        <div className="w-full md:w-[30%]">
          {/* upper side  */}
          <div className="bg-white shadow-lg rounded-md p-4">
            <h4 className="font-medium text-xl md:text-2xl pb-2">
              Manage my network
            </h4>
            <div className="flex flex-col ">
              {networkRoutes.map((route) => (
                <Link
                  key={route.id}
                  className="flex items-center gap-2 justify-between border-t border-gray-300 py-3 text-gray-600 font-medium text-lg"
                  href={route.pathname}
                >
                  <div className="flex items-center gap-4">
                    {route.icon}
                    {route.name}
                  </div>
                  <p className="font-normal text-lg">{route.number}</p>
                </Link>
              ))}
            </div>
          </div>
          {/* advertisement section*/}
          <div className="mt-6 relative">
            <img
              className="rounded-md w-full h-auto"
              src="https://plus.unsplash.com/premium_photo-1681140560806-928e8b9a9a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZSUyMHBsYW50aW5nfGVufDB8fDB8fHww"
              alt=""
            />

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-md"></div>

            {/* Text */}
            <div className="absolute top-6 left-2 px-4">
              <p className=" font-semibold text-3xl text-white">
                Trees are our friend
              </p>
              <p className="text-[15px] mt-3 text-gray-200">
                Trees give us oxygen, shade, and life. Protect them for a
                greener, healthier, and brighter future ahead.
              </p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="bg-white shadow-lg rounded-md  w-full md:w-[70%] p-4">
          <div className="font-medium text-black flex items-center justify-between text-lg bg-gray-100 p-2 rounded-md">
            <p>Check your connection request</p>
            <button onClick={handleManageClick}>Manage</button>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-4 md:grid-cols-3 lg:grid-cols-4 mt-4">
            {suggestedUser?.map((suggest) => (
              <div
                key={suggest.id}
                className="border flex items-center gap-2 flex-col justify-center rounded-md border-gray-300 p-2 "
              >
                <img
                  className="size-12 md:size-14 rounded-full bg-center object-cover"
                  src={suggest?.profilePicture}
                  alt={suggest.id}
                />
                <h4 className="font-medium ">{suggest?.name}</h4>
                <p className=" text-sm text-gray-600 line-clamp-2 h-[40px] ">
                  {suggest.tags.join(" | ")}
                </p>
                <button
                  onClick={() => handleConnect(suggest.email)}
                  className="bg-blue-500 w-full mt-1 cursor-pointer hover:bg-blue-600 duration-300 text-white py-2 rounded-full"
                >
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-md w-11/12 md:w-1/2 p-6 relative"
              initial={{ scale: 0.95, opacity: 0, y: -50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 cursor-pointer right-3 text-xl font-bold"
              >
                <RxCross1 />
              </button>
              <h3 className="font-semibold text-xl mb-4">
                Connection Invitations
              </h3>
              {invitations.length === 0 ? (
                <p>No invitations at the moment.</p>
              ) : (
                <ul className="space-y-2 max-h-80 overflow-y-auto">
                  {invitations.map((inv) => (
                    <li
                      key={inv.id}
                      className=" border border-gray-300 p-3 rounded-md"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <img
                            className="size-12 rounded-full bg-center object-cover"
                            src={inv.user.profilePicture}
                            alt=""
                          />
                          <p className="font-medium text-lg">{inv.user.name}</p>
                        </div>
                        <button
                          onClick={() =>
                            handleAcceptConnect(inv.id, inv.user.name)
                          }
                          className="bg-blue-500 text-white px-4 duration-300 cursor-pointer py-2 rounded-md hover:bg-blue-600"
                        >
                          Connect
                        </button>
                      </div>
                      <p className="text-sm mt-2 text-gray-500">
                        {inv.user.tags.join(" | ")}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page;
