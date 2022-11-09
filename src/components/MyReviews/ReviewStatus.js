import React from "react";
import { FaTrash } from "react-icons/fa";
import avatar from "../../assets/img/avatar.png";

const ReviewStatus = ({ myRev, handleDelete, handleUpdate }) => {
  const { _id, review, name, email, serviceName, photoURL, price } = myRev;

  return (
    <>
      <tr>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost text-xl text-yellow-500"
          >
            <FaTrash />
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {photoURL ? (
                  <img src={photoURL} alt="" />
                ) : (
                  <img
                    className="w-16 h-16 object-cover rounded-full border"
                    src={avatar}
                    alt=""
                  />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="text-lg">{serviceName}</span>
          <br />
          <span className="text-yellow-500 text-md">{price}$</span>
        </td>
        <td className="">
          <div className="w-72 overflow-auto">{review}</div>
        </td>
        <th>
          <button
            onClick={() => handleUpdate(_id)}
            className="btn btn-ghost btn-xs"
          >
            Edit Review
          </button>
        </th>
      </tr>
    </>
  );
};

export default ReviewStatus;
