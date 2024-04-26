import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6 font-bold">
      
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-lg lg:flex-grow  flex justify-around">
          
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-black mr-4"
          >
            Course Content
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-black mr-4"
          >
            Overview
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-black mr-4"
          >
            Q&A
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-black mr-4"
          >
            Notes
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-black mr-4"
          >
            Announcements
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-black mr-4"
          >
            Reviews
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-black"
          >
            Learning Tools
          </a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;