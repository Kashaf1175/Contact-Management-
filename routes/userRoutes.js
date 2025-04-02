const express = require('express');
const { registerUser } = require('../controllers/userController');
// const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', (req, res) => {
    res.json({ message: "Login the User" });
});

router.post('/current', (req, res) => {
    res.json({ message: "Current User Information" });
});

module.exports = router;