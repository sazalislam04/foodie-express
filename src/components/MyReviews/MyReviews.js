import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useSetTitle from "../../useSetTitle/useSetTitle";
import ReviewStatus from "./ReviewStatus";

const MyReviews = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useSetTitle("My Reviews");

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearar ${localStorage.getItem("foodie-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return userLogOut();
        }
        return res.json();
      })
      .then((data) => {
        setMyReviews(data);
      });
  }, [user?.email, userLogOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      `Are you sure you want to cancel this review id: ${id}`
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
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
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    console.log(id);
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
            {myReviews.map((myRev, index) => (
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
