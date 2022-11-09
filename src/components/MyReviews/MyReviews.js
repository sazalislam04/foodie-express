import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewStatus from "./ReviewStatus";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      });
  }, [user?.email]);

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

  const handleUpdate = (id) => {
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
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Delete</th>
                  <th>Review User</th>
                  <th>Service Details</th>
                  <th>My Review</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myReviews.map((myRev) => (
                  <ReviewStatus
                    key={myRev._id}
                    myRev={myRev}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default MyReviews;
