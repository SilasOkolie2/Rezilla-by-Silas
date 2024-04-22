import React from "react";
import { ContactIcon, EmailIcon, LocationIcon, PhoneIcon } from "./Svg";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

  return (
    <div className="fixed top-0 w-full z-10 hidden sm:block">
      <div className="navbar bg-[#03aefd] sm:justify-around gap-14 sm:items-center hidden sm:flex">
        {/* Left side */}
        <div className="flex items-center ">
          <LocationIcon />
          <p className="text-white ml-2">Rezilla, 18 Grattan St, Brooklyn</p>
        </div>

        {/* Right side */}
        <div className="flex items-center">
          <PhoneIcon />
          <p className="text-white ml-2">+1 206-214-2298</p>
          <EmailIcon />
          <p className="text-white ml-2">donniesaico@gmail.com</p>
        </div>

      </div>

      </div>
  );
};

export default Navbar;
