import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useSetTitle from "../../useSetTitle/useSetTitle";
import ReviewStatus from "./ReviewStatus";

const MyReviews = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useSetTitle("My Reviews");

  useEffect(() => {
    fetch(
      `https://foodie-express-server.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearar ${localStorage.getItem("foodie-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return userLogOut();
        }
        return res.json();
      })
      .then((data) => {
        setMyReviews(data);
      });
  }, [user?.email, userLogOut, refresh]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      `Are you sure you want to cancel this review id: ${id}`
    );
    if (proceed) {
      fetch(`https://foodie-express-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(data.message);
            const rest = myReviews.filter((review) => review._id !== id);
            setMyReviews(rest);
          } else {
            toast.error(data.error);
          }
        });
    }
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const review = form.message.value;

    const updateReview = {
      name,
      email,
      review,
    };

    fetch(`https://foodie-express-server.vercel.app/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          const rest = myReviews.filter((review) => review._id !== id);
          const user = myReviews.find((review) => review._id === id);
          const result = [user, ...rest];
          setMyReviews(result);
          setRefresh(true);
          form.reset();
        } else {
          toast.error(data.error);
        }
      });
  };

  return (
    <>
      {myReviews.length === 0 ? (
        <div className="flex min-h-screen justify-center text-5xl bg-gray-900 text-white items-center ">
          No reviews were added
        </div>
      ) : (
        <>
          <div className="overflow-x-auto w-full px-6 bg-slate-50 lg:px-20">
            {myReviews.map((myRev) => (
              <ReviewStatus
                key={myRev._id}
                myRev={myRev}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default MyReviews;
