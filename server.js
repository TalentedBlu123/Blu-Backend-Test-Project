// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Import database connection function
const connectDB = require('./config/db');

// Initialize express app
const app = express();

// Connect to database
connectDB();

// Middleware to parse incoming request body
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes
app.use('/api/users', require('./routes/api/users'));

// Set port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
