const express = require('express');
const aiRoutes = require('./routes/ai.routes.js');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');  // Added helmet for security
const morgan = require('morgan');   // Added morgan for logging

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware Setup
app.use(express.json());
app.use(cors());

// Security Headers using Helmet
app.use(helmet());

// Logging using Morgan (use 'dev' for development, 'combined' for production)
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.status(200).send({ message: 'API is running...' }); // More descriptive response
});

app.use('/ai', aiRoutes);

// Centralized Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).send({ error: 'Something went wrong!' }); // Generic error response
});

module.exports = app;