import dotenv from 'dotenv';

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import customerRoutes from './routes/customerRoutes';
import ownerRoutes from './routes/ownerRoutes';
import sportBaseRoutes from './routes/sportBaseRoutes';
import courtRoutes from './routes/courtRoutes';
import bookingRoutes from './routes/bookingRoutes';

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/customers', customerRoutes);
app.use('/owners', ownerRoutes);
app.use('/sport-bases', sportBaseRoutes);
app.use('/courts', courtRoutes);
app.use('/bookings', bookingRoutes);

// Read the connection string from environment variables
const dbConnectionString = process.env.DB_CONNECTION_STRING;

if (!dbConnectionString) {
  throw new Error(
    'DB_CONNECTION_STRING is not defined in the environment variables'
  );
}

// Connect to MongoDB
mongoose
  .connect(dbConnectionString)
  .then(() => console.log('MongoDB connected'))
  .catch((err) =>
    console.error('MongoDB connection error:', err)
  );

// Start the server
app.listen(port, () => {
  console.log(
    `Server is running on http://localhost:${port}`
  );
});
