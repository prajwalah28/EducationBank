import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/LoginContext"; // Import the UserContext

const Logout = ({ handleLogout }) => {
  const { userName, userEmail } = useContext(UserContext); // Consume the UserContext

  return (
    <div className="flex flex-col border border-gray-300 w-80 shadow-2xl fixed right-4 top-20  bg-white rounded-md">
      <Link to="/account">
        <div className="flex items-center px-4 py-3 gap-2">
          <div className="bg-blue-950 px-4 py-3 rounded-full text-white font-bold cursor-pointer">
           
          {userName && userName.split(" ").map((name) => name[0].toUpperCase()).join("")}
          </div>
          <div className="flex flex-col gap-1">
            <h1>{userName}</h1>
            <h1>{userEmail}</h1>
          </div>
        </div>
      </Link>
      <div className="flex flex-col border border-gray-300 border-gray-300k  py-4 px-4 font-semibold border-r-0 border-l-0 ">
        <Link to="/MyLearning">
          <a>My Learning</a>
        </Link>
        <Link to="/cart">
          <a>My cart</a>
        </Link>
        <Link to="/cart">
          <a>My Wishlist</a>
        </Link>
      </div>
      <div className="flex flex-col px-4 py-3 font-semibold ">
        <a>Help</a>
        <Link to="/">
          <button onClick={handleLogout}>Log out</button>
        </Link>
      </div>
    </div>
  );
};

export default Logout;
