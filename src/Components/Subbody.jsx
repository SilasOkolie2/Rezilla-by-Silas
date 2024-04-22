import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Subbody = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-around p-16">
        <div
          className="flex flex-col items-center justify-center"
          data-aos="zoom-in-left"
        >
          <div className="text-16px leading-24px">
            <span> Trusted by 100+ Companies across the globe! </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 p-6 filter grayscale">
            <div className="carousel-item" data-aos="slide-right">
              <img src="public/image 1.png" alt="google" />
            </div>
            <div className="carousel-item" data-aos="slide-right">
              <img src="public/image 2.png" alt="amazon" />
            </div>
            <div className="carousel-item" data-aos="slide-right">
              <img src="public/image 3.png" alt="logitech" />
            </div>
            <div className="carousel-item" data-aos="slide-right">
              <img src="public/image 4.png" alt="spotify" />
            </div>
            <div className="carousel-item" data-aos="slide-right">
              <img src="public/image 6.png" alt="netflix" />
            </div>
            <div className="carousel-item" data-aos="slide-right">
              <img src="public/image 5.png" alt="samsung" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subbody;
