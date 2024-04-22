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
      <div className="w-[350px] h-[250px]">
        <img
          src="public\Rectangle 27.png"
          alt="Image 1"
          className="w-full h-full"
        />
      </div>
      <div className="w-[350px] h-[250px]">
        <img
          src="public\Rectangle 26.png"
          alt="Image 2"
          className="w-full h-full"
        />
      </div>
      <div className="w-[350px] h-[250px]">
        <img
          src="public\Rectangle 28.png"
          alt="Image 3"
          className="w-full h-full"
        />
      </div>
      <div className="w-[350px] h-[250px]">
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
      <div className="hero min-h-screen w-[100%] relative h-[750px] pb-10 bg-gradient-to-t from-[rgb(170,180,220)] to-[#4361EE bg-opacity-30] gap-6">
        <div className="hero-content pb-14 flex-wrap gap-20 ">
          <div className="flex-col items-left w-[550px] h-[300px]">
            <div className="text-center lg:text-left p-">
              <h1 className="text-lg sm:text-xl font-semibold text-[19.3px] text-[#4361EE]">
                REAL ESTATE
              </h1>
              <h1 className="text-[50px] w-full lg:w-[500px] font-bold leading-[60px] text-[#2B2B2B]">
                Find a perfect home you love..!
              </h1>
              <p className="py-1 text-base text-[1.1rem] leading-[20px] sm:leading-[24px] w-full sm:w-[460px] text-[#2B2B2B]">
                Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
                Integer a dolor eu sapien sodales vulputate ac in purus.
              </p>
            </div>
            <Carousel />
          </div>

          {/* FORM */}
          <div className="card w-[580px] h-[285px] max-w-sm shadow-2xl">
            <div className=" bg-white rounded-[30px] ">
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
