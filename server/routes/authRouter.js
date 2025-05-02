const express = require("express");
const router = express.Router();

// Import necessary controllers and middleware here
const { registerUser } = require("../controllers/userRegisterController");
const { loginUser } = require("../controllers/userLoginController");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
