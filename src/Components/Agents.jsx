import React from "react";

const Agents = () => {
  return (
    <div className="pt-14 p-14">
      <div className="bg-[#6fb1cf] h-[260px] rounded-2xl ">
        <div className="flex justify-around items-center">
          <div className="relative bottom-11">
            <img src="/unsplash_7uoMmzPd2JA.png" alt="Agent" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Become An Agent
            </h2>
            <p className="text-white max-w-sm">
              Fusce venenatis tellus a felis scelerisque. venenatis tellus a
              felis scelerisque.
            </p>
          </div>
          <button className="btn border-0 bg-white text-blue-500  tex mt-4">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Agents;
