import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const Services = () => {
  return (
    <>
      <div className="flex flex-col border-2 h-[640px] justify-center gap-6 items-center bg-gradient-to-t from-[rgb(170,180,220)] to-[#4361EE bg-opacity-30] ">
        <div className="items-center py-4 flex flex-col justify-center gap-6">
          <h3 className="text-[20px] text-black font-semibold">
            Our Services{" "}
          </h3>
          <h3 className="text-[30px] text-black font-bold">
            Donec porttitor euismod dignissim
          </h3>
        </div>

        <div className="w-[80%] ">
          <div className="flex justify-center items-center gap-6">
            <div className="bg-white w-[340px] h-[362px] flex-col flex items-center justify-between border-0 rounded-[20px] shadow-md ring-1 ring-gray-300 p-8">
              <div className="flex items-center">
                <div className="h-[90px] w-[90px] flex items-center justify-center rounded-full bg-blue-500">
                  {/* House icon (replace this with your house icon) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="w-[40px] h-[39.9px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-[20px] text-black font-bold">
                Sell a New House
              </h3>
              <h4 className="text-[16px] text-center text-black w-[250px] h-[90px]">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.{" "}
              </h4>
            </div>

            <div className="bg-white w-[340px] h-[362px] flex-col flex items-center justify-between border-0 rounded-[20px] shadow-md ring-1 ring-gray-300 p-8">
              <div className="flex items-center">
                <div className="h-[90px] w-[90px] flex items-center justify-center rounded-full bg-blue-500">
                  {/* House icon (replace this with your house icon) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="w-[40px] h-[39.9px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-[20px] text-black font-bold">Rent a House</h3>
              <h4 className="text-[16px] text-center text-black w-[250px] h-[90px]">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.{" "}
              </h4>
            </div>

            <div className="bg-white w-[340px] h-[362px] flex-col flex items-center justify-between border-0 rounded-[20px] shadow-md ring-1 ring-gray-300 p-8">
              <div className="flex items-center">
                <div className="h-[90px] w-[90px] flex items-center justify-center rounded-full bg-blue-500 shadow-md">
                  {/* House icon (replace this with your house icon) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="w-[40px] h-[39.9px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-[20px] text-black font-bold">Buy a Home</h3>
              <h4 className="text-[16px] text-center text-black w-[250px] h-[90px]">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
