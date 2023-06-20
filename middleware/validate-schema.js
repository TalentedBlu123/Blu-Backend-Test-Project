// Import validationResult from express-validator
const { validationResult } = require('express-validator');

// Define middleware function
module.exports = (req, res, next) => {
    // Check for errors in request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Return response with errors if there are any
        return res.status(400).json({ errors: errors.array() });
    }

    // Call next middleware function if there are no errors
    next();
};
