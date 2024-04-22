import React from "react";
import { EngineerIcon, SearchIcon } from "./Svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      
      <div className="sm:w-[350px] h-[250px]  w-[100px] ">
        <img
          src="public\Rectangle 27.png"
          alt="Image 1"
          className="w-full h-full"
        />
      </div>
      <div className="sm:w-[350px] h-[250px] w-[100px]">
        <img
          src="public\Rectangle 26.png"
          alt="Image 2"
          className="w-full h-full"
        />
      </div>
      <div className="sm:w-[350px] h-[250px] w-[100px]">
        <img
          src="public\Rectangle 28.png"
          alt="Image 3"
          className="w-full h-full"
        />
      </div>
      <div className="sm:w-[350px] h-[250px] w-[100px]">
        <img
          src="luxury-classic-modern-bedroom-suite-hotel 1.png"
          alt="Image 4"
          className="w-full h-full"
        />
      </div>
    </Slider>
  );
};
const Body = () => {
  return (
    <>
      <div className="hero min-h-screen w-[100%] pb-16 sm:h-[750px] pt-20 sm:pt-0 sm:pb-10 bg-gradient-to-t from-[rgb(170,180,220)] to-[#4361EE bg-opacity-30] gap-6">
        <div className=" sm:pt-10 flex sm:flex-row flex-col sm:gap-10 gap-40 p-5">
          <div className="flex flex-col items-left justify-start items- w-[550px] h-[300px]">
            <div className="text-left lg:text-left ">
              <h1 className="text-lg sm:text-xl font-semibold text-[19.3px] text-[#4361EE]">
                REAL ESTATE
              </h1>
              <h1 className="sm:text-[50px] text-[22px] w-full lg:w-[500px] font-bold leading-[60px] text-[#2B2B2B]">
                Find a perfect home you love..!
              </h1>
              <p className="py-1 text-base text-[1.1rem] leading-[25px]  sm:leading-[24px] w-[360px] sm:w-[460px] text-[#2B2B2B]">
                Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
                Integer a dolor eu sapien sodales vulputate ac in purus.
              </p>
            </div>
            <div className="sm:w-[450px] h-[250px] w-[350px]">
            <Carousel />
            </div>
          </div>

          {/* FORM */}
          <div className=" flex flex-col">
            <div className=" card w-[350px] h-[450px] shadow-2xl bg-white rounded-[30px]">
              <form className="card-body flex flex-col space-y-4">
                <div className="flex justify-center border-b border-gray-500 gap-9">
                  <label className="label">
                    <span className="label-text text-[16px] font-semibold text-[#03AEFD] py-2 px-3 border-b border-[#03AEFD] cursor-pointer">
                      For Sale
                    </span>
                  </label>
                  <label className="label">
                    <span className="label-text text-[16px] font-semibold cursor-pointer">
                      For Rent
                    </span>
                  </label>
                </div>

                <div className="form-control">
                  <input
                    type="text"
                    placeholder="New York, San Francisco, etc."
                    className="input input-bordered font-bold bg-[#D4D4D4]"
                    required
                  />
                </div>

                <div className="form-control">
                  <select
                    className="select select-bordered font-bold bg-[#D4D4D4]"
                    required
                  >
                    <option>Select Property Type</option>
                    <option>2</option>
                  </select>
                </div>

                <div className="form-control">
                  <select
                    className="select select-bordered font-bold pb-2-14 bg-[#D4D4D4]"
                    required
                  >
                    <option>Select Rooms</option>
                    <option>2</option>
                  </select>
                  <div className="flex p-2">
                    <EngineerIcon />
                    <a href="#" className="link text-[#03AEFD] pb-8">
                      Advanced Search
                    </a>
                  </div>
                  <button className="btn border-0 text-[16px] flex items-center bg-[#03AEFD] text-white rounded-[30px]">
                    <SearchIcon />
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
