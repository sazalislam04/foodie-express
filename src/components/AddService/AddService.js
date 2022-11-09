import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useSetTitle from "../../useSetTitle/useSetTitle";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  useSetTitle("Add Service");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.serviceName.value;
    const email = form.email.value;
    const img = form.photo.value;
    const price = form.price.value;
    const description = form.message.value;

    const addService = { name, email, img, price, description, rating };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.error("already added service");
          return;
        }
        if (data.acknowledged) {
          toast.success("services added success");
        } else {
          toast.error("service not exists");
        }
      });
  };

  return (
    <div className="p-6 py-16 bg-slate-50 text-gray-50">
      <div className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium text-3xl">
              The <span className="text-yellow-500">Foodie</span> Express
            </p>
            <p className="text-xs">
              if you can wish that you added your service
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3"
          >
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Service Name
              </label>
              <input
                id="firstname"
                type="text"
                name="serviceName"
                placeholder="First name"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                required
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-2 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="price" className="text-sm">
                Service Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="price"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-2 dark:border-gray-700 dark:text-gray-900"
                required
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="photo" className="text-sm">
                Service Photo
              </label>
              <input
                id="photo"
                type="text"
                name="photo"
                placeholder="photoUrl"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-2 dark:border-gray-700 dark:text-gray-900"
                required
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="message" className="text-sm">
                Service Description
              </label>
              <textarea
                id="message"
                placeholder="Bio"
                name="message"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                required
              ></textarea>
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
              <button className="btn btn-warning">Added Services</button>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default AddService;
