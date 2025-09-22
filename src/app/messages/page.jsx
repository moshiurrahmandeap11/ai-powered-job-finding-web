import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { FaImage } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
const page = () => {
  const userList = [
    {
      id: 1,
      name: "Shoriful Islam Udoy",
      date: "Sep 18",
      text: "Ok",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Ubaidur Rahman",
      date: "Sep 18",
      text: "I did it",
      image:
        "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Moshiur Rahman",
      date: "Sep 19",
      text: "No worries",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Imran Farazi",
      date: "Sep 18",
      text: "Not much",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww",
    },
  ];
  return (
    <section className="">
      <Navbar />
      <div className="max-w-6xl mx-auto flex flex-col px-2 2xl:px-0 lg:flex-row   gap-6 md:gap-8">
        {/* left side  */}
        <div className="w-full md:w-[70%] bg-white shadow-lg  rounded-md">
          {/* top text  */}
          <div className="flex items-center justify-between p-2 md:p-3 border-b border-gray-200 gap-2 md:gap-3">
            {/* left side  */}
            <div className="flex items-center gap-2 md:gap-6">
              <p className="text-black md:font-semibold text-sm font-medium md:text-xl">
                Messaging
              </p>
              <div className="bg-gray-200 px-1 md:px-2 rounded w-[180px] md:w-[250px] flex items-center gap-1 md:gap-3">
                <FaSearch className="flex-shrink-0" size={19} />
                <input
                  className=" py-1.5 outline-none "
                  placeholder="Search messages"
                  type="text"
                />
              </div>
            </div>
            {/* right side  */}
            <div className="flex items-center gap-2 md:gap-4">
              <div className="hover:bg-gray-600 p-1 transition duration-300 cursor-pointer rounded-full">
                <BsThreeDots size={21} />
              </div>
              <FiEdit size={21} />
            </div>
          </div>
          {/* for large device */}
          <div className="md:flex hidden ">
            <div className="w-[45%] border-r border-gray-200">
              <div className="flex items-center justify-between bg-gray-100 border-b border-l-6 border-l-green-700 border-gray-200 gap-3 p-4">
                <div className="flex gap-3">
                  <img
                    className="size-16 rounded-full bg-center object-cover"
                    src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                  />
                  <div>
                    <p className="font-medium">Zakariya Hussain</p>
                    <p className="text-wrap">I will do it later</p>
                  </div>
                </div>
                <div>
                  <p>Sep 19</p>
                </div>
              </div>
              {userList.map((user) => (
                <div
                  className="flex items-center justify-between border-b border-gray-200 gap-3 p-4"
                  key={user.id}
                >
                  <div className="flex gap-3">
                    <img
                      className="size-16 rounded-full bg-center object-cover"
                      src={user.image}
                      alt=""
                    />
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-wrap">{user.text}</p>
                    </div>
                  </div>
                  <div>
                    <p>{user.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[55%] p-4">
              <div className="flex items-center gap-4">
                <img
                  className="size-14 rounded-full bg-center object-cover"
                  src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
                <div>
                  <p className="font-medium">Zakariya Hussain</p>
                  <p className="text-sm text-black/70">
                    MERN Stack Web Developer | React.js | Next.js | Node.js |
                    MongoDB{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center my-3">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-3 text-gray-500 text-sm">SEP 19</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="border-b  border-gray-200 h-[400px]">
                <div className="flex gap-3">
                  <img
                    className="size-12 rounded-full bg-center object-cover"
                    src="https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                  />
                  <div>
                    <p className=" font-medium">Tanvir Ahmed · 8:28 AM</p>
                    <p className="text-sm text-gray-800 mt-1">
                      Hello, Have you done the navbar section?
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mt-5">
                  <img
                    className="size-12 rounded-full bg-center object-cover"
                    src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                  />
                  <div>
                    <p className=" font-medium">Zakariya Hussain · 9:18 AM</p>
                    <p className="text-sm text-gray-800 mt-1">
                      I will do it later
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-b  border-gray-200 pb-2">
                <textarea
                  placeholder="Write a message..."
                  className="w-full p-2 h-[100px] outline-none bg-gray-100 rounded-md mt-3"
                ></textarea>
              </div>
              <div className="flex items-center justify-between gap-4 mt-3">
                <div className="flex items-center gap-3">
                  <FaImage size={21} />
                  <FaLink size={21} />
                  <p className="font-medium text-sm">GIF</p>
                  <MdOutlineEmojiEmotions size={21} />
                </div>
                <div className="flex items-center gap-2">
                  <p className="bg-gray-300 px-3 py-1 text-sm rounded-full">
                    send
                  </p>
                  <div className="hover:bg-gray-600 hover:text-white p-1 transition duration-300 cursor-pointer rounded-full">
                    <BsThreeDots size={21} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* for small screen */}
          <div className="flex w-full flex-col gap-4 md:hidden">
            <div className="flex items-center justify-between bg-gray-100 border-b border-l-6 border-l-green-700 border-gray-200 gap-3 p-4">
              <div className="flex gap-3">
                <img
                  className="size-16 rounded-full bg-center object-cover"
                  src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
                <div>
                  <p className="font-medium">Zakariya Hussain</p>
                  <p className="text-wrap">I will do it later</p>
                </div>
              </div>
              <div>
                <p>Sep 19</p>
              </div>
            </div>
            {userList.map((user) => (
              <div
                className="flex items-center justify-between border-b border-gray-200 gap-3 p-4"
                key={user.id}
              >
                <div className="flex gap-3">
                  <img
                    className="size-16 rounded-full bg-center object-cover"
                    src={user.image}
                    alt=""
                  />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-wrap">{user.text}</p>
                  </div>
                </div>
                <div>
                  <p>{user.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* right side  */}
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
};

export default page;
