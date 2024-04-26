import React from "react";
import { Link, useLocation } from "react-router-dom";

const RightBar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div
      className="w-[300px] border border-orange-600 border-r-0 flex flex-col items-center justify-around"
      style={{ height: "600px" }}
    >
      <div>
        <div className="bg-blue-950 text-white font-semibild h-20 w-20 flex items-center rounded-full">
          <h1 className="mx-auto text-3xl">RJ</h1>
        </div>
        <h1 className="mt-2 text-md text-center font-semibold text-inter">
          Rajat Jagre
        </h1>
      </div>
      <div className="flex flex-col gap-1 items-start text-md">
        <NavLink to="/account/form">
          <a href="" className="px-2">
            View profile
          </a>
        </NavLink>
        <NavLink to="/account/form" currentPath={location.pathname}>
          <a href="" className="px-2">
            {" "}
            Profile
          </a>
        </NavLink>
        <NavLink to="/account/photo" currentPath={location.pathname}>
          <a href="" className="px-2">
            {" "}
            Photo
          </a>
        </NavLink>
        <NavLink to="/account/security" currentPath={location.pathname}>
          <a href="" className="px-2">
            {" "}
            Account Security
          </a>
        </NavLink>
        <NavLink to="/account/privacy" currentPath={location.pathname}>
          <a href="" className="px-2">
            {" "}
            Privacy
          </a>
        </NavLink>
        <NavLink to="/account/payment" currentPath={location.pathname}>
          <a href="" className="px-2">
            {" "}
            Payment Method
          </a>
        </NavLink>
        <NavLink to="/account/notification" currentPath={location.pathname}>
          <a href="" className="px-2">
            {" "}
            Notification
          </a>
        </NavLink>
        <NavLink to="/account/delete" currentPath={location.pathname}>
          <a href="" className="px-2">
            {" "}
            Close account
          </a>
        </NavLink>
      </div>
    </div>
  );
};

const NavLink = ({ to, currentPath, children }) => {
  const isActive = to === currentPath;

  return (
    <Link
      to={to}
      className={` ${isActive ? "bg-gray-200  py-1 rounded-md " : ""}`}
    >
      {children}
    </Link>
  );
};

export default RightBar;
