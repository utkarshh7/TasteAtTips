import React from 'react';
import './Footer.css'; // Optional: Custom styles for the footer

function Footer() {
  return (
    <footer className="footer bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>
              <strong>Address:</strong> 123 Foodie Lane, Flavor Town, FT 12345
            </p>
            <p>
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p>
              <strong>Email:</strong> info@tasteattips.com
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4">
            <h5 className="text-uppercase">Our Location</h5>
            <div className="map-container">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f0f0f%3A0x0!2sYour%20Business%20Name!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
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
      <div className="text-center p-3 bg-dark text-white">
        © {new Date().getFullYear()} TasteAtTips. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;