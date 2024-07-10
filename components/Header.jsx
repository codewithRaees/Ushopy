import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaSun } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";

import { FaMoon } from "react-icons/fa6";

const Header = () => {
  const [ordertext, setOrderText] = useState(false);
  const [isDark, setisDark] = useState(false);
  return (
    <div className="flex md:flex-row flex-col justify-between items-center bg-[#FFDCA9] px-10 py-1 main-header">
      {/* header logo section  */}

      <div className="left-header flex justify-between items-center pb-2">
        {" "}
        <img className="w-12" src={logo} alt="Logo" />
        <h1 className="font-bold text-2xl">Ushopy</h1>
      </div>
      {/* Header searchBar section  */}
      <div className="relative right-header flex items-center">
        <div className="flex items-center border-2 bg-white rounded-full min-h-10 overflow-hidden searchBar">
          {" "}
          <input
            type="search"
            className="px-4 max-w-48 outline-none"
            placeholder="search"
            id="searchBar"
          ></input>
          <button className="bg-white px-3 text-gray-400">
            <FaMagnifyingGlass />
          </button>
        </div>
        <div
          className="flex items-center bg-[#F49510] mx-3 px-5 rounded-full h-8 text-white"
          onMouseOver={() => {
            setOrderText(!ordertext);
          }}
        >
          <span
            className={`transition duration-1000 ease-in-out    ${
              !ordertext ? "inline" : "hidden"
            } px-2`}
          >
            Orders
          </span>
          <FaCartShopping className="text-2xl text-white" />
        </div>
        <div className="md:block hidden w-32">
          {" "}
          <p
            onClick={() => {
              setisDark(!isDark);
              console.log(!isDark);
            }}
            className={`  flex text-white  items-center  `}
          >
            {!isDark ? (
              <FaSun className="text-white text-xl" />
            ) : (
              <FaMoon className="text-white text-xl" />
            )}
            {!isDark ? "Dark" : "light"} Mode
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Header;
