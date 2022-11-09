import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import PostReview from "./PostReview";
import ShowReview from "./ShowReview";

const Review = ({ rating, name: serviceName, price }) => {
  const { user } = useContext(AuthContext);
  const [serviceReview, setServiceReview] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const router = useParams();
  const { id } = router;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const review = form.review.value;

    const reviews = {
      id,
      name,
      email,
      review,
      rating,
      serviceName,
      price,
      photoURL: user.photoURL,
    };

    fetch(`http://localhost:5000/reviews?${user?.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          window.confirm("are you sure you want to add review");
          toast.success(data.message);
          setRefresh(true);
          form.reset();
        } else {
          toast.error(data.error);
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceReview(data);
        setRefresh(false);
      });
  }, [id, refresh]);

  return (
    <>
      <div className="text-center pt-16 mb-10 heading">
        <h2 className="text-5xl capitalize">reviews</h2>
      </div>
      <div>
        <PostReview handleSubmit={handleSubmit} />
      </div>
      {serviceReview.length === 0 ? (
        <>
          {user?.email && (
            <p className="text-center py-16 text-md">
              This Service has not reviewed yet! you can wish that can write a
              review
            </p>
          )}
        </>
      ) : (
        <>
          <div className="py-16 grid grid-cols-1 lg:grid-cols-2">
            {serviceReview?.map((item) => (
              <ShowReview key={item._id} item={item} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Review;
