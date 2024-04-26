import React from "react";

const Logout = () => {
  return (
    
         <div className="flex flex-col border border-gray-300 w-80 shadow-2xl fixed right-4 top-20  bg-white rounded-md">
        <div className="flex items-center px-4 py-3 gap-2">
          <div className="bg-blue-950 px-4 py-3 rounded-full text-white font-bold cursor-pointer ">
            <a href="https://images.news9live.com/wp-content/uploads/2023/11/Bhupendra-Jogi.png?w=1200&enlarge=true">
              RJ
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <h1>Rajat Jagre</h1>
            <h1>rajatjagre12@gmail.com</h1>
          </div>
        </div>
        <div className="flex flex-col border border-gray-300 border-gray-300k  py-4 px-4 font-semibold border-r-0 border-l-0 ">
          <a href="/MyLearning">My Learning</a>
          <a href="">My cart</a>
          <a href="">My Wishlist</a>
        </div>
        <div className="flex flex-col px-4 py-3 font-semibold ">
          <a href="">Help</a>
          <a href="">Log out</a>
        </div>
      </div>
    
  );
};

export default Logout;
