import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import client1 from "../../../assets/img/client-1.jpg";
import client2 from "../../../assets/img/client-2.jpg";

import "../../../styles.css";

const Testimonials = () => {
  return (
    <>
      <div className="py-5">
        <div>
          <div className="text-center pt-20">
            <span className="text-yellow-400 text-lg">Testimonials</span>
            <h2 className="text-gray-900 heading text-4xl uppercase font-semibold">
              Why Our Clients Choose Us
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="Swiper"
        >
          <SwiperSlide className="mb-5">
            <div className="">
              <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <span className="text-4xl text-yellow-500">
                  <FaQuoteLeft />
                </span>
                <p className="px-6 py-2 text-xl w-full md:w-9/12 mx-auto text-center text-gray-800">
                  "Veniam quidem animi ea maxime odit fugiat architecto
                  perferendis ipsum perspiciatis iusto, provident qui nam
                  dolorum corporis."
                </p>
                <div className="w-24 h-24">
                  <img
                    src={client1}
                    alt=""
                    className="object-cover rounded-full"
                  />
                </div>
                <span className="text-xl">Mark Smith</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="">
              <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                <span className="text-4xl text-yellow-500">
                  <FaQuoteLeft />
                </span>
                <p className="px-6 py-2 text-xl text-center w-full md:w-9/12 mx-auto text-gray-700">
                  "Veniam quidem animi ea maxime odit fugiat architecto
                  perferendis ipsum perspiciatis iusto, provident qui nam
                  dolorum corporis."
                </p>
                <div className="w-24 h-24">
                  <img
                    src={client2}
                    alt=""
                    className="object-cover rounded-full"
                  />
                </div>
                <span className="text-xl">Smith Lora</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
