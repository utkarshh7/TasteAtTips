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
            <img src="/images/slider-1.avif" className="d-block w-100" alt="Dish 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white display-4 font-weight-bold">TasteAtTips</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/slider-2.avif" className="d-block w-100" alt="Dish 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white display-4 font-weight-bold">TasteAtTips</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/slider-3.avif" className="d-block w-100" alt="Dish 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-white display-4 font-weight-bold">TasteAtTips</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="d-flex justify-content-between align-items-start mt-5">
        <div className="image-box" style={{ flex: '1', marginRight: '20px' }}>
          <img 
            src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Review" 
            className="img-fluid rounded" 
          />
        </div>
        <div className="reviews-box" style={{ flex: '1', maxWidth: '300px', paddingRight: '50px' }}>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
            <div className="review">
              <p className="text-lg italic text-gray-600 mb-1">"Amazing experience!" - John Doe</p>
              <div className="star-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className="review">
              <p className="text-lg italic text-gray-600 mb-1">"The food was delicious!" - Jane Smith</p>
              <div className="star-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <button className="btn btn-primary mt-3 px-6 py-2 rounded-full shadow-lg transition duration-300 hover:bg-blue-600">Order Online</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
