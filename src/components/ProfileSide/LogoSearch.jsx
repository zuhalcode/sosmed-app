import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import logo from "../../img/logo.png";

const LogoSearch = () => {
  return (
    <div className="flex gap-3">
      <img src={logo} alt="" className="" />
      <div className="flex bg-input rounded-lg p-1">
        <input
          type="text"
          className="bg-transparent border-none w-[90%] "
          name=""
          id=""
          placeholder="#Explore"
        />
        <div className="flex items-center justify-center bg-linear-100 rounded-md text-white p-1 ">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
