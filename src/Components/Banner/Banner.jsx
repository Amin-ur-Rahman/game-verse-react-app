import React from "react";
import BannerSlide from "./BannerSlide";
import BannerRight from "./BannerRight";

const Banner = () => {
  return (
    <div className="lg:grid lg:grid-cols-12 flex flex-col border-2 w-full   gap-0 lg:px-10 bg-gray-800">
      <section className="lg:col-span-9  border overflow-hidden">
        <BannerSlide></BannerSlide>
      </section>

      <section className="lg:col-span-3 overflow-hidden">
        <BannerRight></BannerRight>
      </section>
    </div>
  );
};

export default Banner;
