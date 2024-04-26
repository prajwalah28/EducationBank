// Final.js

import React, { useState, useEffect } from 'react';
import AddCart from './Addcart';
import Courses from './Courses';
import Cart from './Cart';
import Header from '../../components/Header/Header';
import ShowCart from './ShowCart'; // Import Header component

function Final() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleDeleteItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <Header cartCount={cartItems.length} /> {/* Pass cartCount as a prop */}
      <div className='mt-32'><h1 className='text-3xl font-bold text-center'>Courses</h1></div>
      <div style={{ display: 'flex' }}>
        <div className='grid grid-cols-5 justify-items-center gap-4' style={{ marginRight: '20px' }}>
          {Courses.map(course => (
            <AddCart
              key={course.id}
              id={course.id}
              image={course.image}
              name={course.name}
              price={course.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <Cart cartItems={cartItems} onDeleteItem={handleDeleteItem} />
        {/* <ShowCart cartItems={cartItems} onDeleteItem={handleDeleteItem}/> */}
      </div>
    </div>
  );
}

export default Final;
