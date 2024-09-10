// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/football_booking')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Football Court Booking App');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
