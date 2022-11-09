import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import avatar from "../../assets/img/avatar.png";

const ReviewStatus = ({ myRev, handleDelete, handleUpdate }) => {
  const [toggle, setToggle] = useState(false);
  const { _id, review, name, email, serviceName, photoURL, price, rating } =
    myRev;

  return (
    <>
      <div className="container flex flex-col shadow-md gap-8 p-6 mx-auto divide-y rounded-md divide-gray-700  text-gray-800">
        <div className="">
          <div className="md:flex justify-between p-4">
            <div className="lg:flex lg:space-x-4">
              <div>
                {photoURL ? (
                  <img
                    src={photoURL}
                    className="w-16 h-16 object-cover rounded-full border"
                    alt=""
                  />
                ) : (
                  <img
                    className="w-16 h-16 object-cover rounded-full border"
                    src={avatar}
                    alt=""
                  />
                )}
              </div>
              <div className="lg:flex py-2 lg:py-0 flex-cols items-center gap-2 lg:gap-20">
                <div>
                  <h4 className="font-bold text-xl">{name}</h4>
                  <span className="text-sm text-gray-700">{email}</span>
                </div>
                <div>
                  <h2 className="text-2xl">{serviceName}</h2>
                  <p className="text-xl text-yellow-500">{price}$</p>
                </div>
              </div>
            </div>
            <div className="flex items-center lg:space-x-2 text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <button className="text-xl mr-4 font-bold">{rating}</button>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-ghost text-xl text-yellow-500"
              >
                <FaTrash />
              </button>
              <button
                onClick={() => setToggle(!toggle)}
                className="btn btn-ghost text-2xl text-yellow-500"
              >
                <FaEdit />
              </button>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm text-gray-400">
            <span>Review</span>
            <p className="text-md text-gray-700">{review}</p>
          </div>
        </div>
        <div className="py-10">
          {toggle && (
            <>
              <form
                onSubmit={(e) => handleUpdate(e, _id)}
                className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
              >
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm">
                    Name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="serviceName"
                    placeholder="First name"
                    className="w-full p-2 rounded-md border focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                    required
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    defaultValue={email}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-md focus:ring border focus:ring-opacity-75 focus:ring-violet-400 p-2 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="message" className="text-sm">
                    Review Description
                  </label>
                  <textarea
                    id="message"
                    placeholder="Bio"
                    name="message"
                    className="w-full p-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                    required
                  ></textarea>
                </div>
                <div className="">
                  <button className="btn btn-warning">Submit</button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ReviewStatus;
