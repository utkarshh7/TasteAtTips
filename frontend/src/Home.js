import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/dish1.jpg" className="d-block w-100" alt="Dish 1" />
          </div>
          <div className="carousel-item">
            <img src="/images/dish2.jpg" className="d-block w-100" alt="Dish 2" />
          </div>
          <div className="carousel-item">
            <img src="/images/dish3.jpg" className="d-block w-100" alt="Dish 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      <div className="reviews mt-5 text-center">
        <h2>Customer Reviews</h2>
        <p>"Amazing experience!" - John Doe</p>
        <button className="btn btn-primary mt-3">Order Online</button>
      </div>
    </div>
  );
}

export default Home;
