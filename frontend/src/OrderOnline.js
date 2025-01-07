import React from 'react';
import dishes from './dishes.json';

function OrderOnline() {
  return (
    <div className="order-online">
      <h1>Order Online</h1>
      <div className="dishes">
        {dishes.map((dish, index) => (
          <div key={index} className="dish">
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <button>Add +</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderOnline;