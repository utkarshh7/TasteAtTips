import React from 'react';
import '../App.css';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src='/images/slider-1.avif' className="d-block w-100" alt="Dish 1" />
          </div>
          <div className="carousel-item">
            <img src="/images/slider-2.avif" className="d-block w-100" alt="Dish 2" />
          </div>
          <div className="carousel-item">
            <img src="/images/slider-3.avif" className="d-block w-100" alt="Dish 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden"></span>
        </button>
      </div>

      <div className="reviews mt-5 text-center">
        <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
        <p className="text-lg italic text-gray-600 mb-4">"Amazing experience!" - John Doe</p>
        <button className="btn btn-primary mt-3 px-6 py-2 rounded-full shadow-lg transition duration-300 hover:bg-blue-600">Order Online</button>
      </div>
    </div>
  );
}

export default Home;