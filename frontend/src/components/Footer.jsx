import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>
              <strong>Address:</strong> ABES Engineering College, Ghaziabad
            </p>
            <p>
              <strong>Phone:</strong> +91 981867xxxx
            </p>
            <p>
              <strong>Email:</strong> info@tasteattips.com
            </p>
            <div className="social-media">
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-4">
            <h5 className="text-uppercase">Our Location</h5>
            <div className="map-container">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789012!2d77.4430179!3d28.6340537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee22c60837b7%3A0x7c35343eceb7bde0!2sABES%20Engineering%20College!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3 footer-bottom">
        © {new Date().getFullYear()} TasteAtTips. Made By Utkarsh Dubey & Utsav Tripathi.
      </div>
    </footer>
  );
}

export default Footer;