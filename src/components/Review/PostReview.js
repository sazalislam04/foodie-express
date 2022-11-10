import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PostReview = ({ handleSubmit }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user?.email ? (
        <>
          <div className="px-6 lg:px-20 w-full mx-auto lg:w-9/12">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
            >
              <div className="col-span-full">
                <label className="text-sm mb-2">Your Review</label>
                <textarea
                  placeholder="Your review"
                  name="review"
                  rows="5"
                  className="w-full p-5 rounded-xl focus:outline-yellow-400 border border-yellow-200 resize-none text-gray-900"
                  required
                ></textarea>
              </div>

              <div className="col-span-full">
                <label className="text-sm">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="w-full p-3 rounded-xl focus:outline-yellow-400 border border-yellow-200 resize-none text-gray-900"
                  required
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm">Your Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="email"
                  className="w-full p-3 rounded-xl focus:outline-yellow-400 border border-yellow-200 resize-none text-gray-900"
                  required
                />
              </div>
              <div className="">
                <button className="btn btn-warning">Add Review</button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <p className="text-center text-xl pt-10 mb-10">
          Please login to add a review!!{" "}
          <Link to="/login" className="text-yellow-500 hover:underline">
            Login
          </Link>
        </p>
      )}
    </>
  );
};

export default PostReview;
