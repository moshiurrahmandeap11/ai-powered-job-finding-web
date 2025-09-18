import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
const page = () => {
  return (
    <section className="">
      <Navbar />
      <div className="max-w-6xl mx-auto flex flex-col px-2 2xl:px-0 md:flex-row  items-center gap-6 md:gap-8">
        {/* left side  */}
        <div className="w-full md:w-[70%] bg-gray-800  rounded-md">
          {/* top text  */}
          <div className="flex items-center justify-between p-2 md:p-3 border-b border-gray-700 gap-2 md:gap-3">
            {/* left side  */}
            <div className="flex items-center gap-2 md:gap-6">
              <p className="text-white md:font-semibold text-sm font-medium md:text-xl">
                Messaging
              </p>
              <div className="bg-gray-700 px-1 md:px-2 rounded w-[180px] md:w-[250px] flex items-center gap-1 md:gap-3">
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
            <div className="w-[40%] border-r border-gray-700">fsdf</div>
            <div className="w-[60%]">fsdf</div>
          </div>
        </div>
        {/* right side  */}
        <div className="w-full md:w-[30%] bg-gray-800 p-10 rounded-md"></div>
      </div>
    </section>
  );
};

export default page;
