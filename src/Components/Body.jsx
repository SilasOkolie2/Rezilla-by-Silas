import React from "react";

const Body = () => {
  return (
    <>
      <div className="hero min-h-screen w-[100%] relative h-[750px] pb-10 bg-gradient-to-t from-[rgb(170,180,220)] to-[#4361EE bg-opacity-30] gap-6">
        <div className="hero-content w-[90%]  pb-14 flex flex-col lg:flex-row-reverse gap-20">
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

                  {/* <div className="flex justify-between card-body "> */}
                  <div className="flex p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="skyblue"
                        class="w-6 h-6">
                      
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                        />
                      </svg>
                      <a href="#" className="link text-[#03AEFD] pb-8">
                        Advanced Search
                      </a>
                  </div>

                {/* </div> */}

                
                 <button className="btn border-0 text-[16px] flex items-center bg-[#03AEFD] text-white rounded-[30px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  Search
                 </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex-col items-left w-[550px] h-[280px]">
            <div className="text-center lg:text-left">
              <h1 className="text-xl font-semibold text-[19.3px] text-[#4361EE]">
                REAL ESTATE
              </h1>
              <h1 className="text-[48px] w-[450px] font-bold leading-[55px] text-[#2B2B2B]">
                Find a perfect home you love..!
              </h1>
              <p className="py-1 text-[1.1rem] w-[460px] leading-[20px] text-[#2B2B2B]">
                Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
                Integer a dolor eu sapien sodales vulputate ac in purus.
              </p>
            </div>

            <div className="carousel w-[540px] h-[280px] rounded-[20px]">
              <div id="slide1" className="carousel-item relative w-full">
                <img src="public\Rectangle 15.png" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src="public\Rectangle 15.png" className="w-full" />
                <img src="public\Rectangle 15.png" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="public\luxury-classic-modern-bedroom-suite-hotel 1.png"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img src="public\Rectangle 15.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

       
       
      </div>
    </>
  );
};

export default Body;
