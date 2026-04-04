import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// Helper functions for validation
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
};

// @route   POST /api/auth/register
// @desc    Register a new user
router.post('/register', async (req, res) => {
    try {
        console.log('Register route hit');
        const { name, email, password } = req.body;
        console.log('Received data:', { name, email, password });

        if (!name || !email || !password) {
            console.log('Missing fields');
            return res.status(400).json({ msg: 'Please add all fields' });
        }

        if (!validateEmail(email)) {
            console.log('Invalid email format');
            return res.status(400).json({ msg: 'Invalid email format' });
        }

        if (!validatePassword(password)) {
            console.log('Invalid password strength');
            return res.status(400).json({ msg: 'Password must be at least 8 characters long, include an uppercase letter, and a number' });
        }

        // Check if user exists
        console.log('Checking if user exists with email:', email);
        const userExists = await User.findOne({ email });

        if (userExists) {
            console.log('User already exists');
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create user
        console.log('Creating new user...');
        const user = await User.create({
            name,
            email,
            password,
        });

        console.log('User created successfully:', user._id);

        if (user) {
            const token = generateToken(user._id);
            console.log('Token generated successfully');
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: token,
            });
        } else {
            res.status(400).json({ msg: 'Invalid user data' });
        }
    } catch (err) {
        console.error('Error during registration:', err);
        console.error('Error stack:', err.stack);
        res.status(500).json({ msg: 'Server error: ' + err.message });
    }
});

// @route   POST /api/auth/login
// @desc    Authenticate a user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check for user email
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ msg: 'Invalid credentials' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET /api/auth/me
// @desc    Get user data
router.get('/me', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

export default router;
