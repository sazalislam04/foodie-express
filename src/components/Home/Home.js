import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSetTitle from "../../useSetTitle/useSetTitle";
import Service from "../Services/Service";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import SectionHeading from "./SectionHeading/SectionHeading";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  useSetTitle("Home");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://foodie-express-server.vercel.app/home-services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Banner />
      <SectionHeading />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-16 lg:px-20">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>

      <div className="text-center pb-10">
        <Link to="/services">
          {" "}
          <button className="px-20 py-3 border border-yellow-500 font-semibold hover:bg-yellow-500 transition duration-300 hover:text-white ">
            View All
          </button>
        </Link>
      </div>
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
