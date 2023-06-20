// Import mongoose
const mongoose = require('mongoose');

// Define database URL
const db = 'mongodb://localhost:27017/test'

// Define connectDB function
const connectDB = async () => {
    try {
        // Connect to MongoDB database
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });

        // Log message to console when connection is successful
        console.log('MongoDB connected...');
    } catch (err) {
        // Log error message to console and exit process with error code
        console.error(err.message);
        process.exit(1);
    }
};

// Export connectDB function
module.exports = connectDB;
