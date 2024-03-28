import React from "react";

const Photos = () => {
  return (
    <>
      <div className="w-[90%] flex-col justify-center mx-auto">
        <div className="relative left-[99px] top-8 text-left">
          <h3 className="text-[20px] text-[#4361EE]">AREAS ACROSS THE TOWN</h3>
          <h2 className="text-[40px] font-medium text-black font-serif">Neighborhood Properties</h2>
        </div>
        
        <div className="flex justify-center pt-14">
          <div className="relative">
            <img src="public\Rectangle 17.png" alt="Image" />
            <div className="absolute bottom-10 left-14 p-4">
              <h1 className="text-[57px] text-opacity-50">216</h1>
              <h3 className="text-[20px] text-white">New York City, NY</h3>
            </div>
          </div>

          <div className="relative">
            <img src="public\Rectangle 25.png" alt="Image" />
            <div className="absolute bottom-10 left-14 p-4">
              <h1 className="text-[57px] text-opacity-50">141</h1>
              <h3 className="text-[20px] text-white">Houston, Tx</h3>
            </div>
          </div>

          <div className="relative">
            <img src="public\Rectangle 26.png" alt="Image" />
            <div className="absolute bottom-10 left-14 p-4">
              <h1 className="text-[57px] text-opacity-50">212</h1>
              <h3 className="text-[20px] text-white">San Diego, CA</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 items-center">
        <div className="relative">
          <img src="public\Rectangle 27.png" alt="Image" />
          <div className="absolute bottom-10 left-14 p-4">
            <h1 className="text-[57px] text-opacity-50 ">183</h1>
            <h3 className="text-[20px] text-white ">Philadelphia, PA</h3>
          </div>
        </div>

        <div className="relative">
          <img src="public\Rectangle 28.png" alt="Image" />
          <div className="absolute bottom-10 left-14 p-4">
            <h1 className="text-[57px] text-opacity-50 ">112</h1>
            <h3 className="text-[20px] text-white ">San Francisco, CA</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
