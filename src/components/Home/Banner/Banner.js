import React from "react";
import slider1 from "../../../assets/banner-1.webp";
import slider2 from "../../../assets/banner-2.png";
import slider3 from "../../../assets/banner-3.avif";

import Slider from "./Slider";

const sliderItem = [
  {
    img: slider1,
    prev: 3,
    id: 1,
    next: 2,
  },
  {
    img: slider2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    img: slider3,
    prev: 2,
    id: 3,
    next: 1,
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full min-h-screen md:h-[592px] overflow-hidden">
      {sliderItem.map((item) => (
        <Slider key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Banner;
