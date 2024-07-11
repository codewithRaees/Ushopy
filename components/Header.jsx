import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaSun } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";

import { FaMoon } from "react-icons/fa6";
import NavBar from "./NavBar";

const Header = () => {
  const [ordertext, setOrderText] = useState(false);
  const [isDark, setisDark] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center bg-[#FFDCA9] px-20 md:py-1 main-header">
        {/* header logo section  */}

        <div className="left-header flex justify-between items-center pb-1 md:pb-2">
          {" "}
          <img className="w-10" src={logo} alt="Logo" />
          <h1 className="font-bold text-3xl">Ushopy</h1>
        </div>
        {/* Header searchBar section  */}
        <div className="relative right-header flex items-center">
          <div className="sm:block relative hidden group">
            <input
              type="text"
              placeholder="search"
              className="group-hover:w-[300px] border-gray-300 focus:border-1 focus:border-[#F49510] px-2 py-1 border rounded-full w-[200px] sm:w-[200px] focuse:w-[300px] transition-all duration-300 focus:outline-none"
            />
            <FaMagnifyingGlass className="group-hover:text-[#F49510] group-hover:text-primary top-1/2 right-3 absolute text-gray-500 -translate-y-1/2" />
          </div>
          <button
            className="flex items-center gap-3 bg-[#F49510] mx-3 px-5 rounded-full h-8 text-white transition-all duration-200 group"
            onClick={() => {
              setOrderText(!ordertext);
            }}
          >
            {" "}
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>
            <FaCartShopping className="text-2xl text-white" />
          </button>
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
              &nbsp; {!isDark ? "Dark" : "light"} Mode
            </p>
          </div>{" "}
        </div>
      </div>
      {/*  Main Menu */}
      <NavBar />
    </>
  );
};

export default Header;
