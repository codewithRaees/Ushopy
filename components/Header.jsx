import React from "react";
import logo from "../assets/logo.png";
import { IconName } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-around items-center main-header">
      {/* header logo section  */}
      <div className="left-header flex items-center">
        {" "}
        <img className="w-14" src={logo} alt="Logo" />
        <h1 className="font-bold text-2xl">Ushopy</h1>
      </div>
      {/* Header searchBar section  */}
      <div className="right-header">
        <div className="searchBar">
          {" "}
          <input
            type="search"
            className="border-2 outline-none"
            placeholder="search"
            id="searchBar"
          ></input>
          <FaBeer />
        </div>
      </div>
    </div>
  );
};

export default Header;
