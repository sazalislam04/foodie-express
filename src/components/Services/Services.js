import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import animation from "../../assets/animation/animation.json";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="">
      <div className="lg:flex  items-center justify-center px-8 lg:px-20 bg-gray-100">
        <div className="w-full py-5 lg:py-0 lg:w-1/2">
          <h2 className="text-6xl text-gray-800">Our Services</h2>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-yellow-500">Services</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 mx-auto">
          <Lottie
            className="h-full lg:h-80 w-full"
            animationData={animation}
            loop={true}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 lg:px-20 py-16">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
