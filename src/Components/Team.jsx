import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="text-center pt-8">
          <h3 className="text-[20px] text-[#4361EE]">INTRODUCE YOURSELF TO</h3>
          <h2 className="text-[40px] font-medium text-black font-serif">
            Our Team of Experts
          </h2>
        </div>

        <div className="flex justify-center gap-10 pb-8 items-center" data-aos="zoom-in-left">
          <div className="flex flex-col gap-4">
            <img src="public\Rectangle 29.png" alt="Brendom" />
            <div className="text-center">
              <h3 className="text-[27px] text-black">Brendom M</h3>
              <h4 className="text-[16px] text-[#4361EE]">CEO & Founder</h4>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <img src="public\Rectangle 30.png" alt="Brendom" />
            <div className="text-center">
              <h3 className="text-[27px] text-black">Jodi J. Appleby </h3>
              <h4 className="text-[16px] text-[#4361EE]">Real Estate Developer</h4>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <img src="public\Rectangle 31.png" alt="Brendom" />
            <div className="text-center">
              <h3 className="text-[27px] text-black">Justin S. Meza </h3>
              <h4 className="text-[16px] text-[#4361EE]">Listing Agent</h4>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <img src="public\Rectangle 29.png" alt="Brendom" />
            <div className="text-center">
              <h3 className="text-[27px] text-black">Susan T. Smith</h3>
              <h4 className="text-[16px] text-[#4361EE]">Buyer's Agent</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;