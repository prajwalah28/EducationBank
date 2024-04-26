import React, { useState } from 'react';
import { Icons } from '../../assets/assets';
import Courses from './Courses';
import { Link } from 'react-router-dom';

function ShowCart() {
  const [cartItems, setCartItems] = useState(Courses);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleRemoveFromCart = (index) => {
    console.log('Removing item at index:', index);
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h1 className='font-inter text-4xl font-bold leading-tight text-center mt-28'>Your Shopping Cart</h1>
      <div className="container mx-auto px-4 flex mb-12">
        <div className="flex flex-wrap justify-center">
          {cartItems.map((item, index) => (
            <div key={index} className="mt-12 mx-4">
              <div className="border-2 border-orange-500 flex max-w-xl">
                <div className="w-1/3">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="px-4 py-2 w-2/3">
                  <div className="text-orange-500 font-semibold">
                    <h1>{item.name}</h1>
                  </div>
                  <div>
                    <h1 className="flex items-center">
                      <span className="mr-1">4.5</span>
                      <img src={Icons.FiveStar} alt="" className="w-20" />
                      <span className="text-gray-400 ml-1">(30,000)</span>
                    </h1>
                    <div className='flex gap-48'>
                      <h1 className="text-md font-bold mt-4">₹ {item.price}</h1>
                      <button className="bg-orange-500 text-white px-4 py-2 rounded mt-2" onClick={() => handleRemoveFromCart(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8  ">
          <div className="">
            <p className="font-inter text-2xl font-bold leading-tight text-center ">Total:</p>
            <p className='mb-4'>₹ {calculateTotal()}/-</p>
          </div>
          <Link to='/Payment'>
          <div className='mb-4'><button className="bg-orange-500 font-bold text-white px-4 py-2 rounded">
            Payment
          </button></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShowCart;
