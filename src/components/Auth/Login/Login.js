import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import login from "../../../assets/img/Login.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { userLogin, googleSignin } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        toast.success("Login Success");
        setError("");
      })
      .catch((error) => setError(error));
  };

  const handleGoogleLogin = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => setError(error));
  };

  return (
    <div className="py-16 bg-slate-50">
      <div className="lg:flex mx-auto justify-between items-center container px-6">
        <div>
          <img
            src={login}
            alt=""
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
        <div
          className="p-8 space-y-3 rounded-xl mx-auto  shadow-xl"
          data-aos="zoom-in"
        >
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-gray-900">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="w-full px-4 py-3 border border-blue-100 rounded-md focus:outline-none focus:shadow-md focus:bg-blue-50"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-gray-900">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-blue-100 rounded-md focus:outline-none focus:shadow-md focus:bg-blue-50 "
                required
              />
              <p className="text-red-500">{error}</p>
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-100 font-semibold bg-yellow-500">
              Login
            </button>
          </form>
          <div className="flex justify-end text-xs text-gray-400">
            <button className="mt-1 text-gray-500">Reset Password?</button>
          </div>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm text-gray-500">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleLogin}
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 text-[1rem] text-gray-500">
            Don't have an account?
            <Link
              rel="noopener noreferrer"
              to="/register"
              className="underline text-yellow-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
