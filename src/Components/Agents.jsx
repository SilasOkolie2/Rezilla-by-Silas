import React from "react";

const Agents = () => {
  return (
    <div className="pt-14 h-screen">
      <div className="bg-[#03AEFD] h-[260px] rounded-2xl ">
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
          <button className="btn border-0 bg-white  tex mt-4">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Agents;
