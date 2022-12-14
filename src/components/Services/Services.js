import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import animation from "../../assets/animation/animation.json";
import useSetTitle from "../../useSetTitle/useSetTitle";
import Service from "./Service";
const Services = () => {
  const [services, setServices] = useState([]);
  useSetTitle("Services");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://foodie-express-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="bg-white">
      <div className="lg:flex items-center justify-center px-6 lg:px-20 lg:h-96 bg-gray-100">
        <div className="w-full py-5 lg:py-0 lg:w-1/2">
          <h2 className="text-6xl text-gray-800">Our Services</h2>
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to="/" className="font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-yellow-500 font-medium">Services</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mx-auto">
          <Lottie
            className="h-full lg:h-80  w-full"
            animationData={animation}
            loop={true}
          />
        </div>
      </div>
      {loading ? (
        <span className="w-full flex items-center justify-center ">
          <ClipLoader size={70} color="#facc15" />
        </span>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-16 lg:px-20">
          {services?.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
