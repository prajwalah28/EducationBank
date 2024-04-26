import React from "react";
import { Link } from "react-scroll";
import { Icons } from "../assets/assets";

const Review = (props) => {
  return (
    <>
      <div className="flex flex-row justify-center bg-gray-100" id="review">
        <div>
          <img src={Icons.support1} className="py-6 pr-10" />
        </div>
        <div className="flex flex-col">
          <div className="mt-12">
            <p className="text-3xl font-medium">
              “I’m proud to wake up knowing my <br /> work is helping people
              around the <br /> world build great things. While <br /> being a
              full-time instructor is hard <br />
              work, it lets you work when, where,
              <br /> and how you want.”
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold">Frank Kane</h2>

            <h2 className="mt-2 text-orange-400 cursor-pointer font-medium">
              Data Science & IT Certifications
            </h2>
          </div>
        </div>
        <div className="mt-52 ml-12">
          <Link to="overview" smooth={true} duration={500}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <Icons.MdNavigateNext className="rounded" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Review;
