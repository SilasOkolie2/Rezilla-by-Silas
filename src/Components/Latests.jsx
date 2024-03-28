import React from "react";

const Latests = () => {
  return (
    <>
      <div className="bg-[#03AEFD] h-[650px] p-6  ">
        <div className="text-center">
          <h3 className="text-[20px] text-white">WHAT'S TRENDING</h3>
          <h2 className="text-[40px] font-medium text-white font-serif">
            Latest Blogs & Posts
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="carousel rounded-box ">
            <div className="carousel-item flex-col justify-center">
              <div className="relative">
                <img src="public\Rectangle 35.png" alt="Image" />
                <div
                  className="absolute w-[47px] h-[45px] top-5 left-14 px-1.5 text-center bg-white "
                  style={{
                    borderBottomLeftRadius: "6px",
                    borderBottomRightRadius: "6px",
                  }}
                >
                  <h1 className="text-20px text-black font-bold">28</h1>
                  <h3 className="text-16px text-black ">Tue</h3>
                </div>
              </div>

              <div className="flex flex-col justify-center pl-6">
                <a className="link w-[340px] text-white link-hover text-[27px]">
                  Top 10 Home Buying Mistakes to Avoid
                </a>
                <a className="link w-[340px] link-hover text-[16px] text-white">
                  Etiam eget elementum elit. Aenean dignissim dapibus vestibulum
                </a>
              </div>
            </div>

            <div className="carousel-item  flex-col justify-center">
              <div className="relative">
                <img src="public\Rectangle 36.png" alt="Image" />
                <div
                  className="absolute w-[47px] h-[45px] top-5 left-14 px-1.5 text-center bg-white overflow-hidden"
                  style={{
                    borderBottomLeftRadius: "6px",
                    borderBottomRightRadius: "6px",
                  }}
                >
                  <h1 className="text-20px text-black font-bold">28</h1>
                  <h3 className="text-16px text-black ">Tue</h3>
                </div>
              </div>

              <div className="flex flex-col justify-center pl-6">
                <a className="link w-[340px] text-white link-hover text-[27px]">
                  Top 10 Home Buying Mistakes to Avoid
                </a>
                <a className="link w-[340px] link-hover text-[16px] text-white">
                  Etiam eget elementum elit. Aenean dignissim dapibus vestibulum
                </a>
              </div>
            </div>

            <div className="carousel-item  flex-col justify-center">
              <div className="relative">
                <img src="public\Rectangle 37.png" alt="Image" />
                <div
                  className="absolute w-[47px] h-[45px] top-5 left-14 px-1.5 text-center bg-white overflow-hidden"
                  style={{
                    borderBottomLeftRadius: "6px",
                    borderBottomRightRadius: "6px",
                  }}
                >
                  <h1 className="text-20px text-black font-bold">28</h1>
                  <h3 className="text-16px text-black ">Tue</h3>
                </div>
              </div>

              <div className="flex flex-col justify-center pl-6">
                <a className="link w-[340px] text-white link-hover text-[27px]">
                  Top 10 Home Buying Mistakes to Avoid
                </a>
                <a className="link w-[340px] link-hover text-[16px] text-white">
                  Etiam eget elementum elit. Aenean dignissim dapibus vestibulum
                </a>
              </div>
            </div>

            <div className="carousel-item  flex-col justify-center">
              <div className="relative">
                <img src="public\Rectangle 35.png" alt="Image" />
                <div
                  className="absolute w-[47px] h-[45px] top-5 left-14 px-1.5 text-center bg-white overflow-hidden"
                  style={{
                    borderBottomLeftRadius: "6px",
                    borderBottomRightRadius: "6px",
                  }}
                >
                  <h1 className="text-20px text-black font-bold">28</h1>
                  <h3 className="text-16px text-black ">Tue</h3>
                </div>
              </div>

              <div className="flex flex-col justify-center pl-6">
                <a className="link w-[340px] text-white link-hover text-[27px]">
                  Top 10 Home Buying Mistakes to Avoid
                </a>
                <a className="link w-[340px] link-hover text-[16px] text-white">
                  Etiam eget elementum elit. Aenean dignissim dapibus vestibulum
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Latests;
