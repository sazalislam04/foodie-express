import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PostReview = () => {
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const review = form.review.value;

    const reviews = { name, email, review, rating };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
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

        <div>
          <select
            onClick={(e) => setRating(e.target.value)}
            className="btn btn-warning"
            required
          >
            <option value="2">Rating 2</option>
            <option value="3">Rating 3</option>
            <option value="4">Rating 4</option>
            <option value="5">Rating 5</option>
          </select>
        </div>
        <div className="">
          <button className="btn btn-warning">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PostReview;
