import React, { useState } from "react";
import { ContactIcon, EmailIcon, LocationIcon, PhoneIcon } from "./Svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; // Importing menu icons

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Listings' },
    { id: 4, text: 'Services' },
    { id: 5, text: 'Blogs' },
  ];

  return (
    <div className="fixed sm:pt-14  top-0 w-full z-10">
      {/* Bottom Navbar */}
      <div className="navbar bg-white gap-14 flex justify-around items-center px-4 py-2">
        {/* Navigation Links */}
        <ul className="space-x-4 text-[#2B2B2B] text-lg font-semibold cursor-pointer hidden sm:flex">
          {navItems.map(item => (
            <li key={item.id}>
              <a className="hover:text-red-900">{item.text}</a>
            </li>
          ))}
        </ul>

        {/* Circle with house icon */}
        <div className="flex items-center">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-500">
            {/* House icon (replace this with your house icon) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          {/* Rezilla text */}
          <h2 className="p-2 text-[#2B2B2B] text-lg font-bold">Rezilla</h2>
        </div>

        {/* Login/Register and Add Listings */}
        <div className="hidden sm:flex">
          <div className="flex items-center">
            <ContactIcon />
            <a className="mr-4 cursor-pointer text-black font-semibold">Login/Register</a>
            <a className="btn bg-[#03AEFD]  border-0 text-white rounded-full px-4 py-2">Add Listings</a>
          </div>
        </div>

        {/* Mobile Navigation Menu Icon */}
        <div className="text-3xl font-extrabold lg:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'ease-in-out duration-500 fixed bottom-70 left-0 w-full bg-white border-t border-gray-300'
            : 'ease-in-out duration-500 fixed bottom-0 left-0 w-full h-0 overflow-hidden'
        }
      >
        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className="p-4 border-t border-gray-300 hover:bg-gray-100 cursor-pointer"
          >
            <a>{item.text}</a>
          </li>
        ))}
        <div className=" p-4">
          <div className="flex items-center">
            <ContactIcon />
            <a className="mr-4 cursor-pointer text-black font-semibold">Login/Register</a>
            <a className="btn bg-[#03AEFD]  border-0 text-white rounded-full px-4 py-2">Add Listings</a>
          </div>
        </div>
      </ul>
      
    </div>
  );
};

export default Navbar;
