import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
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
      date: "Sep 17",
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
      <div className="max-w-6xl mx-auto flex flex-col px-2 2xl:px-0 md:flex-row  items-center gap-6 md:gap-8">
        {/* left side  */}
        <div className="w-full md:w-[70%] bg-white shadow-md  rounded-md">
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
          <div className="flex ">
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
            <div className="w-[55%]">fsdf</div>
          </div>
        </div>
        {/* right side  */}
        <div className="w-full md:w-[30%] bg-white shadow-md p-10 rounded-md"></div>
      </div>
    </section>
  );
};

export default page;
