require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todo');
const userRoutes = require('./routes/user');

// Express App
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/v01/todo', todoRoutes);
app.use('/api/v01/user', userRoutes);
// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen fo request
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB & Listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

process.env;
