import React from "react";
import { Icons } from "../../assets/assets";
import img from "../../assets/images/3.png";
import FiveStar from "../../assets/images/fivestar.png";

const CourseCard = ({ name, rating, numRatings, price }) => {

  const handleAddToCart = () => {
    const item = { id, image, name, price };
    onAddToCart(item);
  };
  return (
    <div className="border-2 border-orange-500 flex flex-col w-80">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="px-2 py-4">
        <div className="text-orange-500 font-semibold ">
          <h1>{name}</h1>
        </div>
        <div>
          <h1 className="flex items-center py-2">
            <h1>{rating}</h1>{" "}
            <img src={FiveStar} alt="" className="w-24" />{" "}
            <span className="text-gray-400">{numRatings}</span>
          </h1>
          <div className="flex justify-between items-center">
            <h1 className="text-md font-bold"> ₹ {price}</h1>
            <button className="px-5 bg-orange-400 text-white font-bold py-1 rounded-sm"  onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
