import React from "react";
import { FaGripfire } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa";

const Buildings = () => {
  return (
    <>
      <div className=" flex justify-center pb-4">
        <div className="w-[90%] pt-8 flex justify-center gap-6 items-center">
          <div className="carousel carousel-end rounded-box flex-col gap-2">
            <div className="carousel-item">
              <img src="public\Rectangle 18.png" alt="House" />
              <div className="absolute rounded-full  bg-black bg-opacity-50 text-white py-2 px-4">
                <div className="flex items-center justify-center">
                  <div>
                    <FaGripfire style={{ color: "red" }} />
                  </div>
                  <span>Popular</span>
                </div>
              </div>
            </div>
            <h3 className="text-[23px] text-black">$5,970</h3>
            <p className="text-[18px] font-semibold text-black">
              Tranquil Haven in the Woods
            </p>
            <p className="text-[15px] font-semibold">
              103 Wright CourtBurien, WA 98168
            </p>
            <div className="flex gap-4">
              <div className="text-[16px] font-[400] flex gap-2 text-black">
                <div>
                  <FaBed style={{ color: "black" }} />
                </div>
                <span>4 Beds</span>
              </div>
              <div className="text-[16px] text-black font-[400] flex gap-2">
                <div>
                  <FaBath style={{ color: "black" }} />
                </div>
                <span>3 Baths</span>
              </div>
            </div>
          </div>

          <div className="carousel carousel-end rounded-box flex-col gap-2">
            <div className="carousel-item">
              <img src="public\Rectangle 19.png" alt="House" />
              <div className="absolute rounded-full  bg-black bg-opacity-50 text-white py-2 px-4">
                <div className="flex items-center justify-center">
                  <div>
                    <FaGripfire style={{ color: "red" }} />
                  </div>
                  <span>New Listing</span>
                </div>
              </div>
            </div>
            <h3 className="text-[23px] text-black">$1,970</h3>
            <p className="text-[18px] font-semibold text-black">
              Serene Retreat by the lake
            </p>
            <p className="text-[15px] font-semibold">
              1964 Jehovah Drive, VA 22406
            </p>
            <div className="flex gap-4">
              <div className="text-[16px] font-[400] flex gap-2 text-black">
                <div>
                  <FaBed style={{ color: "black" }} />
                </div>
                <span>4 Beds</span>
              </div>
              <div className="text-[16px] text-black font-[400] flex gap-2">
                <div>
                  <FaBath style={{ color: "black" }} />
                </div>
                <span>3 Baths</span>
              </div>
            </div>
          </div>

          
          <div className="carousel carousel-end rounded-box flex-col gap-2">
            <div className="carousel-item">
              <img src="public\Rectangle 20.png" alt="House" />
              <div className="absolute rounded-full  bg-black bg-opacity-50 text-white py-2 px-4">
                <div className="flex items-center justify-center">
                  <div>
                    <FaGripfire style={{ color: "red" }} />
                  </div>
                  <span>Discounted Price</span>
                </div>
              </div>
            </div>
            <h3 className="text-[23px] text-black">$3,450</h3>
            <p className="text-[16px] font-semibold text-black">
            Chaming Cottage in the Meadow
            </p>
            <p className="text-[13px] font-semibold">
            11508 Centennial Farm RoadHarlan, 51537
            </p>
            <div className="flex gap-4">
              <div className="text-[16px] font-[400] flex gap-2 text-black">
                <div>
                  <FaBed style={{ color: "black" }} />
                </div>
                <span>4 Beds</span>
              </div>
              <div className="text-[16px] text-black font-[400] flex gap-2">
                <div>
                  <FaBath style={{ color: "black" }} />
                </div>
                <span>3 Baths</span>
              </div>
            </div>
          </div>

          <div className="carousel carousel-end rounded-box flex-col gap-2">
            <div className="carousel-item">
              <img src="public\Rectangle 18.png" alt="House" />
              <div className="absolute rounded-full  bg-black bg-opacity-50 text-white py-2 px-4">
                <div className="flex items-center justify-center">
                  <div>
                    <FaGripfire style={{ color: "red" }} />
                  </div>
                  <span>Popular</span>
                </div>
              </div>
            </div>
            <h3 className="text-[23px] text-black">$2,389</h3>
            <p className="text-[18px] font-semibold text-black">
              Grand Estate
            </p>
            <p className="text-[15px] font-semibold">
              103 Wright CourtBurien, WA 98168
            </p>
            <div className="flex gap-4">
              <div className="text-[16px] font-[400] flex gap-2 text-black">
                <div>
                  <FaBed style={{ color: "black" }} />
                </div>
                <span>4 Beds</span>
              </div>
              <div className="text-[16px] text-black font-[400] flex gap-2">
                <div>
                  <FaBath style={{ color: "black" }} />
                </div>
                <span>3 Baths</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buildings;
