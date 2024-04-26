import React from 'react';
import { Icons } from '../../assets/assets'; 
import { Link } from 'react-router-dom';

function AddCart({ id, image, name, price, onAddToCart }) {
  const handleAddToCart = () => {
    const item = { id, image, name, price };
    onAddToCart(item);
  };

  return (
    <div className="mt-6 flex justify-center mb-8">
      <div className="border-2 border-orange-500 flex flex-col w-64 mx-4">
        <Link to='/coursedetails' className="block">
          <img src={image} alt={name} className="object-cover w-full " />
          <div className="text-orange-500 font-semibold px-2 py-3">
            <h1 className="text-lg">{name}</h1>
          </div>
          <div className="flex justify-between items-center px-2 py-1">
            <div className="flex items-center">
              <h1 className="text-lg">4.5</h1>
              <img src={Icons.FiveStar} alt="" className="w-8 ml-1" />
              <span className="text-gray-400 ml-2">(30,000)</span>
            </div>
            <h1 className="text-lg font-bold">₹ {price}</h1>
          </div>
        </Link>
        <div className="px-2 py-3">
          <button className="bg-orange-500 text-white px-4 py-2 rounded mt-2 w-full" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCart;
