import React from "react";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

import "../../styles/Service.css";
const Service = ({ service }) => {
  const { _id, img, name, rating, price, description } = service;

  return (
    <div className="card bg-base-100 shadow-xl rounded-md service">
      <figure>
        <PhotoProvider
          speed={() => 800}
          easing={(type) =>
            type === 2
              ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
              : "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }
        >
          <PhotoView src={img}>
            <img
              src={img}
              className="md:h-72 lg:p-5 shadow-xl rounded"
              alt="imgNotFound"
            />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <div className="flex items-center">
          <h2 className="card-title">{name}</h2>
          <p className="flex items-center text-xl justify-end">
            {rating}{" "}
            <span className="ml-1 text-yellow-500">
              <FaStar />
            </span>
          </p>
        </div>
        <p className="text-xl font-semibold text-warning">Price: {price}$</p>
        <p>
          {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-warning">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
