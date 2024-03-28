import React from 'react'

const Whoweare = () => {
  return (
    <>
        <div className="flex justify-center items-center p-10">
          <div className="flex-col items-center justify-between">
            <div className="text-center lg:text-left w-[500px] leading-[45px]">
              <h1 className="text-xl  font-semibold text-[19.3px] text-[#4361EE]">
                WHO ARE WE
              </h1>
              <h1 className="text-[35px] w-[450px] font-bold  text-[#2B2B2B]">
                Assisting individuals in locating the appropriate real estate.
              </h1>
              <p className="py-1 text-[1.1rem] w-[460px] leading-[28px] text-[#2B2B2B]">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus. Nulla convallis ipsum molestie nibh malesuada,
                ac malesuada leo volutpat.
              </p>
            </div>
            <div className="w-[500px]">
              <div className="flex items-center justify-between card w-96 shadow-xl">
                <div className="flex items-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="skyblue"
                    class="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-line
                      join="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  <div className="card-body">
                    <h2 className="card-title text-[#4361EE] font-bold">
                      Donec porttitor euismod
                    </h2>
                    <p className="font-semibold">
                      Nullam a lacinia ipsum, nec dignissim purus. Nulla
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-col items-center justify-between card w-96 shadow-xl">
                <div className="flex items-center p-2 w-[380px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="skyblue"
                    class="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-line
                      join="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  <div className="card-body">
                    <h2 className="card-title text-[#4361EE] font-bold">
                      Donec porttitor euismod
                    </h2>
                    <p className="font-semibold">
                      Nullam a lacinia ipsum, nec dignissim purus. Nulla
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center m-[-35px] ">
            <div>
              <img
                src="public\Rectangle 14.png"
                className="mb-[-80px] mr-[-20px]"
              />
            </div>
          </div>

          <div>
            <div className="flex-col items-center justify-center">
              <img src="public/Rectangle 15.png" className="mb-[-40px]" />
              <div className="w-[330px] ">
                <img src="public\luxury-classic-modern-bedroom-suite-hotel 1.png" />
              </div>
            </div>
          </div>
          </div> 
    </>
  );
};

export default Whoweare;
