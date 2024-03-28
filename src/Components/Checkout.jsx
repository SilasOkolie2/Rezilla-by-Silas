import React from "react";

const Checkout = () => {
  return (
    <>
<div className=" flex justify-around items-center ">
        <div className="text-center lg:text-left w-[466px] leading-[45px]">
          <h1 className="text-[19.4px]  font-semibold text-[#4361EE]">
            CHECKOUT OUR NEW
          </h1>
          <h1 className="text-[33px] w-[450px] font-bold  text-[#2B2B2B]">
            Latest Listed Properties
          </h1>
          <p className="py-1 text-[1.1rem] w-[460px] leading-[28px] text-[#2B2B2B]">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>

        <div className="flex gap-4 text-[16px]">
          <button className="btn btn-sm rounded-[20px]  text-[#4361EE] bg-white border-[#4361EE]">
            All
          </button>
          <button className="btn btn-sm rounded-[20px] text-white bg-[#4361EE] border-0">
            Sell
          </button>
          <button className="btn btn-sm rounded-[20px] text-[#4361EE] bg-white border-[#4361EE]">
            Rent
          </button>
        </div>
          </div>
        </>
        );
    };
    
    export default Checkout