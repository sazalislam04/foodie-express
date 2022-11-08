import React from "react";
import { FaClock, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import img from "../../../assets/img/couple.webp";

const Features = () => {
  return (
    <div className="mt-20 bg-base-200">
      <div className="flex items-center gap-8 flex-col lg:flex-row">
        <img
          src={img}
          className="h-screen object-cover w-full lg:w-1/2"
          alt=""
        />
        <div className="p-10">
          <h1 className="text-5xl font-bold text-yellow-500 tracking-wide">
            sit at Home <br /> We Will Take Care
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="mt-5 mb-10 flex items-center justify-between">
            <div className="text-center relative">
              <span className="text-5xl flex items-center justify-center text-warning mb-2">
                <FaClock />
              </span>
              <h5 className="text-2xl">Fast Delivery</h5>
              <span>in 1 hour</span>
            </div>
            <div className="text-center">
              <span className="text-5xl text-warning flex items-center justify-center mb-2">
                <FaMapMarkerAlt />
              </span>
              <h2 className="text-2xl">Wide</h2>
              <span>Coverage Map</span>
            </div>
            <div className="text-center">
              <span className="text-5xl text-warning flex items-center justify-center mb-2">
                <FaUserAlt />
              </span>
              <h1 className="text-2xl">More Than</h1>
              <span>100 Couriers</span>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <button className="px-20 py-3 border border-yellow-500 font-semibold hover:bg-yellow-500 transition duration-300 hover:text-white ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
