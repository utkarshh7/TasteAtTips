import React from 'react';
import dishes from '../dishes.json';

function OrderOnline() {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold text-center mb-8">Order Online</h1>
      <div className="row">
        {dishes.map((dish, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-lg rounded-lg overflow-hidden">
              <img src={dish.image} alt={dish.name} className="card-img-top" />
              <div className="card-body text-center">
                <h3 className="card-title text-xl font-semibold">{dish.name}</h3>
                <p className="card-text text-gray-600">{dish.description}</p>
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