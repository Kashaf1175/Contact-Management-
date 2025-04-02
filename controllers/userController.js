const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

//@desc Register the User
//@route GET /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already exists");
    }


    res.json({ message: "Register the User" });
});

//@desc login the User
//@route GET /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "login user" });
});

//@desc Current User info
//@route GET /api/users/current
//@access public
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Current user info" });
});

module.exports = {registerUser, loginUser, currentUser};