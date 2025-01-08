import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Components
import Home from './components/Home';
import OrderOnline from './components/OrderOnline';
import Cart from './components/Cart';
import BookTable from './components/BookTable';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/book-table" element={<BookTable />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-md">
      <div className="container-fluid">
        <Link className="navbar-brand font-bold text-xl" to="/">TasteAtTips</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* ms-auto pushes items to the right */}
            <li className="nav-item">
              <Link className="nav-link icon-button" to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link icon-button" to="/order-online">
                <i className="fas fa-utensils"></i> Order Online
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link icon-button" to="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link icon-button" to="/book-table">
                <i className="fas fa-table"></i> Book a Table
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link icon-button" to="/login">
                <i className="fas fa-user"></i> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;