import React from "react";

const AddService = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.fname.value} ${form.lname.value}`;
    const email = form.email.value;
    const photo = form.photo.value;
    const address = form.address.value;
    const message = form.message.value;

    console.log(name, email, photo, address, message);
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
                First name
              </label>
              <input
                id="firstname"
                type="text"
                name="fname"
                placeholder="First name"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                name="lname"
                placeholder="Last name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-2 dark:border-gray-700 dark:text-gray-900"
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
                placeholder="Email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-2 dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="address"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-2 dark:border-gray-700 dark:text-gray-900"
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
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="message" className="text-sm">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="message"
                name="message"
                className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
              ></textarea>
            </div>
            <div className="">
              <button className="px-20 py-3 rounded-md font-medium text-xl bg-yellow-500">
                Added
              </button>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default AddService;
