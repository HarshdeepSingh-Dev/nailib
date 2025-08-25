import User from "../../../models/User.js";
import { hashPassword, comparePassword } from "../../middleware/password.js";
import jwt from 'jsonwebtoken';

// Handle new user creation
export async function register(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        const hashed = await hashPassword(password);

        const newUser = await User.create({
            name,
            email,
            password: hashed
        });

        return res.status(201).json({
            message: 'User registered successfully',
            user: { name: newUser.name, email: newUser.email }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
}

// Handle user sign-in
export async function signin(req, res) {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password required' });
    }

    try {
        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        // compare password
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        //  create a JWT
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
        );
        return res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
};
