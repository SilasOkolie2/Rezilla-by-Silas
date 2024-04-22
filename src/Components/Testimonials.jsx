import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="flex justify-around flex-wrap">
        <div className="text-left w-[415px] flex-col flex gap-10">
          <h3 className="text-[20px] text-[#4361EE] pt-8">TESTIMONIALS</h3>
          <h2 className="text-[40px] h-[75px] w-[415px] font-[600] text-black font-serif">
            Look What Our Customers Say
          </h2>
          <p className="text-[20px] text-black w-[415px]">
            Fusce venenatis tellus a felis scelerisque, non pulvinar est
            pellentesque.
          </p>
          <div className="flex items-center gap-10">
            <img src="public\Frame 58.png" />
            <img src="public\Frame 57.png" />
          </div>
        </div>

        <div className="p-8 flex-col gap-6 shadow-xl leading-8">
          <div className="pb-14">
            <img src="public\“.png" />
            <h3 className="w-[380px] h-[130px] pt-4">
              I highly recommend Jodi J. Appleby. She was attentive to our needs
              and worked tirelessly to find us the perfect home. We couldn't be
              happier with our new place!
            </h3>
          </div>

          <div className="flex justify-around">
            <img src="public\Ellipse 15.png" />

            <h3>Barbara D. Smith </h3>

            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
