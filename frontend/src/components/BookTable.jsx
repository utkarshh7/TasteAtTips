import React from 'react';

function BookTable() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-96 mt-20"> {/* Added mt-20 for spacing */}
        <h1 className="text-center text-3xl font-bold mb-6 text-blue-600">Book a Table</h1>
        <form className="reservation-form">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="form-control w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder="Table for how many"
              required
              min="1"
              className="form-control w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Mobile Number"
              required
              pattern="[0-9]{10}"
              className="form-control w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="datetime-local"
              required
              className="form-control w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="btn btn-primary w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200">
            Submit
          </button>
        </form>
        <div className="restaurant-location text-center mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Our Location</h2>
          <p className="text-gray-600">ABES Engineering College, Ghaziabad</p>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789012!2d77.4430179!3d28.6340537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee22c60837b7%3A0x7c35343eceb7bde0!2sABES%20Engineering%20College!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            className="mt-3 rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default BookTable;