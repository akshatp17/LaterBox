const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const registerUser = async (req, res) => {
  try {
    const existingUserMail = await userModel.findOne({ email: req.body.email });
    if (existingUserMail) {
      return res.status(400).send({
        success: false,
        message: "User already exists",
      });
    }

    const existingUserName = await userModel.findOne({
      username: req.body.username,
    });
    if (existingUserName) {
      return res.status(400).send({
        success: false,
        message: "Username already exists",
      });
    }
    if (!req.body.username || !req.body.email || !req.body.password) {
      return res.status(400).send({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const user = new userModel(req.body);
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.status(201).send({
      success: true,
      message: "User Registered successfully",
      user,
      token,
    });
  } catch (error) {
    console.error("Error in registerUser:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { registerUser };
