import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import delivery from "../../assets/img/Delivery.png";
import Review from "../Review/Review";

const ServiceDetails = () => {
  const { _id, img, name, rating, price, description } = useLoaderData();

  return (
    <>
      <div className="bg-white">
        <div className="bg-gray-100 py-8 lg:py-0 lg:h-[350px] lg:flex items-center w-full px-6 lg:px-20 justify-between">
          <div className=" w-full lg:w-2/3">
            <h2 className="text-6xl">Service Details</h2>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link to="/" className="font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="font-medium">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="text-yellow-500 font-medium">
                    ServiceDetails
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <img
              className="w-full lg:h-72 overflow-hidden object-cover"
              src={delivery}
              alt=""
              data-aos="fade-left"
            />
          </div>
        </div>

        <div className="lg:flex justify-between px-6 py-16 lg:px-20">
          <div className="w-full lg:w-1/2">
            <img className="rounded-md lg:h-80" src={img} alt="" />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-yellow-500 text-xl flex items-center gap-1">
              {rating} <FaStar />
            </span>
            <h2 className="text-4xl mb-5 font-medium">{name}</h2>
            <p className="text-3xl text-yellow-500 mb-5 font-medium">
              ${price}
            </p>
            <p className="tracking-wide ">{description}</p>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/review/${_id}`} />
        <Review rating={rating} name={name} price={price} />
      </div>
    </>
  );
};

export default ServiceDetails;
