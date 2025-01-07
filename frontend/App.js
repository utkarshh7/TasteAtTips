import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Components
import Home from './components/Home';
import OrderOnline from './components/OrderOnline';
import Cart from './components/Cart';
import BookTable from './components/BookTable';
import LoginSignup from './components/LoginSignup';

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
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
}
function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Restaurant</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order-online">Order Online</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/book-table">Book a Table</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login/Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
export default App;  