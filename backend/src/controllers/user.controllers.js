import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registeruser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user or email already exists
        const existingUser = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (existingUser) {
            return res.status(400).json({ message: "Username or email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        const newUser = new User({ username, email, password: hashedPassword, token });
        await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            token
        });
    } catch (error) {
        console.error("Error in registeruser:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare the provided password against the hashed password in DB
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate a new token upon login
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // Update user's token in the db (since your schema requires it)
        user.token = token;
        await user.save();

        res.status(200).json({
            message: "User logged in successfully",
            token
        });
    } catch (error) {
        console.error("Error in loginuser:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export { registeruser, loginuser };