import React from "react";
import { Link } from "react-router-dom";

const Logout = ({ handleLogout }) => {
  return (
    <div className="flex flex-col border border-gray-300 w-80 shadow-2xl fixed right-4 top-20  bg-white rounded-md">
      <Link to="/account"><div className="flex items-center px-4 py-3 gap-2">
        
        
            <div className="bg-blue-950 px-4 py-3 rounded-full text-white font-bold cursor-pointer ">
              <a href="https://images.news9live.com/wp-content/uploads/2023/11/Bhupendra-Jogi.png?w=1200&enlarge=true">
                RJ
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <h1>Rajat Jagre</h1>
              <h1>rajatjagre12@gmail.com</h1>
            </div>
          
        
      </div></Link>
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
      <Link to="/">  <button onClick={handleLogout}>Log out</button></Link>
      </div>
    </div>
  );
};

export default Logout;
