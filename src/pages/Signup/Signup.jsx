import React from "react";
import { useState } from "react";
import { Icons } from "../../assets/assets";
import { Link } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col content-center">
        <h1 className="mb-2 font-bold">Sign up and Start Learning</h1>
        <form
          className="flex flex-col place-content-center gap-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="w-98 outline-0 border-2 px-3 py-5 placeholder:font-bold placeholder-gray-900 border-orange-300 rounded"
            type="text"
            placeholder="Full Name"
            required
          ></input>

          <input
            className="w-98 outline-0 border-2 px-3 py-5 placeholder:font-bold placeholder-gray-900 border-orange-300 rounded"
            type="email"
            placeholder="Email"
            required
          ></input>

          <div className="flex items-center border-2 border-orange-300 w-98 outline-0  px-3 py-5 gap-8  rounded ">
            <input
              className=" placeholder:font-bold placeholder-gray-900 outline-0 w-80"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            ></input>
            <button
              className="float-end w-6"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <Icons.BiSolidShow className="h-6 w-6" />
              ) : (
                <Icons.BiSolidHide className="h-6 w-6" />
              )}
            </button>
          </div>

          <div>
            <h3 className="mt-4 mb-2 font-light text-base text-center">
              By signing up, you agree to our{" "}
              <span className="text-orange-400 cursor-pointer">Terms</span> and{" "}
              <span className="text-orange-400 cursor-pointer">
                Privacy Policy
              </span>
            </h3>

            <Link to="/account">
              {" "}
              <button
                className="px-44 py-5 bg-blue-950 text-white rounded drop-shadow-md "
                type="submit"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </form>

        <div className="w-98 bg-gray-300 h-0.5 mt-8 "></div>

        <div>
          <h3 className="mt-4 text-center font-normal">
            Already have an account?
            <Link to={"/login"}>
              <span className="text-orange-400 cursor-pointer">Log In</span>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Signup;
