// console.log('Hello World');

const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;

mongoose
  .connect('mongodb://localhost:27017/')
  .then(() => console.log('DB connected!'))
  .catch((err) => console.log(err));

// Middleware
app.use(express.urlencoded({ extended: true }));

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('home', { title: 'Home | TasteAtTips' });
});

const productRoutes = require('./routes/product.routes.js');
app.use(productRoutes);

// Server Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

