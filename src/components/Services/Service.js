import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/Service.css";
const Service = ({ service }) => {
  const { _id, img, name, rating, price, description } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-md service">
      <figure>
        <img src={img} className="h-72 p-5 shadow-xl rounded" alt="Shoes" />
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
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/service/${_id}`}>
            <button className="btn btn-warning">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
