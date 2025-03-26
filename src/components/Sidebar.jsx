import React from "react";
import { FaHome, FaSearch, FaCompass, FaFilm, FaPaperPlane, FaBell, FaPlusSquare, FaUser, FaBars } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-20 flex flex-col items-center bg-white border-r border-gray-300">
      <FaHome className="text-2xl my-4 cursor-pointer" />
      <FaSearch className="text-2xl my-4 cursor-pointer" />
      <FaCompass className="text-2xl my-4 cursor-pointer" />
      <FaFilm className="text-2xl my-4 cursor-pointer" />
      <FaPaperPlane className="text-2xl my-4 cursor-pointer" />
      <FaBell className="text-2xl my-4 cursor-pointer" />
      <FaPlusSquare className="text-2xl my-4 cursor-pointer" />
      <FaUser className="text-2xl my-4 cursor-pointer" />
      <FaBars className="text-2xl my-4 cursor-pointer" />
    </div>
  );
};

export default Sidebar;
