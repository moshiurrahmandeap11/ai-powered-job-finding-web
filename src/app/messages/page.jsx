"use client";
import Navbar from "@/components/navbar/Navbar";
import React, { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { FaImage, FaLink } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import io from "socket.io-client";
import axiosInstance from "@/lib/axiosInstance/AxiosInstance";
import { useAuth } from "@/components/useAuth/useAuth";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const socket = io("https://career-crafter-server.vercel.app/v1");

export default function Page() {
  const { user } = useAuth();
  const [allUser, setAllUser] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [message, setMessage] = useState("");
  const [chatHistories, setChatHistories] = useState({});
  const [showModal, setShowModal] = useState(false);
  const scrollRef = useRef();
  // Fetch all users
  useEffect(() => {
    if (!user) return;

    const fetchUsers = async () => {
      try {
        const res = await axiosInstance.get(`/v1/allUsers?email=${user.email}`);
        setAllUser(res.data);

        // Fetch last message for all users
        const lastMessagesPromises = res.data.map(async (u) => {
          const msgsRes = await axiosInstance.get(
            `/v1/messages?userEmail=${user.email}&friendEmail=${u.email}`
          );
          return { [u.email]: msgsRes.data };
        });

        const lastMessagesArray = await Promise.all(lastMessagesPromises);
        const initialChatHistories = Object.assign({}, ...lastMessagesArray);
        setChatHistories(initialChatHistories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [user]);

  // Socket listener
  useEffect(() => {
    if (!user) return;

    const handleReceiveMessage = (chat) => {
      setChatHistories((prev) => {
        const updatedHistory = { ...prev };
        if (!updatedHistory[chat.fromEmail])
          updatedHistory[chat.fromEmail] = [];

        updatedHistory[chat.fromEmail] = [
          ...updatedHistory[chat.fromEmail],
          {
            from: chat.fromEmail === user.email ? "You" : chat.fromEmail,
            message: chat.message,
            timestamp: chat.timestamp,
          },
        ];
        return updatedHistory;
      });
    };

    socket.off("receive-message");
    socket.on("receive-message", handleReceiveMessage);
    socket.emit("join", user.email);

    return () => socket.off("receive-message", handleReceiveMessage);
  }, [user]);

  // Fetch messages for active user
  useEffect(() => {
    if (!activeUser || !user) return;

    const fetchMessages = async () => {
      try {
        const res = await axiosInstance.get(
          `/v1/messages?userEmail=${user.email}&friendEmail=${activeUser.email}`
        );
        setChatHistories((prev) => ({
          ...prev,
          [activeUser.email]: res.data.map((msg) => ({
            from: msg.fromEmail === user.email ? "You" : activeUser.name,
            message: msg.message,
            timestamp: msg.timestamp || msg.createdAt,
          })),
        }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [activeUser, user]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistories, activeUser]);

  // Send message
  const sendMessage = async () => {
    if (!message.trim() || !activeUser || !user) return;

    const timestamp = new Date().toISOString();
    const newMessage = { from: "You", message, timestamp };

    setChatHistories((prev) => {
      const updatedHistory = { ...prev };
      if (!updatedHistory[activeUser.email])
        updatedHistory[activeUser.email] = [];
      updatedHistory[activeUser.email] = [
        ...updatedHistory[activeUser.email],
        newMessage,
      ];
      return updatedHistory;
    });

    socket.emit("send-message", {
      toEmail: activeUser.email,
      fromEmail: user.email,
      message,
      timestamp,
    });

    try {
      await axiosInstance.post("/v1/messages", {
        fromEmail: user.email,
        toEmail: activeUser.email,
        message,
        timestamp,
      });
    } catch (err) {
      console.error("Failed to save message:", err);
    }

    setMessage("");
  };

  const getLastMessage = (userEmail) => {
    const messages = chatHistories[userEmail] || [];
    if (messages.length === 0) return { text: "", date: "" };
    const last = messages[messages.length - 1];
    return {
      text: last.message,
      date: new Date(last.timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    };
  };

  // Small screen modal open
  const openChatModal = (userItem) => {
    setActiveUser(userItem);
    setShowModal(true);
  };

  return (
    <section className="">
      <Navbar />
      <div className="max-w-6xl mx-auto flex flex-col px-2 mb-14 md:mb-0 2xl:px-0 lg:flex-row gap-6 md:gap-8">
        {/* Large screen left */}
        <div className="w-full md:w-[70%] bg-white shadow-lg rounded-md">
          {/* Top search */}
          <div className="flex items-center justify-between p-2 md:p-3 border-b border-gray-200 gap-2 md:gap-3">
            <div>
              <div className="bg-gray-200 px-1 md:px-2 rounded w-[210px] md:w-[250px] flex items-center gap-2 md:gap-3">
                <FaSearch className="flex-shrink-0" size={19} />
                <input
                  className=" py-1.5 outline-none"
                  placeholder="Search messages"
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="hover:bg-gray-600 p-1 transition duration-300 cursor-pointer rounded-full">
                <BsThreeDots size={21} />
              </div>
              <FiEdit size={21} />
            </div>
          </div>

          {/* Users List */}
          <div className="md:flex hidden">
            <div className="w-[45%] border-r border-gray-200 overflow-y-auto">
              {allUser?.map((userItem) => {
                const lastMessage = getLastMessage(userItem.email);
                return (
                  <div
                    className={`flex items-center justify-between border-b border-gray-200 gap-3 p-4 cursor-pointer ${
                      activeUser?.email === userItem.email ? "bg-gray-100" : ""
                    }`}
                    key={userItem._id}
                    onClick={() => setActiveUser(userItem)}
                  >
                    <div className="flex gap-3">
                      <img
                        className="size-16 rounded-full bg-center object-cover"
                        src={userItem.profilePicture}
                        alt=""
                      />
                      <div>
                        <p className="font-medium">{userItem.name}</p>
                        <p className="text-wrap text-gray-500">
                          {lastMessage.text || userItem.text}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        {lastMessage.date || userItem.date}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Chat window */}
            <div className="w-[55%] p-4 flex flex-col">
              {activeUser ? (
                <>
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      className="size-14 rounded-full bg-center object-cover"
                      src={activeUser.profilePicture}
                      alt=""
                    />
                    <div>
                      <p className="text-lg font-medium">{activeUser.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 border-b border-gray-300 pb-2 flex-wrap">
                    {" "}
                    {activeUser.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-wrap text-[13px] text-gray-600 font-medium"
                      >
                        {" "}
                        {tag} |{" "}
                      </span>
                    ))}{" "}
                  </div>
                  <div
                    className="overflow-y-scroll h-[440px] my-3"
                    ref={scrollRef}
                  >
                    {(chatHistories[activeUser.email] || []).map(
                      (chat, idx) => (
                        <div
                          key={idx}
                          className={`flex gap-3 mb-2 ${
                            chat.from === "You"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div>
                            <div
                              className={`px-4 flex items-center gap-2 py-2 rounded ${
                                chat.from === "You"
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-800"
                              }`}
                            >
                              <div>{chat.message}</div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1 text-right">
                              {new Date(chat.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <div className="flex gap-3 items-center border-t border-gray-200 pt-2">
                    <MdOutlineEmojiEmotions size={21} />
                    <FaImage size={21} />
                    <FaLink size={21} />
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write a message..."
                      className="flex-1 p-2 border border-gray-400 rounded-md outline-none"
                      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <button
                      onClick={sendMessage}
                      className="bg-blue-500 text-white px-3 py-2 rounded-md"
                    >
                      Send
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center flex-1 text-gray-500">
                  Select a user to start chatting
                </div>
              )}
            </div>
          </div>

          {/* Small screen users */}
          <div className="md:hidden">
            {allUser?.map((userItem) => {
              const lastMessage = getLastMessage(userItem.email);
              return (
                <div
                  key={userItem._id}
                  className="flex items-center justify-between border-b border-gray-200 p-4 cursor-pointer"
                  onClick={() => openChatModal(userItem)}
                >
                  <div className="flex gap-3">
                    <img
                      className="size-16 rounded-full bg-center object-cover"
                      src={userItem.profilePicture}
                      alt=""
                    />
                    <div>
                      <p className="font-medium">{userItem.name}</p>
                      <p className="text-wrap text-gray-500">
                        {lastMessage.text || userItem.text}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      {lastMessage.date || userItem.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chat Modal */}
          <AnimatePresence>
            {showModal && activeUser && (
              <motion.div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white w-full max-w-md rounded-md p-4 flex flex-col"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <img
                        className="size-12 rounded-full bg-center object-cover"
                        src={activeUser.profilePicture}
                        alt=""
                      />
                      <p className="text-lg font-medium">{activeUser.name}</p>
                    </div>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-700 cursor-pointer font-bold"
                    >
                      <RxCross1 />
                    </button>
                  </div>

                  <div className="flex items-center gap-1 border-b border-gray-300 pb-2 flex-wrap">
                    {activeUser.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-wrap text-[13px] text-gray-600 font-medium"
                      >
                        {tag} |{" "}
                      </span>
                    ))}
                  </div>

                  <div
                    className="overflow-y-scroll h-[400px] my-3"
                    ref={scrollRef}
                  >
                    {(chatHistories[activeUser.email] || []).map(
                      (chat, idx) => (
                        <div
                          key={idx}
                          className={`flex gap-3 mb-2 ${
                            chat.from === "You"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div>
                            <div
                              className={`px-4 flex items-center gap-2 py-2 rounded ${
                                chat.from === "You"
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-800"
                              }`}
                            >
                              <div>{chat.message}</div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1 text-right">
                              {new Date(chat.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  <div className="flex gap-3 items-center border-t border-gray-200 pt-2">
                    <MdOutlineEmojiEmotions size={21} />
                    <FaImage size={21} />
                    <FaLink size={21} />
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write a message..."
                      className="flex-1 p-2 border border-gray-400 rounded-md outline-none"
                      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <button
                      onClick={sendMessage}
                      className="bg-blue-500 text-white px-3 py-2 rounded-md"
                    >
                      Send
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right side ad */}
        <div className="w-full md:w-[30%] bg-white shadow-md p-4 h-fit rounded-md">
          <img
            className="w-full rounded-md"
            src="https://media.istockphoto.com/id/1095712110/photo/solar-panel-alternative-electricity-source-concept-of-sustainable-resources-and-this-is-a-new.webp?a=1&b=1&s=612x612&w=0&k=20&c=1ethMEXxVo3dkONl4RTBq_bUFfrrwWGdf4q2pyFC8hM="
            alt=""
          />
          <p className="font-semibold mt-4 text-xl">Solar system in USA</p>
        </div>
      </div>
    </section>
  );
}
