const express = require('express');
const bodyParser = require('body-parser');

const connectDB = require('./config/db');
const path = require('path');

const app = express();

connectDB();

// Init Middlewares
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
