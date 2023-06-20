// Import required modules
const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');

// Import middleware
const validateSchema = require('../../middleware/validate-schema');

// Import User model
const User = require('../../models/User');

const router = express.Router();

// @route  GET api/users
// @desc   Get all users
// @access Public
router.get('/', async (req, res) => {
    try {
        let users = await User.find()

        return res.json({ users })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route  GET api/users/:name
// @desc   Get specific user by name
// @access Public
router.get('/:username', async (req, res) => {
    try {
        const username = req.params.username
        const user = await User.findOne({ username });
        return res.json({ user })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route  DELETE api/users/:name
// @desc   Remove specific user by name
// @access Public
router.delete('/:username', async (req, res) => {
    try {
        const username = req.params.username
        const user = await User.findOne({ username });
        user.remove()
        return res.json({ msg: "Deleted successfully" })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route  POST api/users
// @desc   Register a new user 
// @access Public
router.post('/',
    [
        check('username', 'Name is required')
            .not()
            .isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check(
            'password',
            'Please enter password minimum with 6 characters'
        ).isLength({ min: 6 }),
    ],
    validateSchema,
    async (req, res) => {
        const { username, email, password } = req.body;
        try {
            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({
                    errors: [{ msg: 'User already exists' }],
                });
            }

            user = new User({
                username,
                email,
                password,
            });

            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();
            res.json(user);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });


module.exports = router;
