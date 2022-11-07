import React from "react";
import "../../../styles/slider.css";

const Slider = ({ item }) => {
  const { img, id, prev, next } = item;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carosule-img">
        <img src={img} alt="" className="w-full min-h-screen object-cover" />
      </div>
      <div className="absolute flex justify-center items-center transform -translate-y-1/2 text-center px-4 left-5 right-5 top-[40%] sm:top-[40%]">
        <h1 className="text-6xl lg:text-8xl font-semibold text-white uppercase">
          <span className="text-6xl text-left">Foodie Express </span>
          <br /> <span className="text-warning">Home Delivery</span>
        </h1>
      </div>
      <div className="absolute flex justify-center items-center transform -translate-y-1/2 left-5 right-5 top-[60%] mx-auto text-center w-1/2">
        <p className="text-gray-200 sm:block hidden text-md lg:text-lg ">
          People who love to eat are always the best people. To eat is a
          necessity, but to eat intelligently is an art
        </p>
      </div>
      <div className="absolute flex justify-center items-center transform -translate-y-1/2 text-left left-5 right-5 bottom-0 lg:bottom-12 ">
        <span className="loader"></span>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Slider;
