import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaSun } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

import { FaMoon } from "react-icons/fa6";

const Header = () => {
  const [ordertext, setOrderText] = useState(false);
  const [isDark, setisDark] = useState(false);
  return (
    <div className="flex justify-between items-center bg-[#FFDCA9] px-10 py-2 main-header">
      {/* header logo section  */}
      <div className="left-header flex items-center">
        {" "}
        <img className="w-14" src={logo} alt="Logo" />
        <h1 className="font-bold text-2xl">Ushopy</h1>
      </div>
      {/* Header searchBar section  */}
      <div className="right-header flex items-center">
        <div className="flex items-center border-2 rounded-full overflow-hidden searchBar">
          {" "}
          <input
            type="search"
            className="px-4 outline-none"
            placeholder="search"
            id="searchBar"
          ></input>
          <button className="bg-red-400">Searchs</button>
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
        <p
          onClick={() => {
            setisDark(!isDark);
            console.log(!isDark);
          }}
          className={` bg-green-400 flex items-center `}
        >
          {!isDark ? <FaSun /> : <FaMoon />}
          {!isDark ? "Dark" : "light"} Mode
        </p>
      </div>
    </div>
  );
};

export default Header;
