import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-gray-200 text-base-content">
        <aside>
          <div className="flex items-center gap-4">
            <img
              src="public/Vector.png"
              className="rounded-full p-4 bg-blue-500"
            />
            <p className="text-black text-[20px] font-bold">Rezilla</p>
          </div>
          <a className="text-right text-base leading-22 text-black">
            Rezilla, 18 Grattan St, Brooklyn
          </a>
          <div className="p-2 text-black flex items-center gap-2"> 
             <FaLocationDot className="text-red"/>
            +1 206-214-2298
          </div>
          <div className="p-2 text-black flex items-center gap-2"> 
            <GrMail />
            donniesaico@gmail.com </div>
        </aside>
        <nav className="text-black font-semibold">
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Listings</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Become a Agent</a>
        </nav>
        <nav className="text-black font-semibold">
          <h6 className="footer-title">Discoverly</h6>
          <a className="link link-hover">Canada</a>
          <a className="link link-hover">United States</a>
          <a className="link link-hover">Germany</a>
          <a className="link link-hover">Africa</a>
          <a className="link link-hover">India</a>
        </nav>

        

        <div className="flex-col gap-4">
          <form className="">
            <h6 className="footer-title text-black font-semibold"> Subscribe to our Newsletter!</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-black font-semibold">Email Address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input bg-slate-50 input-bordered join-item"
                />
                <button className="btn rounded-full bg-blue-500 border-0 text-white join-item"><FaArrowRight /></button>
              </div>
            </fieldset>
            <nav className="">
              <h6 className="footer-title pt-6 text-black font-semibold">Follow Us on </h6>
              <div className="flex gap-4">
                <a>
                <FaLinkedinIn className="text-blue-500"/>
                </a>
                <a>
                <FaFacebookF className="text-blue-500" />
                </a>
                <a>
                <FaInstagram className="text-[#E4405F]"/>
                </a>
              </div>
            </nav>
          </form>
        </div>
      </footer>

      <footer className="footer bg-black footer-center gap-6 p-4 text-base-content">
        <aside className="flex items-center Justify-around gap 4">
          <p>© Rezilla - All rights reserved </p>
          <p> Terms and Conditions </p>
          <p>Privacy Policy</p>
          <p>Disclaimer </p>
        </aside>
      </footer>
    </>
  );
};
export default Footer;
