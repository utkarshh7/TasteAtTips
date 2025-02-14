import React from 'react';
import dishes from '../dishes.json';
import './OrderOnline.css';

function OrderOnline() {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold text-center mb-8">Order Online</h1>
      <div className="row">
        {dishes.map((dish, index) => (
          <div key={index} className="col-md-4 mb-4 d-flex">
            <div className="card shadow-lg rounded-lg overflow-hidden flex-fill">
              <img src={dish.image} alt={dish.name} className="card-img-top dish-image" />
              <div className="card-body text-center">
                <h3 className="card-title text-xl font-semibold">{dish.name}</h3>
                <p className="card-text text-gray-600">{dish.description}</p>
                <p className="text-lg font-bold">{`Price: ₹${dish.price}`}</p>
                <p className={`badge ${dish.veg ? 'bg-success' : 'bg-danger'} text-white`}>
                  {dish.veg ? 'Vegetarian' : 'Non-Vegetarian'}
                </p>
                <button className="btn btn-success">Add +</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderOnline;