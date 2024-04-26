import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cartItems, onDeleteItem }) {
  const [showCart, setShowCart] = useState(false); 
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const toggleCartVisibility = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      {/* <Link to="/cart"> */}
        <h2 onClick={toggleCartVisibility}>Cart ({cartItems.length} Items)</h2>
      {/* </Link>/</Link> */}
      {showCart && (
        <div className=''>
          <ul>
            {cartItems.map((item, index) => {
               const {name,image,price} = item
              return(
                <li key={index}>
                <img src={image} alt={name} /> 
                {name} - ${price}
                <button onClick={() => onDeleteItem(index)}>Remove</button>
              </li>
              )
            })}
          </ul>
          <p>Total: ${total}</p>
        </div>
      )}
    </div>
    
  );
}
