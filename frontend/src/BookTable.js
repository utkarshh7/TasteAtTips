import React from 'react';

function BookTable() {
  return (
    <div className="book-table">
      <h1>Book a Table</h1>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="number" placeholder="Table for how many" />
        <input type="text" placeholder="Mobile Number" />
        <input type="datetime-local" />
        <button type="submit">Submit</button>
      </form>
      <div className="restaurant-location">
        <p>123 Food Street, Culinary City</p>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.687690!2d-122.420053!3d37.779026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809a!2sRestaurant!5e0!3m2!1sen!2sus!4v1570729022633"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
        ></iframe>
      </div>
    </div>
  );
}

export default BookTable;
